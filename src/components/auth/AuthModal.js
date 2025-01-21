import React from 'react';
import { X } from 'lucide-react';
function AuthModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="auth-modal" onClick={onClose}>
      <div className="auth-container" onClick={e => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default AuthModal;

