import React from 'react';
import {Field, reduxForm} from 'redux-form';
import signUpInfoSubmit from "../actions/actions_signUp";

const SignUpComponent = (props) => {
    const {handleSubmit, pristine, submitting} = props;
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
            <div>
                <label><b>Confirm Password</b></label>
                <Field
                    name="confirm_password"
                    component="input"
                    type="text"
                    placeholder="Confirm Password"
                />
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'SignUpSubmit',
    onSubmit: signUpInfoSubmit
})(SignUpComponent);