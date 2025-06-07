import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType, User } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem('bookstore_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would be an API call
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      joinDate: new Date().toISOString()
    };
    
    setUser(mockUser);
    localStorage.setItem('bookstore_user', JSON.stringify(mockUser));
    setIsLoading(false);
    
    return true;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock registration - in real app, this would be an API call
    const mockUser: User = {
      id: '1',
      name,
      email,
      joinDate: new Date().toISOString()
    };
    
    setUser(mockUser);
    localStorage.setItem('bookstore_user', JSON.stringify(mockUser));
    setIsLoading(false);
    
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bookstore_user');
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};