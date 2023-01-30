
import GlobalStyle from "../assets/style/GlobalStayle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Overlay from "./authComponents/Overlay";
import UserContext from "../context/Usercontext";
import SignIn from "../components/authComponents/SignIn";
import SignUp from "./authComponents/SignUp";

export default function App() {
    const [refresh, setRefresh] = useState(false)
    const [showLogout, setShowLogout] = useState(false);
 
    return (
       <>
          <GlobalStyle />
          <BrowserRouter>
             <Overlay showLogout={showLogout} setShowLogout={setShowLogout} />
             <UserContext.Provider value={{ refresh, setRefresh, showLogout, setShowLogout }}>
                <Routes>
                   <Route path="/" element={<SignIn />} />
                   <Route path="/sign-up" element={<SignUp />} />                    
                </Routes>
             </UserContext.Provider>
          </BrowserRouter>
       </>
    );
};