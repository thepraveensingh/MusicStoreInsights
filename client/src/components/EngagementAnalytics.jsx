import React from 'react';
import useFetch from '../hooks/useFetch';
import {fetchEngagement} from '../services/api';

const EngagementAnalytics = () => {
    const { data: tracks, loading, error } = useFetch(fetchEngagement );
    console.log(tracks);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading track data</div>;

    return (
        <div>
            <h2>Engagement Analytics</h2>
            <ul>
                {tracks.map((customer, index) => (
                    // Using index as the fallback for the key since there's no id field
                    <li key={customer.customer_id || index}>
                    {customer.first_name} (ID: {customer.customer_id}) - Total Invoices: {customer.total_invoices}, Total Tracks Purchased: {customer.total_tracks_purchased}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default EngagementAnalytics;
