const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public folder
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
