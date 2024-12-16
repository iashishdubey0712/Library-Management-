import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AddMembership from './maintenance/AddMembership';
import UpdateMembership from './maintenance/UpdateMembership';
import AddBook from './maintenance/AddBook';
import UpdateBook from './maintenance/UpdateBook';
import UserManagement from './maintenance/UserManagement';

function Maintenance() {
  const { user } = useAuth();

  if (user.role !== 'admin') {
    return <div>You do not have permission to access this page.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Maintenance</h2>
      <div className="space-y-8">
        <AddMembership />
        <UpdateMembership />
        <AddBook />
        <UpdateBook />
        <UserManagement />
      </div>
    </div>
  );
}

export default Maintenance;

