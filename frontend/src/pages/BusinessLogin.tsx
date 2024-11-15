import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';


const BusinessLogin = () => {
  const { login, register, loginWithGoogle } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    businessName: '',
    address: '',
    latitude: '',
    longitude: '',
    acceptedItems: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await login(formData.email, formData.password, 'business');
      } else {
        await register(formData, 'business');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle('business');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-black py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-[#121212] p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Building2 className="h-12 w-12 text-[#3c9c1c]" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white">
            {isLogin ? 'Business Login' : 'Register Business'}
          </h2>
          <p className="mt-2 text-gray-300">
            {isLogin ? 'Access your recycling center dashboard' : 'Register your recycling center'}
          </p>
        </div>

        <div className="space-y-6">
          <Button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white hover:bg-[#3c9c1c]/60 text-zinc-900 font-semibold border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </div>
          </Button>


          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-400 bg-[#121212]">Or continue with</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <Input
                  label="Business Name"
                  name="businessName"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Eco Recycling Solutions"
                  className="bg-[#121212] text-white placeholder-gray-500 border border-gray-700"
                />
                <Input
                  label="Business Address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Green Street"
                  className="bg-[#121212] text-white placeholder-gray-500 border border-gray-700"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Latitude"
                    name="latitude"
                    type="number"
                    step="any"
                    required
                    value={formData.latitude}
                    onChange={handleChange}
                    placeholder="40.7128"
                    className="bg-[#121212] text-white placeholder-gray-500 border border-gray-700"
                  />
                  <Input
                    label="Longitude"
                    name="longitude"
                    type="number"
                    step="any"
                    required
                    value={formData.longitude}
                    onChange={handleChange}
                    placeholder="-74.0060"
                    className="bg-[#121212] text-white placeholder-gray-500 border border-gray-700"
                  />
                </div>
                <Input
                  label="Accepted Items"
                  name="acceptedItems"
                  type="text"
                  required
                  value={formData.acceptedItems}
                  onChange={handleChange}
                  placeholder="Electronics, Batteries, etc."
                  className="bg-[#121212] text-white placeholder-gray-500 border border-gray-700"
                />
              </>
            )}

            <Input
              label="Email Address"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="business@example.com"
              className="bg-[#121212] text-white placeholder-gray-500 border border-gray-700"
            />

            <Input
              label="Password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-[#121212] text-white placeholder-gray-500 border border-gray-700"
            />

            <Button className="w-full bg-[#3c9c1c] hover:bg-[#3c9c1c] text-white" disabled={loading}>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : null}
              {isLogin ? 'Sign In' : 'Register Business'}
            </Button>
          </form>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#3c9c1c] hover:text-[#3c9c1c] text-sm font-medium"
          >
            {isLogin ? "Don't have an account? Register" : 'Already registered? Sign in'}
          </button>
        </div>

        <Link
          to="/login"
          className="flex items-center justify-center text-sm text-gray-400 hover:text-gray-300"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to account type selection
        </Link>
      </div>
    </div>
  );
};

export default BusinessLogin;