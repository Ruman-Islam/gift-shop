import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { UseCartIcon } from "../App";

import auth from '../Firebase/firebase.init';
import useUserState from "./useUserState";
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useGoogleFacebook = () => {
    // const [, , , setUser] = useContext(UseCartIcon);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { setUser } = useUserState();
    const [stateChangeInGoogleFb, setStateChangeInGoogleFb] = useState(false);

    const handleGoogleSignIn = event => {
        event.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setStateChangeInGoogleFb(true);
                navigate(from, { replace: true });
            }).catch((error) => {
                console.log(error);
            });
    }

    const handleFacebookSignIn = event => {
        event.preventDefault();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setStateChangeInGoogleFb(true);
            }).catch((error) => {
                console.log(error);
            });
    }

    return { handleGoogleSignIn, handleFacebookSignIn, stateChangeInGoogleFb };
}

export default useGoogleFacebook;