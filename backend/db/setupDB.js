const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Initialize database
const dbPath = path.resolve(__dirname, 'music_data.db');
const db = new sqlite3.Database(dbPath);

// CSV file paths
const csvDir = path.resolve(__dirname, '../data');
const customersCSV = path.join(csvDir, 'customer.csv');
const tracksCSV = path.join(csvDir, 'track.csv');
const invoicesCSV = path.join(csvDir, 'invoice.csv');
const playlistsCSV = path.join(csvDir, 'playlist.csv');
const invoiceLinesCSV = path.join(csvDir, 'invoice_line.csv'); // New CSV path

// Function to create tables
const createTables = () => {
  // Create customers 
  db.run(`DROP TABLE IF EXISTS customers;`);

  db.run(`
    CREATE TABLE IF NOT EXISTS customers (
      customer_id INTEGER PRIMARY KEY,
      first_name TEXT,
      last_name TEXT,
      company TEXT,
      address TEXT,
      city TEXT,
      state TEXT,
      country TEXT,
      postal_code TEXT,
      phone TEXT,
      fax TEXT,
      email TEXT,
      support_rep_id INTEGER
    );
  `);

  // Create tracks table
  db.run(`DROP TABLE IF EXISTS tracks;`);
  db.run(`
    CREATE TABLE IF NOT EXISTS tracks (
      track_id INTEGER PRIMARY KEY,
      name TEXT,
      album_id INTEGER,
      media_type_id INTEGER,
      genre_id INTEGER,
      composer TEXT,
      milliseconds INTEGER,
      bytes INTEGER,
      unit_price REAL
    );
  `);

  // Create invoices table
  db.run(`DROP TABLE IF EXISTS invoices;`);

  db.run(`
    CREATE TABLE IF NOT EXISTS invoices (
      invoice_id INTEGER PRIMARY KEY,
      customer_id INTEGER,
      invoice_date TEXT,
      billing_address TEXT,
      billing_city TEXT,
      billing_state TEXT,
      billing_country TEXT,
      billing_postal_code TEXT,
      total REAL,
      FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
    );
  `);
// Create invoice_lines table
db.run(`DROP TABLE IF EXISTS invoice_lines;`);
db.run(`CREATE TABLE IF NOT EXISTS invoice_lines (
  invoice_line_id INTEGER PRIMARY KEY,
  invoice_id INTEGER,
  track_id INTEGER,
  unit_price REAL,
  quantity INTEGER,
  FOREIGN KEY (invoice_id) REFERENCES invoices(invoice_id),
  FOREIGN KEY (track_id) REFERENCES tracks(track_id)
);`);
  db.run(`DROP TABLE IF EXISTS playlists;`);
  db.run(`
    CREATE TABLE IF NOT EXISTS playlists (
      playlist_id INTEGER PRIMARY KEY,
      name TEXT
    );
  `);
};
// Function to load CSV data into tables
const loadCSVData = (csvFile, tableName, expectedColumns) => {
  const data = fs.readFileSync(csvFile, 'utf-8').split('\n').slice(1); // Read the file and split it by new lines, skipping the header
  data.forEach(row => {
    let values = row.split(',').map(value => {
      // Trim spaces and handle null values
      value = value.trim();
      return value === '' ? null : value;
    });
    
    // Adjust the number of values to match the expected number of columns
    if (values.length > expectedColumns) {
      values = values.slice(0, expectedColumns); // Truncate extra values
    } else if (values.length < expectedColumns) {
      while (values.length < expectedColumns) {
        values.push(null); // Insert NULL for missing values
      }
    }

    const placeholders = values.map(() => '?').join(','); // Create placeholders for the SQL query
    const query = `INSERT INTO ${tableName} VALUES (${placeholders})`; // Construct the SQL query
    db.run(query, values, (err) => { // Execute the SQL query
      if (err) {
        console.error(`Failed to insert data into ${tableName}:`, err.message); // Log any errors
      }
    });
  });
};

// Run setup
db.serialize(() => {
  createTables();
  loadCSVData(customersCSV, 'customers', 13);  // For customers table with 13 columns
  loadCSVData(tracksCSV, 'tracks', 9);         // For tracks table with 9 columns
  loadCSVData(invoicesCSV, 'invoices', 9);     // For invoices table with 9 columns
  loadCSVData(playlistsCSV, 'playlists', 2);   // For playlists table with 2 columns
  loadCSVData(invoiceLinesCSV, 'invoice_lines', 5); // Load invoice lines with 5 columns
 
  console.log('Database setup complete!');
});

db.close();
