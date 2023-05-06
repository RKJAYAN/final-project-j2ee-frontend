import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./Components/AuthComp/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "./Components/LoginComp";
import Dashboard from "./Components/DashComp/Dashboard";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Page not found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
