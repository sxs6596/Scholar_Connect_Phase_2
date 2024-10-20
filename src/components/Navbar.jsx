import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-neutral text-neutral-content shadow-md">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-slate-300">
          Scholar Connect
        </Link>
        
        <button
          className="block lg:hidden text-gray-300 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        <nav className="hidden lg:block">
          <ul className="flex space-x-4 text-gray-300">
            <li>
              <Link to="/" className="hover:text-cyan-400">Home</Link>
            </li>
            <li>
              <Link to="/userprofiles" className="hover:text-cyan-400">User Profiles</Link>
            </li>
            <li>
              <Link to="/proposaldashboard" className="hover:text-cyan-400">Proposal Dashboard</Link>
            </li>
            <li>
              <Link to="/collaborationtools" className="hover:text-cyan-400">Collaboration Tools</Link>
            </li>
            <li>
              <Link to="/grantsandfunding" className="hover:text-cyan-400">Grants and Funding</Link>
            </li>
            <li>
              <Link to="/eventsdashboard" className="hover:text-cyan-400">Events Dashboard</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-400">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
            </li>

            {!loggedInUser && (
              <>
                <li>
                  <Link to="/register" className="hover:text-cyan-400">Register</Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-cyan-400">Login</Link>
                </li>
              </>
            )}

            {loggedInUser && (
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-cyan-400 bg-transparent border-none cursor-pointer text-gray-300"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>

        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-16 left-0 w-full bg-neutral text-gray-300">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link to="/" className="hover:text-cyan-400" onClick={toggleMobileMenu}>Home</Link>
              </li>
              <li>
                <a href="https://digitalrepositorygroup7.wordpress.com/2024/10/13/introducing-the-digital-repository/" onClick={toggleMobileMenu} className="hover:text-cyan-400">WordPress Blog</a>
              </li>
              <li>
                <Link to="/userprofiles" className="hover:text-cyan-400" onClick={toggleMobileMenu}>User Profiles</Link>
              </li>
              <li>
                <Link to="/proposaldashboard" className="hover:text-cyan-400" onClick={toggleMobileMenu}>Proposal Dashboard</Link>
              </li>
              <li>
                <Link to="/collaborationtools" className="hover:text-cyan-400" onClick={toggleMobileMenu}>Collaboration Tools</Link>
              </li>
              <li>
                <Link to="/grantsandfunding" className="hover:text-cyan-400" onClick={toggleMobileMenu}>Grants and Funding</Link>
              </li>
              <li>
                <Link to="/eventsdashboard" className="hover:text-cyan-400" onClick={toggleMobileMenu}>Events</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400" onClick={toggleMobileMenu}>About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400" onClick={toggleMobileMenu}>Contact</Link>
              </li>

              {!loggedInUser && (
                <>
                  <li>
                    <Link to="/register" className="hover:text-cyan-400" onClick={toggleMobileMenu}>Register</Link>
                  </li>
                  <li>
                    <Link to="/login" className="hover:text-cyan-400" onClick={toggleMobileMenu}>Login</Link>
                  </li>
                </>
              )}

              {loggedInUser && (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMobileMenu();
                    }}
                    className="hover:text-cyan-400 bg-transparent border-none cursor-pointer text-gray-300"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;