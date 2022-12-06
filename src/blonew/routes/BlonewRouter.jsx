import { Navigate, Route, Routes } from "react-router-dom";
import { BlonewGuest } from "../pages/BlonewGuest";

export const BlonewRouter = () => {
    return (

        <Routes>
            <Route path="notes" element={<BlonewGuest/>}/>
            <Route path="/*" element={ <Navigate to={"/blonew/notes"} />}/>
        </Routes>
    )
}
