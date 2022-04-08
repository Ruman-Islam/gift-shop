import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import './SignIn.css';
import useGoogleFacebook from '../../hooks/useGoogleFacebook';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';
import { UseCartIcon } from '../../App';


const SignIn = () => {
    const [handleGoogleSignIn, handleFacebookSignIn] = useGoogleFacebook();
    const [, , , setUser] = useContext(UseCartIcon);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignInEmailPassword = event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSignInEmailPassword}>
                <h5>Log In</h5>
                <label htmlFor="email">Email</label>
                <input onBlur={(event) => setEmail(event.target.value)} type="email" name="" id="email" />
                <label htmlFor="password">Password</label>
                <input onBlur={(event) => setPassword(event.target.value)} type="password" name="" id="password" />
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