const { parseCSV } = require('../utils/csvParser');
const path = require('path');

const getInvoiceLines = async () => {
    const data = await parseCSV(path.join(__dirname, '../data/invoice_line.csv'));
    return data;
};

module.exports = { getInvoiceLines };
