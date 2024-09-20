const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const cors = require("cors")
// Initialize database connection
const dbPath = path.resolve(__dirname, 'db/music_data.db');
const db = new sqlite3.Database(dbPath);

// Middleware
app.use(express.json());
app.use(cors());
app.get('/api/customers/insights', (req, res) => {
  const query = `SELECT country, COUNT(customer_id) AS customer_count FROM customers GROUP BY country ORDER BY customer_count DESC`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Track Popularity API
app.get('/api/tracks', (req, res) => {
  const query = `SELECT tracks.name, SUM(invoice_lines.quantity) AS total_sold
FROM tracks
JOIN invoice_lines ON tracks.track_id = invoice_lines.track_id
GROUP BY tracks.name
ORDER BY total_sold DESC
LIMIT 10;

`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Playlist Recommendations API based on track popularity
app.get('/api/playlists', (req, res) => {
  const query = `
    SELECT * from playlists
  `;
  
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Invoice Management API
app.get('/api/invoices', (req, res) => {
  const query = `SELECT * FROM invoices`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
