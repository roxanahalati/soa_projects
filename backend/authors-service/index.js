const express = require('express');
const app = express();

const PORT = 3002;

app.use(express.json());

// Array to store dummy authors
let authors = [
  { id: 1, name: 'Author One' },
  { id: 2, name: 'Author Two' }
];

app.get('/api/authors', (req, res) => {
  res.json(authors);
});

app.post('/api/authors', (req, res) => {
  const { name } = req.body;
  const author = { id: authors.length + 1, name };
  authors.push(author);

  res.json(author);
});

app.listen(PORT, () => {
  console.log(`Authors Service listening on port ${PORT}`);
});
