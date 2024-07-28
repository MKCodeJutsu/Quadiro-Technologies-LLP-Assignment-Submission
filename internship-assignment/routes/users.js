const express = require('express');
const router = express.Router();
const Item = mongoose.model('Item');

// User routes
router.get('/items', (req, res) => {
  Item.find().then(items => res.send(items)).catch(err => res.status(400).send(err));
});

router.get('/item/:id', (req, res) => {
  Item.findById(req.params.id).then(item => res.send(item)).catch(err => res.status(404).send(err));
});

module.exports = router;
