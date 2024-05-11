import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import UserService from './userService.jsx';
import RegistrationForm from './RegistrationForm.jsx';
import Searchbyname from './searchbyname.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route exact path='/home' element={<Home myFunc={UserService.getUser}/>}/>
      <Route exact path="/register" element={<RegistrationForm/>}/>
      <Route exact path="/searchbyname" element={<Searchbyname/>}/>
    </Routes>
    
  </BrowserRouter>
)
