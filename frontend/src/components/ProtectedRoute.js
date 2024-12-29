import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Se o token não estiver presente, redirecione para a página de login
    return <Navigate to="/" />;
  }

  // Se o token estiver presente, renderize o componente filho
  return children;
};

export default ProtectedRoute;