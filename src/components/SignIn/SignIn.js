import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useState } from 'react';
import './SignIn.css';


const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, , loadingGoogle,] = useSignInWithGoogle(auth);
    const [signInWithFacebook, , loadingFacebook,] = useSignInWithFacebook(auth);
    const [signInWithEmailAndPassword, , loadingEmail,] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const handleEmail = event => {
        const emailInput = event.target.value;
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
            signInWithEmailAndPassword(email.value, password.value)
                .then((result) => {
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setEmail({ value: '', error: 'Email Required' })
            setPassword({ value: '', error: 'Password Required' })
        }
    }

    const handleGoogle = event => {
        event.preventDefault();
        signInWithGoogle()
            .then(() => navigate(from, { replace: true }))
    }

    const handleFacebook = event => {
        event.preventDefault();
        signInWithFacebook()
            .then(() => navigate(from, { replace: true }))
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
                    {loadingEmail ? 'Loading...' : 'Login'}
                </button>
                <small>
                    New to Influencer Gears?
                    <Link to='/signup'>
                        Create New Account
                    </Link>
                </small>
                <small>or</small>
                <button
                    onClick={handleGoogle}
                    className='social-btn'>
                    <div
                        className='social-icon-wrapper'>
                        <FontAwesomeIcon className="icon" icon={faGoogle} />
                    </div>
                    <div className='social-btn-text-wrapper'>
                        <small>
                            {loadingGoogle ? 'Loading...' : 'Continue with Google'}
                        </small>
                    </div>
                </button>
                <hr />
                <button
                    onClick={handleFacebook}
                    className='social-btn'>
                    <div
                        className='social-icon-wrapper'>
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                    </div>
                    <div className='social-btn-text-wrapper'>
                        <small>
                            {loadingFacebook ? 'Loading...' : 'Continue with Facebook'}
                        </small>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default SignIn;