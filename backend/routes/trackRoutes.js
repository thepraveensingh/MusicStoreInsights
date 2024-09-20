const express = require('express');
const router = express.Router();
const { getTracks } = require('../services/trackService');

router.get('/', async (req, res) => {
    try {
        const tracks = await getTracks();
        res.json(tracks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tracks' });
    }
});

module.exports = router;
