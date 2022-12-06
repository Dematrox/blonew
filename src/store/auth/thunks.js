import { loginWhitEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../blonewC/blonewCSlice"
import { checkingCredentials, login, loginGuest, logout } from "./AuthSlice"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {

        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = (email, password) => {
    return async(dispatch) => {

        dispatch(checkingCredentials())

        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName }) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
        
        if(!ok) return dispatch(logout({errorMessage}))
        dispatch(login({uid, displayName, email, photoURL}))

    }
}

export const startLoginWhitEmailPassword = ({email, password}) => {
    return async(dispatch) => {

        dispatch(checkingCredentials())

        const resp = await loginWhitEmailPassword({email, password})
        const {ok, errorMessage} = resp

        if(!ok) return dispatch(logout({errorMessage}))
        dispatch(login(resp))
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        
        dispatch(clearNotesLogout())
        dispatch(logout({}));        
    }
}

export const startLoadingProfiles = ({email, password}) => {
    return async(dispatch) => {

        dispatch(checkingCredentials())

        const resp = await loginWhitEmailPassword({email, password})
        const {ok, errorMessage} = resp;

        if(!ok) return dispatch(logout({errorMessage}));
        dispatch(loginGuest(resp));
    }
}