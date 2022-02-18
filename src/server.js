const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/:top', async (req, res) => {
  const { top } = req.params;
  const result = await axios(`https://rss.applemarketingtools.com/api/v2/us/music/most-played/${top}/albums.json`);
  res.send(result.data);
})

app.listen(4000, () => console.log('Server online'));
