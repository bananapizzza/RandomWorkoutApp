import React from 'react';
import {Field, reduxForm} from 'redux-form';
import signUpInfoSubmit from "../actions/actions_signUp";

const required = value => value ? undefined : 'Required';
const passwordValidate = value => {
    const regexForLength = new RegExp("(?=.{8,}).*");
    const regexForLowerCase = new RegExp("(?=.*[a-z]).*");
    const regexForUpperCase = new RegExp("(?=.*[A-Z]).*");
    const regexForNumber = new RegExp("(?=.*[0-9]).*");

    if(!regexForLength.test(value)){
        return 'Password must be more than 8 characters';
    } else if(!regexForLowerCase.test(value)){
        return 'Password must contain at least one lower case';
    } else if(!regexForUpperCase.test(value)) {
        return 'Password must contain at least one upper case';
    } else if(!regexForNumber.test(value)){
        return 'Password must contain at least one number';
    }
    return undefined;
};
const passwordMustMatch = (value, allValues) => value !== allValues.password? 'Passwords do not match' : undefined;

const renderField = ({input, label, placeholder, type, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);


const SignUpComponent = (props) => {
    const {handleSubmit, pristine, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="username"
                label="Username"
                component={renderField}
                type="text"
                placeholder="Enter Username"
                validate={[required]}
            />
            <Field
                name="password"
                label="Password"
                component={renderField}
                type="text"
                placeholder="Enter Password"
                validate={[required, passwordValidate]}
            />
            <Field
                name="confirm_password"
                label="Confirm Password"
                component={renderField}
                type="text"
                placeholder="Confirm Password"
                validate={[required, passwordMustMatch]}
            />
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