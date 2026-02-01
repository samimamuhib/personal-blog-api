const axios = require("axios");

exports.getQuote = async (req, res) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");

    res.json({
      quote: response.data.content,
      author: response.data.author
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch quote" });
  }
};

