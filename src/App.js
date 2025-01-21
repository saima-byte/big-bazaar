import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shops from './pages/Shops';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LoginForm from './components/auth/LoginForm'
import './styles/global.css';
import SignupForm from './components/auth/SignupForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

