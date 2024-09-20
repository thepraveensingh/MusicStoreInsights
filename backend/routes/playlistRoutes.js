const express = require('express');
const router = express.Router();
const { getPlaylists } = require('../services/playlistService');

router.get('/', async (req, res) => {
    try {
        const playlists = await getPlaylists();
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch playlists' });
    }
});

module.exports = router;
