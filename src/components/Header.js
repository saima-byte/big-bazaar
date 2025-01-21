import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const navigate=useNavigate()
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const login = (e) => {
    navigate('/login')
    // e.preventDefault(); // Prevent default behavior of Link (only for the "Join" button)
    // setIsAuthOpen(true);
  };

  const closeAuth = () => setIsAuthOpen(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            PickBazar
          </Link>
          
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shops" className="nav-link">Shops</Link>
            <Link to="/offers" className="nav-link">Offers</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          
          <div className="button-group">
            <button className="button-outline" onClick={login}>Join</button>
            <button className="button-primary">Become a Seller</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
