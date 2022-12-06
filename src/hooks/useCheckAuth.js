import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, loginGuest, logout } from "../store/auth/AuthSlice";
import { startLoadingNotes } from "../store/blonewC";

export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        
        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if ( !user ) return dispatch( logout() );{
                const { uid, email, displayName, photoURL } = user;
                dispatch( loginGuest({ uid, email, displayName, photoURL }) );
                dispatch( startLoadingNotes());
            }

        })
    }, []);

    return status;
}
