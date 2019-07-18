import React from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import submit from "../actions/actions_login";

const LoginComponent = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label><b>Username</b></label>
                <Field
                    name="username"
                    component="input"
                    type="text"
                    placeholder="Enter Username"
                />
            </div>
            <div>

                <label><b>Password</b></label>
                <Field
                    name="password"
                    component="input"
                    type="text"
                    placeholder="Enter Password"
                />

            </div>
        </form>
    );
};

export default reduxForm({
    form: 'LoginSubmit',
    onSubmit: submit
})(LoginComponent);