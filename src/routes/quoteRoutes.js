const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getQuote } = require("../controllers/quoteController");

// Private external API route
router.get("/quote", authMiddleware, getQuote);

module.exports = router;
