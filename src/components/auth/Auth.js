import React, { useState } from 'react';
import AuthModal from './AuthModal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Auth({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToSignup = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  // Internal CSS
  const styles = `
    .auth-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .auth-container {
      background: white;
      border-radius: 0.5rem;
      width: 100%;
      max-width: 400px;
      padding: 2rem;
      position: relative;
    }
    .auth-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--text-base);
    }
    .auth-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    .auth-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-heading);
      margin-bottom: 0.5rem;
    }
    .auth-subtitle {
      color: var(--text-base);
      font-size: 0.875rem;
    }
    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .form-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-heading);
    }
    .form-input {
      padding: 0.75rem;
      border: 1px solid var(--border);
      border-radius: 0.375rem;
      font-size: 0.875rem;
      transition: border-color 0.2s;
    }
    .form-input:focus {
      outline: none;
      border-color: var(--primary);
    }
    .form-button {
      background: var(--primary);
      color: white;
      padding: 0.75rem;
      border-radius: 0.375rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .form-button:hover {
      background: var(--primary-hover);
    }
    .social-login {
      margin: 1.5rem 0;
      text-align: center;
    }
    .social-divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0;
    }
    .social-divider::before,
    .social-divider::after {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--border);
    }
    .social-button {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border);
      border-radius: 0.375rem;
      background: white;
      color: var(--text-base);
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: border-color 0.2s;
    }
    .social-button:hover {
      border-color: var(--primary);
    }
    .auth-footer {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.875rem;
      color: var(--text-base);
    }
    .auth-link {
      color: var(--primary);
      font-weight: 500;
      cursor: pointer;
    }
    .auth-link:hover {
      text-decoration: underline;
    }
  `;

  return (
    <>
      {/* Insert the style element */}
      <style>{styles}</style>
      <AuthModal isOpen={isOpen} onClose={onClose}>
        {isLogin ? (
          <LoginForm onSwitchToSignup={handleSwitchToSignup} />
        ) : (
          <SignupForm onSwitchToLogin={handleSwitchToLogin} />
        )}
      </AuthModal>
    </>
  );
}

export default Auth;
