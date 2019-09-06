import React from 'react';
import MyProfile from '../components/MyProfile';
import {connect} from 'react-redux';
import SignUpComponent from "../components/SignUpComponent";

const SignUpMenu = ({isSignedUp, username, signUpError}) => {
    //TODO: Make the screen for after login
    if (isSignedUp) {
        return (<MyProfile username={username}/>);
    } else {
        return (
            <div>
                <SignUpComponent/>
                <p>
                    {signUpError}
                </p>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isSignedUp: state.signUpProcess.isSignedUp,
    username: state.signUpProcess.username,
    signUpError: state.signUpProcess.signUpError
});

export default connect(
    mapStateToProps
)(SignUpMenu);