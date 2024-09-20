const express = require('express');
const router = express.Router();
const { getCustomers } = require('../services/customerService');

router.get('/', async (req, res) => {
    try {
        const customers = await getCustomers();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch customers' });
    }
});

module.exports = router;
