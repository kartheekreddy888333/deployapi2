const express = require('express');
require('dotenv').config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true'; // Convert string to boolean

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
