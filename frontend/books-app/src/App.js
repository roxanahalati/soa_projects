import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newBookTitle, setNewBookTitle] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Books</h2>
      
      <input type="text" placeholder="Search by title" value={searchTerm} onChange={handleSearch} />

      <ul>
        {books
          .filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(book => (
            <li key={book.id}>
              <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                {book.title}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
