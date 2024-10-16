import React from 'react';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
      <h1>Social Media Submission System</h1>
      <UserForm />
      <AdminDashboard />
    </div>
  );
}

export default App;
