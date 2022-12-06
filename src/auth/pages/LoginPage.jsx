import { useMemo } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { AuthLayout } from "../layout/AuthLayout"
import { startLoginWhitEmailPassword } from "../../store/auth/thunks"


export const LoginPage = () => {

    const dispatch = useDispatch()
    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);
    const { email, password, onInputChange } = useForm({ email: '',
    password: ''});

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(startLoginWhitEmailPassword({email, password}));
    }

  return (
    <>
        <AuthLayout title="Cuenta">
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="tucorreo@mail.com" name="email" value={email} onChange={onInputChange}/>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="contraseña" name="password" value={password} onChange={onInputChange}/>
            </div>
            {
                !!errorMessage &&
                    <div className="d-grid gap-2 mt-2">
                        <p className="alert alert-danger">{errorMessage}</p>
                    </div>
            }
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success" disabled={isCheckingAuthentication}>
                    Login
                </button>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <Link to="/auth/main">Volver</Link>
                <Link to="/auth/register">Crear una cuenta</Link>
            </div>
        </form>
        </AuthLayout>
    </>
  )
}
