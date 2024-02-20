const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.post('/api/books', (req, res) => {
  // Forward the request to the Books Service
  const axios = require('axios');
  axios.post('http://localhost:3001/api/books', req.body)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/api/authors', (req, res) => {
  // Forward the request to the Authors Service
  const axios = require('axios');
  axios.post('http://localhost:3002/api/authors', req.body)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(PORT, () => {
  console.log(`Gateway/API Service listening on port ${PORT}`);
});
