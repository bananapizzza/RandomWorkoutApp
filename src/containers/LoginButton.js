import React from 'react';
import {connect} from 'react-redux';
import LoginComponent from "../components/LoginComponent";
import {submit} from 'redux-form';

const LoginButton = ({dispatch}, props) => {
    const {pristine, submitting} = props;
    return (
        <button type="submit" disabled={pristine || submitting} onClick={() => dispatch(submit('LoginSubmit'))}>Log
            In</button>
    );
};

export default connect()(LoginButton);