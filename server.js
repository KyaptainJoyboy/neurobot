const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const OLLAMA_PORT = 5000; // Ollama service port

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve the home.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\Carlito Quinan\\Documents\\Chester\'s Documents\\pauli-aid\\pauli-aid\\home.html');
});

app.post('/ask-query', async (req, res) => {
    const { query } = req.body;

    try {
        const response = await axios.post(`http://localhost:${OLLAMA_PORT}/chat`, {
            model: 'your_model_name', // Replace with your model name
            messages: [{ role: 'user', content: query }],
        });

        res.json({ reply: response.data.reply }); // Adjust based on the response structure
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error interacting with the model' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});