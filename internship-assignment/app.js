const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/admin', require('./routes/admin'));
app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// MongoDB Connection
mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
