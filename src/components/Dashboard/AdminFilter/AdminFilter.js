import React, { useState } from 'react';
const AdminFilter = () => {
  const [User, setUser] = useState({});
  fetch('http://localhost:8080/admin')
    .then(res => res.json())
    .then(data => setUser(data))
  return (
    <div>

    </div>
  );
};

export default AdminFilter;