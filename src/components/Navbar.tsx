import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, MapPin, LogIn, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-8 w-8" />
            <span className="font-bold text-xl">EcoRecycle</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center hover:text-green-200 transition">
              Home
            </Link>
            <Link to="/centers" className="flex items-center space-x-1 hover:text-green-200 transition">
              <MapPin className="h-4 w-4" />
              <span>Recycling Centers</span>
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to={`/dashboard/${user.type}`}
                  className="flex items-center space-x-2 hover:text-green-200 transition"
                >
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="flex items-center space-x-1 hover:text-green-200 transition"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;