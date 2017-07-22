const { exec } = require('child_process');

const express = require('express');
const app = express();

// This allows other computers or websites to access the API.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Each of these defines an endpoint a user can visit.
app.get('/', (req, res) => {
  res.json('Hello Scratch2017BDX!')
  console.log('Responded to: /');
});

app.get('/echo/:message', (req, res) => {
  res.json(req.params.message)
  console.log('Responded to: /echo');
});

app.get('/speak', (req, res) => {
  let message = req.query.message || "Bon jour Scratch 2017 Bordeaux!";
  let voice = req.query.voice || 'Alex';
  let rate = req.query.rate || '250';
  let speak = `say ${message} -v ${voice} -r ${rate} -i`;
  exec(speak, (stderr, stdout) => {
    res.json('ok');
    console.log('Responded to: /speak');
  });
});

// This starts the server running on your machine.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
