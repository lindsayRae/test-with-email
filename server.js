const express = require('express');
const app = express();
const port = process.env.PORT || 1234;
const email = require('./routes/email');

app.use(express.static('client'));
app.use(express.json()); // our server can accept json in body of request

app.use('/api/email', email);

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

if (process.env.NODE_ENV === 'production') {
  // serve any static files
  app.use(express.static(path.join(__dirname, 'client')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
