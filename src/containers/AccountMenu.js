import React from 'react';
import MyProfile from '../components/MyProfile';
import {connect} from 'react-redux';
import LoginComponent from "../components/LoginComponent";
import LoginButton from "./LoginButton";

const AccountMenu = ({isLoggedIn, username, loginError}) => {
    //TODO: Make the screen for after login
    if (isLoggedIn) {
        return (<MyProfile username={username}/>);
    } else {
        return (
            <div>
                <LoginComponent/>
                <LoginButton/>
                <p>
                    {loginError}
                </p>
                <p>
                    <a href='/sign_up'>Sign Up</a>
                </p>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isLoggedIn: state.loginProcess.isLoggedIn,
    username: state.loginProcess.username,
    loginError: state.loginProcess.loginError
});

export default connect(
    mapStateToProps
)(AccountMenu);