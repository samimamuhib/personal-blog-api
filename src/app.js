const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());

// Serve static HTML files
app.use(express.static(path.join(__dirname, "../public")));

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const quoteRoutes = require("./routes/quoteRoutes");

// API route middlewares
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/external", quoteRoutes);

// Root route → show HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})
module.exports = app;  