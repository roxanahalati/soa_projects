import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3002/api/authors')
      .then(response => setAuthors(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Authors</h2>
      
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />

      <ul>
        {authors
          .filter(author => author.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(author => (
            <li key={author.id}>
              {author.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
