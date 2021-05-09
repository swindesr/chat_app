class MessageStore {
    saveMessage(message) { }
    findMessagesForUser(userID) { }
}

class InMemoryMessageStore extends MessageStore {
    constructor() {
        super();
        this.messages = [];
    }

    saveMessage(message) {
        this.messages.push(message);
    }

    findMessagesForUser(userID) {
        return this.messages.filter(
            ({ from, to }) => from === userID || to === userID
        );
    }

    logAll() {
        this.messages.forEach(message => console.log(message));
    }
}

module.exports = {
    InMemoryMessageStore
};