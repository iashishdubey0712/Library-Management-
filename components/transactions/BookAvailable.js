import React, { useState } from 'react';

function BookAvailable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setError('Please enter a search term');
      return;
    }
    // Simulated search results
    const results = [
      { id: 1, title: 'Book 1', author: 'Author 1', available: true },
      { id: 2, title:Author 2', available: false },
      { id: 3, title: 'Book 3', author: 'Author 3', available: true },
    ];
    setSearchResults(results);
    setError('');
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Book Available</h3>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block">Search:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border p-2"
            placeholder="Enter book title or author"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-bold mb-2">Search Results:</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Title</th>
                <th className="border p-2">Author</th>
                <th className="border p-2">Available</th>
                <th className="border p-2">Select</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((book) => (
                <tr key={book.id}>
                  <td className="border p-2">{book.title}</td>
                  <td className="border p-2">{book.author}</td>
                  <td className="border p-2">{book.available ? 'Yes' : 'No'}</td>
                  <td className="border p-2">
                    <input type="radio" name="selectedBook" disabled={!book.available} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BookAvailable;

