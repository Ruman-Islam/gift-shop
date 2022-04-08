import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { UseCartIcon } from "../App";

import auth from '../Firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useGoogleFacebook = () => {
    const [, , , setUser] = useContext(UseCartIcon);

    const handleGoogleSignIn = event => {
        event.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
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
            }).catch((error) => {
                console.log(error);
            });
    }

    return [handleGoogleSignIn, handleFacebookSignIn];
}

export default useGoogleFacebook;