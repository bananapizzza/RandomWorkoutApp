import React from 'react';
import Login from './Login';
import {connect} from 'react-redux';

const AccountMenu = ({isLoggedIn}) => {
    //TODO: Make the screen for after login
    if(isLoggedIn){
        return (<Login/>);
    } else {
        return (<Login/>);
    }
};

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(
    mapStateToProps
)(AccountMenu);