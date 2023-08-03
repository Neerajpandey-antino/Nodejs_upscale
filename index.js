// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 4000;

app.get('/products', async (req, res) => {
  try {
    // Fetch product data from the JSONPlaceholder API
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Extract the product data from the response
    const products = response.data;

    // Send the product data as the API response
    res.json(products);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch product data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
