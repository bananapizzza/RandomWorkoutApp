import React from 'react';
import Login from './LoginButton';
import {connect} from 'react-redux';
import LoginComponent from "../components/LoginComponent";
import LoginButton from "./LoginButton";

const AccountMenu = ({isLoggedIn}) => {
    //TODO: Make the screen for after login
    if (isLoggedIn) {
        return (<Login/>);
    } else {
        return (
            <div>
                <LoginComponent/>
                <LoginButton/>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(
    mapStateToProps
)(AccountMenu);