import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import useGoogleFacebook from '../../hooks/useGoogleFacebook';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './SignUp.css';
import auth from '../../Firebase/firebase.init';
import { UseCartIcon } from '../../App';


const SignUp = () => {
    const [, , , setUser] = useContext(UseCartIcon);
    const [handleGoogleSignIn, handleFacebookSignIn] = useGoogleFacebook();
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
    const [userName, setUserName] = useState({ value: '', error: '' });
    const [newUser, setNewUser] = useState({});

    const handleDisplayName = event => {
        const displayNameInput = event.target.value;
        if (userName) {
            setUserName({ value: displayNameInput, error: '' })
        }
    }

    const handleEmail = event => {
        const emailInput = event.target.value;
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInput)) {
            setEmail({ value: emailInput, error: '' });
        } else {
            setEmail({ value: '', error: 'Please provide a valid email' })
        }
    }

    const handlePassword = event => {
        const passwordInput = event.target.value;
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

    const handleConfirmPassword = (event) => {
        const confirmInput = event.target.value;

        if (confirmInput !== password.value) {
            setConfirmPassword({ value: "", error: "Password mismatched" });
        } else {
            setConfirmPassword({ value: confirmInput, error: "" });
        }
    };


    const handleSubmit = event => {
        event.preventDefault();
        if (userName.value === "") {
            setUserName({ value: "", error: "Username is required" });
        }
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }
        if (confirmPassword.value === "") {
            setConfirmPassword({
                value: "",
                error: "Password confirmation is required",
            });
        }
        if (email.value && userName.value && password.value === confirmPassword.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((result) => {
                    setUser(result.user);
                    setNewUser(result.user);
                    updateProfile(auth.currentUser, {
                        displayName: userName.value
                    }).then(() => {
                        console.log('User name updated');
                        setUser(newUser);
                    }).catch((error) => {
                        console.log(error);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
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
                <input onBlur={handleConfirmPassword} type="password" name="" id="confirm-password" />
                {confirmPassword.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {confirmPassword.error}
                    </small>
                )}
                <br />
                <button className='login-btn' type='submit'>
                    Create account
                </button>
                <small>
                    Already have an account?
                    <Link to='/signin'>
                        Sign In
                    </Link>
                </small>
                <small>or</small>
                <button
                    onClick={handleGoogleSignIn}
                    className='social-btn'>
                    <div
                        className='social-icon-wrapper'>
                        <FontAwesomeIcon className="icon" icon={faGoogle} />
                    </div>
                    <div className='social-btn-text-wrapper'>
                        <small>
                            Continue with Google
                        </small>
                    </div>
                </button>
                <hr />
                <button
                    onClick={handleFacebookSignIn}
                    className='social-btn'>
                    <div
                        className='social-icon-wrapper'>
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                    </div>
                    <div className='social-btn-text-wrapper'>
                        <small>
                            Continue with Facebook
                        </small>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default SignUp;