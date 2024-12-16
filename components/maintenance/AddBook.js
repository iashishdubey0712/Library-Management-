import React, { useState } from 'react';

function AddBook() {
  const [formData, setFormData] = useState({
    type: 'book',
    title: '',
    author: '',
    isbn: '',
    publicationYear: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.isbn || !formData.publicationYear) {
      setError('All fields are mandatory');
      return;
    }
    // Process form submission
    console.log('Form submitted:', formData);
    setError('');
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Add Book</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Type:</label>
          <select name="type" value={formData.type} onChange={handleChange} className="w-full border p-2">
            <option value="book">Book</option>
            <option value="movie">Movie</option>
          </select>
        </div>
        <div>
          <label className="block">Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border p-2" required />
        </div>
        <div>
          <label className="block">Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} className="w-full border p-2" required />
        </div>
        <div>
          <label className="block">ISBN:</label>
          <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} className="w-full border p-2" required />
        </div>
        <div>
          <label className="block">Publication Year:</label>
          <input type="number" name="publicationYear" value={formData.publicationYear} onChange={handleChange} className="w-full border p-2" required />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;


