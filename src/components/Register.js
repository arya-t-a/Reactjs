import React, { useState } from 'react';

const Register = ({ onUserRegistered }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    const newUser = { username, password, blocked: false, previousLogins: [] };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    onUserRegistered();
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h3>Register</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
