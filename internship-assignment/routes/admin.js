const express = require('express');
const router = express.Router();

// Example schema for items
const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
  description: String,
}));

// Admin routes (CRUD operations)
router.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

router.post('/item', (req, res) => {
  const item = new Item(req.body);
  item.save().then(() => res.send('Item Created')).catch(err => res.status(400).send(err));
});

router.get('/item/:id', (req, res) => {
  Item.findById(req.params.id).then(item => res.send(item)).catch(err => res.status(404).send(err));
});

router.put('/item/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(item => res.send('Item Updated')).catch(err => res.status(400).send(err));
});

router.delete('/item/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id).then(() => res.send('Item Deleted')).catch(err => res.status(400).send(err));
});

module.exports = router;
