import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { startGoogleSingIn, startLoadingProfiles } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout"

export const MainPage = () => {

    const { status } = useSelector( state => state.auth)
    const dispatch = useDispatch();
    
    const isAuthenticating = useMemo(() => status === 'checking', [status]) 
    
    const onGoogleSignIn = () => {
        dispatch(startGoogleSingIn());
    }

    const email = 'invitado@invitado.com';
    const password = '123456';

    const onGuest = () => {
        dispatch(startLoadingProfiles({email, password}));
    }

  return (
    <>
        <AuthLayout title="Ingresar como lector">
            <div className="pt-2">
                <div className="d-grid gap-2">
                    <button onClick={onGuest} className="btn btn-success" disabled={isAuthenticating}>
                        <i className="bi bi-person-workspace"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                        </svg> Invitado</i>
                    </button>
                </div>
            </div>
            <h5 className="titulo">Ingresar como creador</h5>
            <div className="pt-2">
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={onGoogleSignIn} disabled={isAuthenticating}>
                        <i className="bi bi-google"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg> Google</i>
                    </button>
                </div>
            </div>
            <div className="pt-2">
                <div className="d-grid gap-2">
                    <NavLink className="d-grid" to="/auth/login">
                        <button className="btn btn-danger" disabled={isAuthenticating}>
                            <i className="bi bi-newspaper"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                            <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                            </svg> Blonew</i>
                        </button>
                    </NavLink>
                </div>
            </div>
        </AuthLayout>
    </>
  )
}
