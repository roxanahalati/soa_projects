const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.json());

// Array to store dummy books
let books = [
  { id: 1, title: 'Dummy Book 1', authorId: 1 },
  { id: 2, title: 'Dummy Book 2', authorId: 2 }
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.post('/api/books', (req, res) => {
  const { title, authorId } = req.body;

  // Add the new book to the array
  const newBook = { id: books.length + 1, title, authorId };
  books.push(newBook);

  res.json({ message: 'Book added successfully!', book: newBook });
});

// Update an existing book by ID
app.put('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, authorId } = req.body;

  const bookToUpdate = books.find(book => book.id === bookId);

  if (!bookToUpdate) {
    return res.status(404).json({ error: 'Book not found' });
  }

  bookToUpdate.title = title;
  bookToUpdate.authorId = authorId;

  res.json(bookToUpdate);
});

app.listen(PORT, () => {
  console.log(`Books Service listening on port ${PORT}`);
});
