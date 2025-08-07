
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('S P Granites backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
