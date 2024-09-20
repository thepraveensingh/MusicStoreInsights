const { parseCSV } = require('../utils/csvParser');
const path = require('path');

const getTracks = async () => {
    const data = await parseCSV(path.join(__dirname, '../data/tracks.csv'));
    return data;
};

module.exports = { getTracks };
