import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Library Management System</h1>
        {user && (
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/dashboard">Dashboard</Link></li>
              {user.role === 'admin' && <li><Link to="/maintenance">Maintenance</Link></li>}
              <li><Link to="/reports">Reports</Link></li>
              <li><Link to="/transactions">Transactions</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

