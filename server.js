const express = require("express");

// Constants
const PORT = process.env.PORT || 80;
const HOST = "0.0.0.0";

// App
const app = express();

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Main Endpoint
app.get("/", (req, res) => {
  res.send("Hello My World, Welcome to reality!");
});

// Start the Server
let server = app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

module.exports = server;
