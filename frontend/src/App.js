import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <UserList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/new"
              element={
                <ProtectedRoute>
                  <UserForm />
                </ProtectedRoute>
              }
            />
            {/* Outras rotas */}
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;