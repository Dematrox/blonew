import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { BlonewRouter } from "../blonew/routes/BlonewRouter";
import { BlonewCreatorRouter } from "../blonewCreator/routes/BlonewCreatorRouter";
import { useCheckAuth } from "../hooks";
import { CheckingAuth } from "../ui/CheckingAuth";

export const AppRouter = () => {
  
const status  = useCheckAuth();
  if(status === 'checking') {
    return <CheckingAuth/>
  }

  return (
    <Routes>
      {
        (status === "guest") 
        ? 
        <>
        <Route path="/blonew/*" element={<BlonewRouter/>}/>
        <Route path="/*" element={<Navigate to='/blonew'/>} />
        </> 
        :
        (status === "authenticated") 
        ? 
        <>
          <Route path="/blonew/*" element={<BlonewCreatorRouter/>}/>
          <Route path="/*" element={<Navigate to='/blonew'/>} />
        </> 
        : 
        <>
          <Route path="/auth/*" element={<AuthRouter/>}/>
          <Route path="/*" element={<Navigate to='/auth/main'/>} />
        </>
      }
    </Routes>
  )
}
