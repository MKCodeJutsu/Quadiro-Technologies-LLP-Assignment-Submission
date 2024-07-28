const express = require('express');
const router = express.Router();

// Admin routes (CRUD operations)
router.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

router.post('/item', (req, res) => {
  // Create item
  res.send('Item Created');
});

router.get('/item/:id', (req, res) => {
  // Read item
  res.send('Item Details');
});

router.put('/item/:id', (req, res) => {
  // Update item
  res.send('Item Updated');
});

router.delete('/item/:id', (req, res) => {
  // Delete item
  res.send('Item Deleted');
});

module.exports = router;
