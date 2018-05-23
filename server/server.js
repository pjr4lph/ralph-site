const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// app.use(express.static(__dirname + './../client/styles/style.css'));
app.use((req,res,next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../build/index.html'));
});

app.get('/client/styles/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/styles/style.css'));
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, './../build/bundle.js'));
});

app.get('/client/images/bio-96435452.png', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/images/bio.png'));
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });
