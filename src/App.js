import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import UserTable from './components/UserTable';
import SignUpModal from './components/SignUpModal';
import ExportButton from './components/ExportButton';
import { Button } from 'react-bootstrap';

const App = () => {
  const [users, setUsers] = useState([]);
  const [showSignUp, setShowSignUp] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    alert(`User Created with name ${newUser.firstName} ${newUser.lastName} `)
  };

  const deleteUser = (id) => {
    const deletedUser = users.filter(user => user.id === id)
    setUsers(users.filter(user => user.id !== id));
    setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    alert(`User deleted with name  ${deletedUser[0].firstName} ${deletedUser[0].lastName} `)
  };

  const handleExportCSV = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading
  };

  return (
    <div className="container mt-4">
      <h2>User Management</h2>
      <UserTable
        users={users}
        onDelete={deleteUser}
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
      />
      <Button onClick={handleShowSignUp}>Sign Up</Button>
      <ExportButton
        selectedUsers={selectedUsers}
        users={users}
        onExport={handleExportCSV}
        loading={loading}
      />
      <SignUpModal
        show={showSignUp}
        handleClose={handleCloseSignUp}
        addUser={addUser}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
