import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserRegistered = () => {
    alert('User registered successfully!');
  };

  const handleLoginSuccess = (usersList) => {
    setUsers(usersList);
    setIsLoggedIn(true);
  };

  const handleBlockToggle = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].blocked = !updatedUsers[index].blocked;
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleUpdate = (index) => {
    const newUsername = prompt('Enter new username:', users[index].username);
    if (newUsername) {
      const updatedUsers = [...users];
      updatedUsers[index].username = newUsername;
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      {!isLoggedIn ? (
        <>
          <Register onUserRegistered={handleUserRegistered} />
          <Login onLoginSuccess={handleLoginSuccess} />
        </>
      ) : (
        <UserList
          users={users}
          onBlockToggle={handleBlockToggle}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default App;
