// books-app/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/authors') // Updated port to 3001
      .then(response => {console.log(response.data); setBooks(response.data)})
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
