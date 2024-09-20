const express = require('express');
const router = express.Router();
const { getInvoices } = require('../services/invoiceService');

router.get('/', async (req, res) => {
    try {
        const invoices = await getInvoices();
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch invoices' });
    }
});

module.exports = router;
