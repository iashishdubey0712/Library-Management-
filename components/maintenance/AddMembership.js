import React, { useState } from 'react';

function AddMembership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    duration: '6months'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('All fields are mandatory');
      return;
    }
    // Process form submission
    console.log('Form submitted:', formData);
    setError('');
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Add Membership</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2" required />
        </div>
        <div>
          <label className="block">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2" required />
        </div>
        <div>
          <label className="block">Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-2" required />
        </div>
        <div>
          <label className="block">Duration:</label>
          <select name="duration" value={formData.duration} onChange={handleChange} className="w-full border p-2">
            <option value="6months">6 months</option>
            <option value="1year">1 year</option>
            <option value="2years">2 years</option>
          </select>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Membership</button>
      </form>
    </div>
  );
}

export default AddMembership;


