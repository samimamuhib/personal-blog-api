const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "../public")));

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const quoteRoutes = require("./routes/quoteRoutes");

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/external", quoteRoutes);

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ❌ 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ✅ Global Error Handler (MUST BE LAST)
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

module.exports = app;
