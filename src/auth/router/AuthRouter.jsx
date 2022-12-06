import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, MainPage, RegisterPage } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="main" element={<MainPage/>}/>

        <Route path="/*" element={ <Navigate to={"/auth/main"} />}/>
    </Routes>
  )
}
