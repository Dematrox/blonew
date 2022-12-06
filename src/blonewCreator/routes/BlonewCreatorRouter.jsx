import { Navigate, Route, Routes } from "react-router-dom";
import { BlonewPage } from "../pages/BlonewPage";

export const BlonewCreatorRouter = () => {
    return (
        <Routes>
            <Route path="creator" element={<BlonewPage/>}/>
            <Route path="/*" element={ <Navigate to={"/blonew/creator"} />}/>
        </Routes>
    )
}