const express = require("express");
const app = express();

app.use(express.json());

// routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const quoteRoutes = require("./routes/quoteRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/external", quoteRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Personal Blog API is running");
});

module.exports = app;
