import React from 'react';
import PropTypes from 'prop-types';

const LoginScreen = ({onClick}) => (
    //TODO: Find out how to send input data to dispatch function
    <form onSubmit={onClick}>
        <div>
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" required/>

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" required/>

            <button type="submit">Log In</button>
        </div>
    </form>
);

export default LoginScreen;