import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Scholar Connect. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          {/* Replaced <a> with <Link> for client-side routing */}
          <Link to="/about" className="hover:text-cyan-400">About Us</Link>
          <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
          <Link to="/privacy" className="hover:text-cyan-400">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
