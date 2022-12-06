import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
    displayName: "Nombre",
    email: "@email",
    password: "Contraseña",
}

const formValidations = {
    email:[(value) => value.includes('@') , 'El correo debve de tener una @'],
    password:[(value) => value.length >= 6 , 'La contraseña debe de tener mas de 6 caracteres'],
    displayName:[(value) => value.length >= 2 , 'El nombre no es valido']
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setformSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);
    
    const {formState ,displayName, email, password, onInputChange, isFormValid} = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setformSubmitted(true)
        
        if(!isFormValid) return

        dispatch(startCreatingUserWithEmailPassword(formState))
    }

  return (
    <>
        <AuthLayout title="Registrarte">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" name="displayName" value={displayName} onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="@email" name="email" value={email} onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Contraseña" name="password" value={password} onChange={onInputChange}/>
                </div>
                {!isFormValid && 
                    <p className="alert alert-danger">Alguno de los campos no es valido</p>
                }
                {
                !!errorMessage &&
                    <div className="d-grid gap-2 mt-2">
                        <p className="alert alert-danger">{errorMessage}</p>
                    </div>
                }
                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-success" type="submit" disabled={isCheckingAuthentication}>
                        Login
                    </button>
                </div>
            </form>
        <div className="d-flex justify-content-between mt-4">
            <Link to="/auth/main">Volver</Link>
            <p>¿Ya tienes cuenta? <Link to="/auth/login">ingresar</Link></p>
        </div>
        </AuthLayout>
    </>
  )
}
