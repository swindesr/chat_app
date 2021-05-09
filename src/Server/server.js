const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    },
});

server.listen(4000, () => {
    console.log(`Listening on port 4000`);
});

const crypto = require('crypto');
const randomId = () => crypto.randomBytes(8).toString('hex');

const { InMemorySessionStore } = require('./sessionStore');
const sessionStore = new InMemorySessionStore();

const { InMemoryMessageStore } = require('./messageStore');
const messageStore = new InMemoryMessageStore();

// Manage sessions in storage
io.use((socket, next) => {
    const sessionId = socket.handshake.auth.sessionId;
    if (sessionId) {
        const session = sessionStore.findSession(sessionId);
        if (session) {
            socket.sessionId = sessionId;
            socket.userId = session.userId;
            socket.username = session.username;
            return next();
        }
    }

    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }
    socket.sessionId = randomId();
    socket.userId = randomId();
    socket.username = username;
    next();
});

io.on("connection", (socket) => {
    console.log("a user connected");

    sessionStore.saveSession(socket.sessionId, {
        userId: socket.userId,
        username: socket.username,
        connected: true,
    });

    socket.join(socket.userId);

    const sessions = sessionStore.findAllSessions();
    const users = [];
    sessions.forEach((session) => {
        users.push({
            userId: session.userId,
            username: session.username,
            connected: session.connected,
            //messages: messagesPerUser.get(session.userID) || [],
        });
    });
    socket.emit('users', users);

    socket.emit('session', {
        sessionId: socket.sessionId,
        userId: socket.userId,
        username: socket.username
    });

    // notify existing users
    socket.broadcast.emit("user connected", {
        userId: socket.userId,
        username: socket.username,
        connected: true,
        //messages: [],
    });

    socket.on("new message", (message) => {
        messageStore.saveMessage(message);
        io.in(socket.userId).emit("new message", message);
        messageStore.logAll();
    });

    socket.on("disconnect", async () => {
        const matchingSockets = await io.in(socket.userId).allSockets();
        const isDisconnected = matchingSockets.size === 0;
        if (isDisconnected) {
            console.log("a user disconnected");
            socket.broadcast.emit("user disconnected", socket.userId);
            sessionStore.saveSession(socket.sessionId, {
                userId: socket.userId,
                username: socket.username,
                connected: false,
            });
        }
    });
});