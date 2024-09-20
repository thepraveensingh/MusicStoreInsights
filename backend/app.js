const express = require('express');
const customerRoutes = require('./routes/customerRoutes');
const trackRoutes = require('./routes/trackRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const playlistRoutes = require('./routes/playlistRoutes');

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000',  // Frontend URL during development
  credentials: true,                // Allow credentials (cookies, authentication headers)
};
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/tracks', trackRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/playlists', playlistRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
