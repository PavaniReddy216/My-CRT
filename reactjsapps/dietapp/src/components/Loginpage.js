import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    
        if (username === 'Admin' && password === 'Admin123') {
            alert('welcome!', username);
        } else {
            alert('Login failed. Please check your username and password.');
        }

        setUsername('');
        setPassword('');
        setgender('');
        setaddress('');
    };

    return (
        <div><center>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit" src="/login.js">Login</button>
            </form></center>
        </div>
    );
};

export default LoginForm;