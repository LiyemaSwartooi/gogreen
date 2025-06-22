// Validation utility functions

export const validateEmail = (email) => {
  if (!email.trim()) {
    return 'Email is required';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address';
  }
  return null;
};

export const validatePassword = (password, isSignUp = false) => {
  if (!password) {
    return 'Password is required';
  }
  if (isSignUp) {
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return 'Password must contain uppercase, lowercase, and a number';
    }
  } else {
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
  }
  return null;
};

export const validateFullName = (fullName) => {
  if (!fullName.trim()) {
    return 'Full name is required';
  }
  if (fullName.trim().length < 2) {
    return 'Full name must be at least 2 characters';
  }
  if (!/^[a-zA-Z\s]+$/.test(fullName.trim())) {
    return 'Full name can only contain letters and spaces';
  }
  return null;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return 'Please confirm your password';
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return null;
};

// Validation strength indicators
export const getPasswordStrength = (password) => {
  let strength = 0;
  let feedback = [];
  
  if (password.length >= 8) {
    strength += 1;
  } else {
    feedback.push('At least 8 characters');
  }
  
  if (/[a-z]/.test(password)) {
    strength += 1;
  } else {
    feedback.push('Lowercase letter');
  }
  
  if (/[A-Z]/.test(password)) {
    strength += 1;
  } else {
    feedback.push('Uppercase letter');
  }
  
  if (/\d/.test(password)) {
    strength += 1;
  } else {
    feedback.push('Number');
  }
  
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    strength += 1;
    feedback = feedback.filter(f => f !== 'Special character');
  }
  
  const levels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['red', 'orange', 'yellow', 'blue', 'green'];
  
  return {
    score: strength,
    level: levels[Math.min(strength, 4)],
    color: colors[Math.min(strength, 4)],
    feedback: feedback.length > 0 ? `Missing: ${feedback.join(', ')}` : 'Strong password!'
  };
}; 