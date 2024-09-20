const API_URL = 'http://localhost:5000/'; // Update this URL if your backend runs on a different port

export const fetchCustomers = async () => {
    const response = await fetch(`${API_URL}api/customers`);
    const data = await response.json();
    // console.log("this is coming from api.js",data);
    return data;
};


export const fetchTracks = async () => {
    const response = await fetch(`${API_URL}api/tracks`);
    return response.json();
};

export const fetchInvoices = async () => {
    const response = await fetch(`${API_URL}api/invoices`);
    return response.json();
};

export const fetchPlaylists = async () => {
    const response = await fetch(`${API_URL}api/playlists`);
    return response.json();
};
