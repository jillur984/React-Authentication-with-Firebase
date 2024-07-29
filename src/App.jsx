import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./page/Home"
import Login from "./page/Login"
import Registration from "./page/Registration"
import Reset from "./page/Reset"
import PrivateRoutes from "./routes/PrivateRoutes"

const App = () => {
  return (
    <>
    
      <Router>
        <div>
        <Routes>
          <Route element={<PrivateRoutes/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>} exact/>
          </Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/reset" element={<Reset/>}></Route>
          
        </Routes>
        </div>
        
      </Router>
    
    </>
  )
}

export default App