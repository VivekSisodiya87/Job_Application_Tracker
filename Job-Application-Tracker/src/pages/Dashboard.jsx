import React, { useEffect, useState } from 'react';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import axios from 'axios';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('http://localhost:5000/api/jobs', {
      headers: { Authorization: token },
    });
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <JobForm onJobCreated={fetchJobs} />
      <JobList jobs={jobs} onJobDeleted={fetchJobs} />
    </div>
  );
};

export default Dashboard;
