import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import useGoogleFacebook from '../../hooks/useGoogleFacebook';


const SignUp = () => {
    const [handleGoogleSignIn, handleFacebookSignIn] = useGoogleFacebook();
    return (
        <div className='form-container'>
            <form >
                <h5>Sign Up</h5>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name="" id="confirm-password" />
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