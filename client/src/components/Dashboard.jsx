import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Music Analytics Dashboard</h1>
            <nav>
                <Link to="/customer-insights">Customer Insights</Link>
                <Link to="/engagement">Engagement Analytics</Link>
                <Link to="/playlists">Playlist Recommendations</Link>
                <Link to="/popularity-trends">Popularity Trends</Link>
                <Link to="/invoices">Invoice Management</Link>
            </nav>
        </div>
    );
};

export default Dashboard;
