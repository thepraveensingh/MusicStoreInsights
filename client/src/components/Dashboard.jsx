import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; // Import the CSS file

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Music Analytics Dashboard</h1>
            <nav className="nav">
                <Link to="/customer-insights" className="nav-item">Customer Insights</Link>
                <Link to="/engagement" className="nav-item">Engagement Analytics</Link>
                <Link to="/playlists" className="nav-item">All Playlists</Link>
                <Link to="/popularity-trends" className="nav-item">Popularity Trends</Link>
                <Link to="/invoices" className="nav-item">Invoice Management</Link>
            </nav>
        </div>
    );
};

export default Dashboard;
