const express = require('express');
const router = express.Router();
const images = require(`../data/images`);

router.get('/images', (request, response) => {
  response.json(images);
})

module.exports = router;