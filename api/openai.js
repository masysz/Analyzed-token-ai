const openai = require('openai');

const configuration = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openaiInstance = new openai.OpenAIApi(configuration);

async function generateResponse(prompt) {
  const completion = await openaiInstance.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  return completion.data.choices[0].message.content;  // Mengembalikan hasil dari OpenAI
}

module.exports = { generateResponse };
