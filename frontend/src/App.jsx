import { Route, Routes, BrowserRouter } from "react-router";
import SignUp from "./components/signup"
import SignIn from "./components/signin";
import Dashboard from "./components/dashboard";
import SendMoney from "./components/sendMoney";
import LandingPage from "./components/landingPage";
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/send" element={<SendMoney/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
