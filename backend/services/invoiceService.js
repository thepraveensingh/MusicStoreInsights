const { parseCSV } = require('../utils/csvParser');
const path = require('path');

const getInvoices = async () => {
    const data = await parseCSV(path.join(__dirname, '../data/invoices.csv'));
    return data;
};

module.exports = { getInvoices };
