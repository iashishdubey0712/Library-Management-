import React, { useState } from 'react';

function BookIssue() {
  const [formData, setFormData] = useState({
    bookName: '',
    authorName: '',
    issueDate: '',
    returnDate: '',
    remarks: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.bookName || !formData.issueDate || !formData.returnDate) {
      setError('Book name, issue date, and return date are required');
      return;
    }
    // Process form submission
    console.log('Form submitted:', formData);
    setError('');
  };

  // Auto-populate return date when issue date changes
  const handleIssueDateChange = (e) => {
    const issueDate = new Date(e.target.value);
    const returnDate = new Date(issueDate);
    returnDate.setDate(returnDate.getDate() + 15);
    setFormData({
      ...formData,
      issueDate: e.target.value,
      returnDate: returnDate.toISOString().split('T')[0]
    });
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Book Issue</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Book Name:</label>
          <input type="text" name="bookName" value={formData.bookName} onChange={handleChange} className="w-full border p-2" required />
        </div>
        <div>
          <label className="block">Author Name:</label>
          <input type="text" name="authorName" value={formData.authorName} onChange={handleChange} className="w-full border p-2" readOnly />
        </div>
        <div>
          <label className="block">Issue Date:</label>
          <input type="date" name="issueDate" value={formData.issueDate} onChange={handleIssueDateChange} className="w-full border p-2" required min={new Date().toISOString().split('T')[0]} />
        </div>
        <div>
          <label className="block">Return Date:</label>
          <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} className="w-full border p-2" required min={formData.issueDate} max={new Date(new Date(formData.issueDate).getTime() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} />
        </div>
        <div>
          <label className="block">Remarks:</label>
          <textarea name="remarks" value={formData.remarks} onChange={handleChange} className="w-full border p-2"></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Issue Book</button>
      </form>
    </div>
  );
}

export default BookIssue;

