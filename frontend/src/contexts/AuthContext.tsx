import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  AuthError
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiem9ODUdc8iTd_7z_VbAqddXfipYGx_Q",
  authDomain: "ewastefacilitylocater.firebaseapp.com",
  projectId: "ewastefacilitylocater",
  storageBucket: "ewastefacilitylocater.firebasestorage.app",
  messagingSenderId: "696523820700",
  appId: "1:696523820700:web:7ff67295ad4999c7b6a759",
  measurementId: "G-DXCHSR9M5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Add custom scopes for Google provider
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');

// Define User interface
interface User {
  id: string;
  email: string | null;
  name: string | null;
  type: 'user' | 'business';
  photoURL: string | null;
  businessInfo?: {
    businessName?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
    acceptedItems?: string[];
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, type: 'user' | 'business') => Promise<void>;
  register: (data: any, type: 'user' | 'business') => Promise<void>;
  loginWithGoogle: (type: 'user' | 'business') => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (data: Partial<User>) => Promise<void>;
}

// Error handling utility
const handleAuthError = (error: AuthError): string => {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'Invalid email address format.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
      return 'No account found with this email.';
    case 'auth/wrong-password':
      return 'Incorrect password.';
    case 'auth/email-already-in-use':
      return 'An account already exists with this email.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/popup-closed-by-user':
      return 'Google sign-in was cancelled.';
    case 'auth/popup-blocked':
      return 'Sign-in popup was blocked by your browser.';
    case 'auth/cancelled-popup-request':
      return 'Another sign-in attempt is in progress.';
    case 'auth/operation-not-allowed':
      return 'Google sign-in is not enabled. Please contact support.';
    default:
      return error.message || 'An unexpected error occurred.';
  }
};

const AuthContext = createContext<AuthContextType | null>(null);

// Format user data
const formatUser = (firebaseUser: FirebaseUser, type: 'user' | 'business'): User => ({
  id: firebaseUser.uid,
  email: firebaseUser.email,
  name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Anonymous',
  type,
  photoURL: firebaseUser.photoURL,
  ...(type === 'business' && {
    businessInfo: JSON.parse(localStorage.getItem(`businessInfo_${firebaseUser.uid}`) || '{}')
  })
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userType = localStorage.getItem('userType') as 'user' | 'business' || 'user';
        const formattedUser = formatUser(firebaseUser, userType);
        
        if (userType === 'business') {
          const businessInfo = localStorage.getItem(`businessInfo_${firebaseUser.uid}`);
          if (businessInfo) {
            formattedUser.businessInfo = JSON.parse(businessInfo);
          }
        }
        
        setUser(formattedUser);
      } else {
        setUser(null);
        localStorage.removeItem('userType');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = useCallback(async (email: string, password: string, type: 'user' | 'business') => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('userType', type);
      setUser(formatUser(result.user, type));
      toast.success('Successfully logged in!');
      navigate(type === 'user' ? '/dashboard/user' : '/dashboard/business');
    } catch (error) {
      const errorMessage = handleAuthError(error as AuthError);
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const register = useCallback(async (data: any, type: 'user' | 'business') => {
    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(auth, data.email, data.password);
      
      if (type === 'business' && data.businessName) {
        const businessInfo = {
          businessName: data.businessName,
          address: data.address,
          latitude: parseFloat(data.latitude),
          longitude: parseFloat(data.longitude),
          acceptedItems: data.acceptedItems.split(',').map((item: string) => item.trim())
        };
        localStorage.setItem(`businessInfo_${result.user.uid}`, JSON.stringify(businessInfo));
      }

      localStorage.setItem('userType', type);
      setUser(formatUser(result.user, type));
      toast.success('Registration successful!');
      navigate(type === 'user' ? '/dashboard/user' : '/dashboard/business');
    } catch (error) {
      const errorMessage = handleAuthError(error as AuthError);
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const loginWithGoogle = useCallback(async (type: 'user' | 'business') => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
  
      localStorage.setItem('userType', type);
  
      // Set user and navigate based on type
      setUser(formatUser(result.user, type));
      toast?.success
        ? toast.success('Successfully logged in with Google!')
        : console.warn("toast.success is not a function. Successfully logged in with Google!");
  
      navigate(type === 'user' ? '/dashboard/user' : '/dashboard/business');
    } catch (error) {
      const errorMessage = handleAuthError(error as AuthError);
  
      // Handle errors and redirect based on type
      toast?.error
        ? toast.error(errorMessage)
        : console.error("toast.error is not a function:", errorMessage);
  
      // Always redirect to the business dashboard for business login/signup errors
      if (type === 'business') {
        navigate('/dashboard/business');
      } else {
        navigate('/dashboard/user');
      }
      throw error; // Re-throw the error for further handling if needed
    } finally {
      setLoading(false);
    }
  }, [navigate]);
  
  
  const updateUserProfile = useCallback(async (data: Partial<User>) => {
    if (!user) return;
    
    try {
      if (data.businessInfo && user.type === 'business') {
        localStorage.setItem(`businessInfo_${user.id}`, JSON.stringify(data.businessInfo));
        setUser(prev => prev ? { ...prev, ...data } : null);
        toast.success('Business profile updated successfully');
      }
    } catch (error) {
      toast.error('Failed to update profile');
      throw error;
    }
  }, [user]);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('userType');
      setUser(null);
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      const errorMessage = handleAuthError(error as AuthError);
      toast.error(errorMessage);
      throw error;
    }
  }, [navigate]);

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        login, 
        register, 
        loginWithGoogle, 
        logout,
        updateUserProfile 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};