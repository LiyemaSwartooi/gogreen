import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaSpinner } from 'react-icons/fa6';
import { useState } from 'react';
import { toast } from 'sonner';

const LogoutButton = ({ className = "", showText = true }) => {
  const { signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const result = await signOut();
      if (result.success) {
        // Show success toast
        toast.success('Successfully Signed Out!', {
          description: 'You have been safely logged out. See you next time!',
          duration: 3000,
        });
        
        // Small delay for user to see the toast before redirect
        setTimeout(() => {
          navigate('/signin');
        }, 1000);
      } else {
        // Show error toast if logout fails
        toast.error('Sign Out Failed', {
          description: 'Something went wrong. Please try again.',
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Sign Out Failed', {
        description: 'An unexpected error occurred. Please try again.',
        duration: 3000,
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoggingOut || loading}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${className}`}
    >
      {isLoggingOut || loading ? (
        <FaSpinner className="w-4 h-4 animate-spin" />
      ) : (
        <FaSignOutAlt className="w-4 h-4" />
      )}
      {showText && (
        <span>{isLoggingOut ? 'Signing out...' : 'Sign out'}</span>
      )}
    </button>
  );
};

export default LogoutButton; 