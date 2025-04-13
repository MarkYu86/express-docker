// app.js - Main Express application file
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Basic route for testing
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Express Docker App!",
  });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






