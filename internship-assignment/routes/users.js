const express = require('express');
const router = express.Router();

// User routes
router.get('/items', (req, res) => {
  // List items
  res.send('List of Items');
});

router.get('/item/:id', (req, res) => {
  // Item details
  res.send('Item Details');
});

module.exports = router;
