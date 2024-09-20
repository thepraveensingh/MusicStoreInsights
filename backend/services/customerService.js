const { parseCSV } = require('../utils/csvParser');
const path = require('path');

const getCustomers = async () => {
    const data = await parseCSV(path.join(__dirname, '../data/customer.csv'));
    return data; // Further processing can be done here
};

module.exports = { getCustomers };
