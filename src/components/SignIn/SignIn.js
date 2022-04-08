import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import './SignIn.css';
import useGoogleFacebook from '../../hooks/useGoogleFacebook';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';
import { UseCartIcon } from '../../App';
import { AiOutlineExclamationCircle } from "react-icons/ai";


const SignIn = () => {
    const [handleGoogleSignIn, handleFacebookSignIn] = useGoogleFacebook();
    const [, , , setUser] = useContext(UseCartIcon);
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const handleEmail = event => {
        const emailInput = event.target.value;
        // console.log(typeof emailInput);
        if ((emailInput === "")) {
            setEmail({ value: '', error: 'Email Required' })
        } else {
            setEmail({ value: emailInput, error: '' })
        }
    }

    const handlePassword = event => {
        const passwordInput = event.target.value;
        if (passwordInput === '') {
            setPassword({ value: '', error: 'Password Required' })
        } else {
            setPassword({ value: passwordInput, error: '' })
        }
    }

    const handleSignInEmailPassword = event => {
        event.preventDefault();
        if (email.value && password.value) {
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    setUser(result.user);
                    console.log(result.user);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setEmail({ value: '', error: 'Email Required' })
            setPassword({ value: '', error: 'Password Required' })
        }

    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSignInEmailPassword}>
                <h5>Log In</h5>
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
                <br />
                <button
                    className='login-btn' type='submit'>
                    Login
                </button>
                <small>
                    New to Influencer Gears?
                    <Link to='/signup'>
                        Create New Account
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

export default SignIn;