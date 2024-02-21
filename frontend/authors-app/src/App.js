import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [editedAuthor, setEditedAuthor] = useState({ id: null, name: '' });

  useEffect(() => {
    axios.get('http://localhost:3002/api/authors')
      .then(response => setAuthors(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleEditClick = (author) => {
    setEditedAuthor({ id: author.id, name: author.name });
  };

  const handleEditChange = (e) => {
    setEditedAuthor({ ...editedAuthor, name: e.target.value });
  };

  const handleSaveEdit = () => {
    // Send a PUT request to update the author on the server
    axios.put(`http://localhost:3002/api/authors/${editedAuthor.id}`, {
      name: editedAuthor.name
    })
    .then(response => {
      // Update the local state with the edited author
      setAuthors(authors.map(author => 
        (author.id === editedAuthor.id) ? response.data : author
      ));
      // Clear the editedAuthor state
      setEditedAuthor({ id: null, name: '' });
    })
    .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Authorss</h2>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            {editedAuthor.id === author.id ? (
              <>
                <input 
                  type="text" 
                  value={editedAuthor.name} 
                  onChange={handleEditChange} 
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {author.name}
                <button onClick={() => handleEditClick(author)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
