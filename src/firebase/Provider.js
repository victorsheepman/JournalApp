import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const startSignInWithPopup = async()=>{
    try {
        const resp = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email, photoURL, uid} = resp.user;
        return {
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorMessage = error.message;
        return{
            ok:false,
            errorMessage
        }
    }
}

export const registerWithGoogle = async(Email, password)=>{
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, Email, password)
        const {displayName, email, photoURL, uid} = resp.user;
        return {
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorMessage = error.message;
        return{
            ok:false,
            errorMessage
        }
        
    }

}

export const singInWithPassword = async(Email, password)=>{
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, Email, password);
        const { displayName, email, photoURL, uid } = resp.user;
        return {
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {
        const errorMessage = error.message;
        return{
            ok:false,
            errorMessage
        }
    }
}
export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
