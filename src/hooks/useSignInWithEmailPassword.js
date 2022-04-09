import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from '../Firebase/firebase.init.js';
import useUserState from './useUserState';

const useSignInWithEmailPassword = () => {
    const { setUser } = useUserState();
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [stateChangeInEmailPassword, setStateChangeInEmailPassword] = useState(false);

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
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((result) => {
                    setUser(result.user);
                    console.log(result.user);
                })
                .catch((error) => {
                    setStateChangeInEmailPassword(true);
                    console.log(error);
                });
        } else {
            setEmail({ value: '', error: 'Email Required' })
            setPassword({ value: '', error: 'Password Required' })
        }
    }

    return { handleSignInEmailPassword, email, handleEmail, password, handlePassword, stateChangeInEmailPassword };
}

export default useSignInWithEmailPassword;