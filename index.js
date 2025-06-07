const express = require('express');
require('dotenv').config(); // Load .env file

const app = express();

app.get('/', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true';

  if (isAdmin) {
    res.send({
      message: "Welcome, Admin!",
      data: ["Admin Data 1", "Admin Data 2"]
    });
  } else {
    res.send({
      message: "Welcome, User!",
      data: ["User Data 1", "User Data 2"]
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
