const express = require('express');
const bodyParser = require('body-parser');
const alchemy = require('./alchemy');   // Import Alchemy
const openai = require('./openai');     // Import OpenAI

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// API routes
app.post('/api/analyze-contract', async (req, res) => {
  const { contractAddress, analysisPrompt } = req.body;

  try {
    // Call Alchemy for contract data
    const contractData = await alchemy.fetchContractData(contractAddress);

    // Use OpenAI to generate analysis
    const analysis = await openai.generateResponse(analysisPrompt);

    res.json({ contractData, analysis });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
