import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Cinema from './cinema';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cinema" element={<Cinema/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;