import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet,Navigate} from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoutes = () => {
   const[user,loading,error]=useAuthState(auth)
  
   if(loading) return <p>User Data is Loading</p>

  return (
    <>
    {user ? <Outlet/> : <Navigate to="/login"/>}
    </>
  )
}

export default PrivateRoutes