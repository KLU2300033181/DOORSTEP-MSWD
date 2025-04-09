const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5060;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET requests to the root URL
app.get('/list.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'list.png'));

  
});
app.get('/handout.pdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'handout.pdf'));
});

app.get('/playback.mp4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'playback.mp4'));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
