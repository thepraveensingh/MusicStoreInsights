const express = require('express');
const router = express.Router();
const { getInvoiceLines } = require('../services/invoiceLineService');

// Route to fetch all invoice lines
router.get('/', async (req, res) => {
    try {
        const invoiceLines = await getInvoiceLines();
        res.json(invoiceLines);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch invoice lines' });
    }
});

module.exports = router;
