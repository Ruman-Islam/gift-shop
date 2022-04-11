import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useFirebase from '../../hooks/useFirebase';
import './SignUp.css';


const SignUp = () => {
    const {
        googleSignIn,
        facebookSignIn,
        handleCreateAccountWithEmailAndPassword,
        googleLoading,
        fbLoading,
        emailLoading,
        error
    } = useFirebase();

    const [userName, setUserName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });

    const handleDisplayName = e => {
        const displayNameInput = e.target.value;
        if (displayNameInput) {
            setUserName({ value: displayNameInput, error: '' })
        }
    }

    const handleEmail = e => {
        const emailInput = e.target.value;
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInput)) {
            setEmail({ value: emailInput, error: '' });
        } else {
            setEmail({ value: '', error: 'Please provide a valid email' })
        }
    }

    const handlePassword = e => {
        const passwordInput = e.target.value;
        if (passwordInput.length < 6) {
            setPassword({ value: '', error: 'Password too short' })
        } else if (!/^(?=.*[A-Z])/.test(passwordInput)) {
            setPassword({ value: '', error: 'Provide at least a capital letter' })
        } else if (!/(?=.*[!@#$&*])/.test(passwordInput)) {
            setPassword({ value: '', error: 'Provide at least a special character' })
        } else if (!/(?=.*[0-9])/.test(passwordInput)) {
            setPassword({ value: '', error: 'Provide at least a number' })
        } else {
            setPassword({ value: passwordInput, error: '' })
        }
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (userName.value === "") {
            setUserName({ value: "", error: "Username is required" });
        }
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }
        if (confirmPassword.value !== password.value) {
            console.log(confirmPassword.value);
            setConfirmPassword({ value: "", error: "Password mismatched" });
        }
        if (userName.value && email.value && password.value && confirmPassword.value) {
            handleCreateAccountWithEmailAndPassword(userName.value, email.value, password.value);
        }
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleRegister}>
                <h5>Sign Up</h5>
                <label htmlFor="username">Username</label>
                <input onBlur={handleDisplayName} type="text" name="" id="username" />
                {userName.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {userName.error}
                    </small>
                )}
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmail} type="email" name="" id="email" />
                {email.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {email.error}
                    </small>
                )}
                <label htmlFor="password">Password</label>
                <input onBlur={handlePassword} type="password" name="" id="password" />
                {password.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {password.error}
                    </small>
                )}
                <label htmlFor="confirm-password">Confirm Password</label>
                <input onBlur={(e) => setConfirmPassword({ value: e.target.value, error: "" })} type="password" name="" id="confirm-password" />
                {confirmPassword.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {confirmPassword.error}
                    </small>
                )}
                <br />
                <button
                    className='login-btn' type='submit'>
                    {emailLoading ? 'Loading...' : 'Create account'}
                </button>
                {error &&
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {error}
                    </small>
                }
                <small>
                    <Link to='/signin'>
                        Already have an account?
                    </Link>
                </small>
                <small>or</small>
                <button
                    onClick={googleSignIn}
                    className='social-btn'>
                    <div
                        className='social-icon-wrapper'>
                        <FontAwesomeIcon className="icon" icon={faGoogle} />
                    </div>
                    <div className='social-btn-text-wrapper'>
                        <small>
                            {googleLoading ? 'Loading...' : 'Continue with Google'}
                        </small>
                    </div>
                </button>
                <hr />
                <button
                    onClick={facebookSignIn}
                    className='social-btn'>
                    <div
                        className='social-icon-wrapper'>
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                    </div>
                    <div className='social-btn-text-wrapper'>
                        <small>
                            {fbLoading ? 'Loading...' : 'Continue with Facebook'}
                        </small>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default SignUp;