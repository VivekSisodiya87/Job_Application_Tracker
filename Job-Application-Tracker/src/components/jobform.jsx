import React, { useState } from 'react';
import { createJob } from '../services/api';

const JobForm = ({ onJobCreated }) => {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    status: 'Applied',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(formData);
    onJobCreated();
    setFormData({ company: '', position: '', status: 'Applied', notes: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" required />
      <input name="position" value={formData.position} onChange={handleChange} placeholder="Position" required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes" />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
