import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';
import auth from '../Firebase/firebase.init';
import useUserState from "./useUserState";


const useCreateEmailPassword = () => {
    const { setUser } = useUserState();
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
    const [userName, setUserName] = useState({ value: '', error: '' });


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
                    updateDisplayName();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    const updateDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: userName.value
        }).then(() => {
            console.log('User name updated');
        }).catch((error) => {
            console.log(error);
        });
    }

    return { handleDisplayName, handleEmail, handlePassword, handleConfirmPassword, handleSubmit, email, password, userName, confirmPassword }
}

export default useCreateEmailPassword;