import React from 'react';
import AdminLogin from"./AdminLogin.js";
import Login from "./Login";
import ContactUs from "./ContactUs"
import StudentLogin from "./StudentLogin";
import DashBoard from './DashBoard.js';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function routing() {
  
  return (
    <div className="routing">
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/adminlogin" element={<AdminLogin />}></Route>
          <Route path="/studentlogin" element={<StudentLogin />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
