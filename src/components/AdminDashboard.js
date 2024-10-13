import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('/api/submissions');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Social Media Handle</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.handle}</td>
              <td>
                {user.images.map((image, i) => (
                  <a key={i} href={image} target="_blank" rel="noopener noreferrer">
                    <img
                      src={image}
                      alt={`User ${user.name} Upload`}
                      style={{ width: '50px', height: '50px', margin: '5px' }}
                    />
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
