const API_URL = 'http://localhost:5000/'; // Update this URL if your backend runs on a different port
// Fetch customer insights
export const fetchCustomers = async () => {
    const response = await fetch(`${API_URL}api/customers/insights`);
  const data = await response.json();  
  return data;
};

// Fetch engagement
export const fetchEngagement = async () => {
  const response = await fetch(`${API_URL}api/engagement`);
  const data = await response.json();
  return data;
};


export const fetchPlaylists = async () => {
  const response = await fetch(`${API_URL}api/playlists`);
  const data = await response.json();
  return data;
};

// Fetch track popularity
export const fetchTracks = async () => {
  const response = await fetch(`${API_URL}api/tracks`);
  const data = await response.json();
  return data;
};

// Fetch invoices
export const fetchInvoices = async () => {
  const response = await fetch(`${API_URL}api/invoices`);
  const data = await response.json();
  return data;
};


// const API_URL = 'http://localhost:5000/'; // Update this URL if your backend runs on a different port

// export const fetchCustomers = async () => {
//     const response = await fetch(`${API_URL}api/customers`);
//     const data = await response.json();
//     return data;
// };

// export const fetchTracks = async () => {
//     const response = await fetch(`${API_URL}api/tracks`);
//     return response.json();
// };

// export const fetchInvoices = async () => {
//     const response = await fetch(`${API_URL}api/invoices`);
//     return response.json();
// };

// export const fetchPlaylists = async () => {
//     const response = await fetch(`${API_URL}api/playlists`);
//     return response.json();
// };
