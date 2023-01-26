import { logoutFirebase, registerWithGoogle, singInWithPassword, startSignInWithPopup } from "../../firebase/Provider";
import { isCheking, login, logout } from "./authSlice"

export const startSignInWithGoogle = () => {
    return async(dispatch)=>{
        dispatch(isCheking());
        const result = await startSignInWithPopup();
        if(!result.ok) return dispatch(logout(result))
        dispatch(login(result))
    }
}

export const startRegister = (email, password, displayName)=>{
    return async(dispatch)=>{
        dispatch(isCheking());
        const result = await registerWithGoogle(email, password);
        if(!result.ok) return dispatch(logout(result))
        dispatch(login({...result, displayName}))
    }
}

export const startSignInWithPassword = (email, password)=>{
    return async(dispatch)=>{
        dispatch(isCheking());
        const result = await singInWithPassword(email, password);
        if(!result.ok){
            alert(result.errorMessage)
            return dispatch(logout(result))
        }
        dispatch(login(result))
    }
}
export const startLogOut = ()=>{
    return async(dispatch)=>{
        await logoutFirebase()
        dispatch(logout())
    }
}
