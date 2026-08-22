require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// JSON body parsing
app.use(express.json());

// Custom middleware: log every request
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`${time} - ${req.method} ${req.originalUrl}`);
  next();
});

// Serve the static HTML page
app.use(express.static(path.join(__dirname, "public")));

// GET /
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// GET / - API message is also available at /api
app.get("/api", (req, res) => {
  res.json({ message: "My Week 2 API!" });
});

// POST /user
app.post("/user", (req, res) => {
  const { name, email } = req.body;

  // 400 error for missing data
  if (!name || !email) {
    return res.status(400).json({
      error: "Bad Request",
      message: "name and email are required."
    });
  }

  res.json({
    message: `Hello, ${name}!`,
    email: email
  });
});

// GET /user/:id
app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: `User ${id} profile.`
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: "The requested route does not exist."
  });
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: "Internal Server Error",
    message: "Something went wrong on the server."
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
