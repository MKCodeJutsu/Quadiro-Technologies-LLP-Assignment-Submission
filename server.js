const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [
  { id: '1', name: 'Item 1', comments: [] },
  { id: '2', name: 'Item 2', comments: [] }
];

app.post('/items/:id/comments', (req, res) => {
  const id = req.params.id;
  const comment = req.body.comment;
  const item = items.find(item => item.id === id);
  if (item) {
    item.comments.push(comment);
    res.status(201).send(comment);
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});

// Admin login (mock, no actual authentication)
app.post('/admin/login', (req, res) => {
  res.send('Admin logged in');
});

// CRUD Operations
app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).send(item);
});

app.get('/items', (req, res) => {
  res.send(items);
});

app.put('/items/:id', (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  items = items.map(item => (item.id === id ? updatedItem : item));
  res.send(updatedItem);
});

app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  items = items.filter(item => item.id !== id);
  res.status(204).send();
});

// User view
app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  const item = items.find(item => item.id === id);
  if (item) {
    res.send(item);
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


