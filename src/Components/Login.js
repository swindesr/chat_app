import React, { useState } from 'react'

const Login = ({ login }) => {
    const [username, setUsername] = useState("");

    const attemptLogin = () =>
        username.length
            ? login(username)
            : null

    return (
        <div id="loginContainer" className="centered">
            <input
                placeholder="Enter username..."
                onChange={e => setUsername(e.target.value)}
                value={username}
            >
            </input>
            <button onClick={attemptLogin}>Send</button>
        </div>
    );
};

export default Login;
