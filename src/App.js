import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import { Login } from './components/login/login'; // Assuming this is the correct path
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path="/" element={<Login />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
