import { Navigate, Route } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { BlonewRouter } from "../blonew/routes/BlonewRouter";
import { BlonewCreatorRouter } from "../blonewCreator/routes/BlonewCreatorRouter";

export const TODO = ({status}) => {
    if(status === "authenticated"){
        <>
        <Route path="/" element={<BlonewCreatorRouter/>}/>
        <Route path="/*" element={<Navigate to='/'/>} />
        </> 
    } 
    else if(status === "not-authenticated"){
        <>
        <Route path="/auth/*" element={<AuthRouter/>}/>
        <Route path="/*" element={<Navigate to='/auth/main'/>} />
        </>
    }
    else {
        <>
        <Route path="/blonew/*" element={<BlonewRouter/>}/>
        <Route path="/*" element={<Navigate to='/blonew/'/>} />
        </>
    }
}