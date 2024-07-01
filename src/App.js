import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Banners from './pages/banners';
import AddBanner from './pages/newBanner';
import ProtectedRoute from './components/protectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />  
     
       
       {/* Protected Route Pages */}
        <Route path="/dashboard" element={<ProtectedRoute ><Dashboard /></ProtectedRoute>} />
        <Route path="/banners" element={<ProtectedRoute ><Banners /></ProtectedRoute>} />
        <Route path="/addBanner" element={<ProtectedRoute ><AddBanner /></ProtectedRoute>} />
       {/* NotFound page */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;