const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.json());

// Array to store dummy books
let books = [
  { id: 1, title: 'Pride and Prejudice', authorId: 1 },
  { id: 2, title: 'Sense and Sensibility', authorId: 1 },
  { id: 3, title: 'Emma', authorId: 1 },
  { id: 4, title: '1984', authorId: 2 },
  { id: 5, title: 'Animal Farm', authorId: 2 },
  { id: 6, title: 'Harry Potter and the Philosopher\'s Stone', authorId: 3 },
  { id: 7, title: 'The Casual Vacancy', authorId: 3 },
  { id: 8, title: 'To Kill a Mockingbird', authorId: 4 },
  { id: 9, title: 'Go Set a Watchman', authorId: 4 },
  { id: 10, title: 'The Great Gatsby', authorId: 5 },
  { id: 11, title: 'Tender Is the Night', authorId: 5 },
  { id: 12, title: 'One Hundred Years of Solitude', authorId: 6 },
  { id: 13, title: 'Love in the Time of Cholera', authorId: 6 },
  { id: 14, title: 'Murder on the Orient Express', authorId: 7 },
  { id: 15, title: 'And Then There Were None', authorId: 7 },
  { id: 16, title: 'Never Let Me Go', authorId: 8 },
  { id: 17, title: 'The Remains of the Day', authorId: 8 },
  { id: 18, title: 'Beloved', authorId: 9 },
  { id: 19, title: 'Song of Solomon', authorId: 9 },
  { id: 20, title: 'Moby-Dick', authorId: 10 },
  { id: 21, title: 'Bartleby, the Scrivener', authorId: 10 },
  { id: 22, title: 'The Fellowship of the Ring', authorId: 11 },
  { id: 23, title: 'The Hobbit', authorId: 11 },
  { id: 24, title: 'Half of a Yellow Sun', authorId: 12 },
  { id: 25, title: 'Americanah', authorId: 12 },
  { id: 26, title: 'The Old Man and the Sea', authorId: 13 },
  { id: 27, title: 'A Farewell to Arms', authorId: 13 },
  { id: 28, title: 'The Handmaid\'s Tale', authorId: 14 },
  { id: 29, title: 'Alias Grace', authorId: 14 },
  { id: 30, title: 'Keturah and Lord Death', authorId: 15 },
  { id: 31, title: 'Shadows on the Moon', authorId: 15 }
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
