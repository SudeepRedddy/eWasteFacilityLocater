import React from 'react';
import { Link } from 'react-router-dom';
import { User, Building2 } from 'lucide-react';

const LoginChoice = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full mx-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Account Type</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            to="/login/user"
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition group"
          >
            <div className="flex flex-col items-center text-center">
              <User className="h-16 w-16 text-green-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold mb-4">Individual User</h3>
              <p className="text-gray-600">
                Recycle your e-waste, earn rewards, and schedule doorstep pickups
              </p>
            </div>
          </Link>

          <Link
            to="/login/business"
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition group"
          >
            <div className="flex flex-col items-center text-center">
              <Building2 className="h-16 w-16 text-green-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold mb-4">Recycling Business</h3>
              <p className="text-gray-600">
                Manage your recycling center, process requests, and track operations
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;