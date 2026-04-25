const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;
const POKEAPI = 'https://pokeapi.co/api/v2';

app.use(cors());
app.use(express.json());

// GET list of 30 pokemon (just names + URLs)
app.get('/api/pokemon', async (req, res) => {
  try {
    const response = await fetch(`${POKEAPI}/pokemon?limit=30`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch Pokémon list' });
  }
});

// GET single pokemon by id or name
app.get('/api/pokemon/:id', async (req, res) => {
  try {
    const response = await fetch(`${POKEAPI}/pokemon/${req.params.id}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch Pokémon' });
  }
});

// GET species data (for flavor text/description)
app.get('/api/pokemon-species/:id', async (req, res) => {
  try {
    const response = await fetch(`${POKEAPI}/pokemon-species/${req.params.id}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch species' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});











