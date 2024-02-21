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

// Update an existing author by ID
app.put('/api/authors/:id', (req, res) => {
  const authorId = parseInt(req.params.id);
  const { name } = req.body;

  const authorToUpdate = authors.find(author => author.id === authorId);

  if (!authorToUpdate) {
    return res.status(404).json({ error: 'Author not found' });
  }

  authorToUpdate.name = name;

  res.json(authorToUpdate);
});

app.listen(PORT, () => {
  console.log(`Authors Service listening on port ${PORT}`);
});
