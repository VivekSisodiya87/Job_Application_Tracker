import React from 'react';
import { deleteJob } from '../services/api';

const JobList = ({ jobs, onJobDeleted }) => {
  const handleDelete = async (id) => {
    await deleteJob(id);
    onJobDeleted();
  };

  return (
    <div>
      <h2>Job Applications</h2>
      {jobs.length === 0 ? (
        <p>No job applications yet.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <strong>{job.company}</strong> - {job.position} ({job.status})
              <br />
              <small>{job.notes}</small>
              <br />
              <button onClick={() => handleDelete(job._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
