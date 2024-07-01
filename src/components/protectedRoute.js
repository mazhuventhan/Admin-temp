// import React from 'react';
// import { Navigate } from 'react-router-dom';
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/login" />;
// };
// export default ProtectedRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token && token !== '' ? children : <Navigate to="/" />;
};
export default ProtectedRoute;