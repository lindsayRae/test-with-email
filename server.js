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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});