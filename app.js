const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from jenkins . deployed via CICD pipeline!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
