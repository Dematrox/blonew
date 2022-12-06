import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { startLogout } from "../../store/auth/thunks";
import { setNotActiveNews } from "../../store/blonewC";

export const NavBarCreator = () => {
  
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(startLogout())
    }

    const onClickBlonew = () => {
        dispatch(setNotActiveNews())
    }

    const { displayName } = useSelector( state => state.auth)
  
    return (
    <nav className="navbar navbar-light color-navbar">
        <div className="container-fluid">
            <a className="navbar-brand pointer" onClick={onClickBlonew}>
                <i className="bi bi-newspaper">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                </svg> 
                Blonew
                </i>
            </a>
            <form className="d-flex navbar">
                <div className="h5 mt-2">
                    {displayName}
                </div>
                <NavLink to="/auth/main">
                  <button className="btn btn-danger ms-3" onClick={onLogout}>logout</button>
                </NavLink>
            </form>
        </div>
    </nav>
  )
}
