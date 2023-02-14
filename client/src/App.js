import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Sginup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"
import AdminHome from "./pages/AdminHome"
// import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/signup" element={<Sginup/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<Home/>} /> 
      <Route exact path="/profile" element={<Profile/>} /> 
      <Route exact path="/admin" element={<Admin/>} /> 
      <Route exact path="/adminHome" element={<AdminHome/>} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
