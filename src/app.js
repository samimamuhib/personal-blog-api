const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const quoteRoutes = require("./routes/quoteRoutes");

// Route middlewares
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/external", quoteRoutes);

// Root test route
app.get("/", (req, res) => {
  res.status(200).send("Personal Blog API is running");
});

module.exports = app;
