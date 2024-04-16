import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />   
        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;