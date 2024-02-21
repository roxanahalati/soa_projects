import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showBooks, setShowBooks] = useState(false);
  const [showAuthors, setShowAuthors] = useState(false);

  const toggleBooks = () => {
    setShowBooks(!showBooks);
    setShowAuthors(false);
  };

  const toggleAuthors = () => {
    setShowAuthors(!showAuthors);
    setShowBooks(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Micro Frontends Demo</h1>
        <button onClick={toggleBooks}>Show Books</button>
        <button onClick={toggleAuthors}>Show Authors</button>

        {showBooks && (
            <iframe style={{backgroundColor:'white'}} title="Books App" src="http://localhost:5002" width="100%" height="600px" />
        )}
        {showAuthors && (
            <iframe style={{backgroundColor:'white'}} title="Authors App" src="http://localhost:5003" width="100%" height="600px" />
        )}
      </header>
    </div>
  );
};

export default App;
