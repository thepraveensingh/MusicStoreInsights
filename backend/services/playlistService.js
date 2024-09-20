const { parseCSV } = require('../utils/csvParser');
const path = require('path');

const getPlaylists = async () => {
    const data = await parseCSV(path.join(__dirname, '../data/playlists.csv'));
    return data;
};

module.exports = { getPlaylists };
