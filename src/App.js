import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Banners from './pages/banners';
import AddBanner from './pages/newBanner';
import ChatBox from './chatbot/chatBot';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />  
        <Route exact path="dashboard" element={<Dashboard/>} />  
        <Route exact path="banners" element={<Banners/>} /> 
        <Route exact path="newbanner" element={<AddBanner/>} />
        <Route exact path="chatAi" element={<ChatBox/>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;