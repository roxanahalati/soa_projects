const express = require('express');
const app = express();

const PORT = 3002;

app.use(express.json());

// Array to store dummy authors
let authors = [
  { id: 1, name: 'Jane Austen' },
  { id: 2, name: 'George Orwell' },
  { id: 3, name: 'J.K. Rowling' },
  { id: 4, name: 'Harper Lee' },
  { id: 5, name: 'F. Scott Fitzgerald' },
  { id: 6, name: 'Gabriel García Márquez' },
  { id: 7, name: 'Agatha Christie' },
  { id: 8, name: 'Kazuo Ishiguro' },
  { id: 9, name: 'Toni Morrison' },
  { id: 10, name: 'Herman Melville' },
  { id: 11, name: 'J.R.R. Tolkien' },
  { id: 12, name: 'Chimamanda Ngozi Adichie' },
  { id: 13, name: 'Ernest Hemingway' },
  { id: 14, name: 'Margaret Atwood' },
  { id: 15, name: 'Gabrielle Garcia' }
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
