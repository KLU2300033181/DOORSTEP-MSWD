const express = require('express');
const app = express();
const PORT = 6060;

app.get('/', (req, res) => {
  res.send('Welcome to K L World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});