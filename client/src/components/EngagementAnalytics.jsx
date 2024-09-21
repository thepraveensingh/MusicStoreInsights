import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchEngagement } from '../services/api';
import '../styles/EngagementAnalytics.css';  // Import the corresponding CSS file

const EngagementAnalytics = () => {
    const { data: tracks, loading, error } = useFetch(fetchEngagement);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading track data</div>;

    return (
        <div className="engagement-container">
            <h2>Engagement Analytics</h2>
            <ul className="engagement-list">
                {tracks.map((customer, index) => (
                    <li key={customer.customer_id || index}>
                        <div className="customer-info">
                            <span className="customer-name">{customer.first_name} {customer.last_name}</span>
                            <span className="customer-id">ID: {customer.customer_id}</span>
                        </div>
                        <div className="engagement-stats">
                            
                            <span>Total Tracks Purchased: <span className="stat-number">{customer.total_tracks_purchased}</span></span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EngagementAnalytics;
