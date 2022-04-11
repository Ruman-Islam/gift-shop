import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useState } from 'react';
import './SignIn.css';
import useFirebase from '../../hooks/useFirebase';


const SignIn = () => {
    const { googleSignIn,
        facebookSignIn,
        handleSignWithInEmailAndPassword,
        googleLoading,
        fbLoading,
        emailLoading,
        error
    } = useFirebase();

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

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.value && password.value) {
            handleSignWithInEmailAndPassword(email.value, password.value);
        } else {
            setEmail({ value: '', error: 'Email Required' })
            setPassword({ value: '', error: 'Password Required' })
        }
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleLogin}>
                <h5>Log In</h5>
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmail} type="email" name="" id="email" />
                {email.error &&
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {email.error}
                    </small>
                }
                <label htmlFor="password">Password</label>
                <input onBlur={handlePassword} type="password" name="" id="password" />
                {password.error &&
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {password.error}
                    </small>
                }
                <br />
                <button
                    className='login-btn' type='submit'>
                    {emailLoading ? 'Loading...' : 'Login'}
                </button>
                {error &&
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {error}
                    </small>}
                <small>
                    <Link to='/signup'>
                        New to Influencer Gears?
                    </Link>
                </small>
                <small>or</small>
                <button
                    onClick={(e) => googleSignIn(e)}
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
                    onClick={(e) => facebookSignIn(e)}
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

export default SignIn;