import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Centers from './pages/Centers';
import LoginChoice from './pages/LoginChoice';
import UserLogin from './pages/UserLogin';
import BusinessLogin from './pages/BusinessLogin';
import UserDashboard from './pages/UserDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/centers" element={<Centers />} />
        <Route path="/login" element={<LoginChoice />} />
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/login/business" element={<BusinessLogin />} />
        <Route
          path="/dashboard/user"
          element={
            <ProtectedRoute type="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/business"
          element={
            <ProtectedRoute type="business">
              <BusinessDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;