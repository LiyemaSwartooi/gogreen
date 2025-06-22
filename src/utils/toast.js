import { toast } from 'sonner';

// Success toast messages
export const showSuccessToast = {
  signUp: (name = 'User') => {
    toast.success(`Welcome to Go-Green, ${name}!`, {
      description: 'Your account has been created successfully. Starting your farming journey!',
      duration: 4000,
      style: {
        background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      },
    });
  },
  
  signIn: (name = 'User') => {
    toast.success(`Welcome back${name !== 'User' ? `, ${name}` : ''}!`, {
      description: 'You have successfully signed in. Redirecting to your dashboard...',
      duration: 3000,
    });
  },
  
  demoAccess: () => {
    toast.success('Demo Access Granted!', {
      description: 'Welcome to the Go-Green demo experience!',
      duration: 3000,
    });
  },

  signOut: () => {
    toast.success('Successfully Signed Out!', {
      description: 'You have been safely logged out. See you next time!',
      duration: 3000,
    });
  }
};

// Error toast messages
export const showErrorToast = {
  validation: (firstError) => {
    toast.error('Please fix the form errors', {
      description: firstError,
      duration: 3000,
    });
  },
  
  signUpFailed: (error) => {
    toast.error('Registration Failed', {
      description: error || 'Something went wrong. Please try again.',
      duration: 4000,
    });
  },
  
  signInFailed: (error) => {
    toast.error('Sign In Failed', {
      description: error || 'Invalid email or password. Please try again.',
      duration: 4000,
    });
  },
  
  general: (error) => {
    toast.error('Error', {
      description: error || 'An unexpected error occurred. Please try again.',
      duration: 4000,
    });
  },
  
  demoFailed: () => {
    toast.error('Demo Login Failed', {
      description: 'Demo login failed. Please try manual sign in.',
      duration: 4000,
    });
  }
};

// Info toast messages
export const showInfoToast = {
  demoLoading: () => {
    toast.info('Demo Access', {
      description: 'Signing in with demo credentials...',
      duration: 2000,
    });
  },
  
  emailSent: () => {
    toast.info('Email Sent', {
      description: 'Check your email for further instructions.',
      duration: 4000,
    });
  }
};

// Warning toast messages
export const showWarningToast = {
  incomplete: () => {
    toast.warning('Incomplete Form', {
      description: 'Please fill in all required fields.',
      duration: 3000,
    });
  },
  
  passwordMismatch: () => {
    toast.warning('Password Mismatch', {
      description: 'Passwords do not match. Please check and try again.',
      duration: 3000,
    });
  }
}; 