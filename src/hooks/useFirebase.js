import {
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";


const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [user, setUser] = useState({});
    const [googleLoading, setGoogleLoading] = useState(false);
    const [fbLoading, setFbLoading] = useState(false);
    const [emailLoading, setEmailLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const googleSignIn = e => {
        setGoogleLoading(true);
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                navigate(from, { replace: true });
                setGoogleLoading(false);
            }).catch((error) => {
                setError(error.message);
            });
    }

    const facebookSignIn = e => {
        setFbLoading(true);
        e.preventDefault();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
                navigate(from, { replace: true });
                setFbLoading(false);
            }).catch((error) => {
                setError(error.message);
            });
    }

    const handleSignWithInEmailAndPassword = (email, password) => {
        setEmailLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                navigate(from, { replace: true });
                setEmailLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setEmailLoading(false);
            });
    }

    const handleCreateAccountWithEmailAndPassword = (name, email, password) => {
        setEmailLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                await updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setEmailLoading(false);
                    setUser(result.user);
                    navigate((-2), from, { replace: true });
                }).catch((error) => {
                    setError(error.message);
                });
            })
            .catch((error) => {
                setError(error.message);
                setEmailLoading(false);
            });

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        googleSignIn,
        facebookSignIn,
        handleSignWithInEmailAndPassword,
        handleCreateAccountWithEmailAndPassword,
        handleSignOut,
        googleLoading,
        fbLoading,
        emailLoading,
        user,
        error
    }
}

export default useFirebase;