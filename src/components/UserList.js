import React from 'react';

const UserList = ({ users, onBlockToggle, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} {user.blocked ? '(Blocked)' : ''}
            <button onClick={() => onBlockToggle(index)}>
              {user.blocked ? 'Unblock' : 'Block'}
            </button>
            <button onClick={() => onUpdate(index)}>Update</button>
            <button onClick={() => onDelete(index)}>Remove</button>
            <button onClick={() => alert(`Previous logins: ${user.previousLogins.join(', ')}`)}>
              Previous Logins
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
