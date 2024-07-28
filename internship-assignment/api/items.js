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
