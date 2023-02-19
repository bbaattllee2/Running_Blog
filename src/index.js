import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, About, Runs } from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Runs" element={<Runs />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
