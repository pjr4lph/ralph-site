const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// app.use(express.static(__dirname + './../client/styles/style.css'));
app.use((req,res,next)=>{
  console.log(req.method, req.url);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname , './../build/index.html'));
});

app.get('/client/styles/style.css', function (req, res) {
  res.sendFile(path.join(__dirname , './../client/styles/style.css'));
});

app.get('/build/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname , './../build/bundle.js'));
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });
