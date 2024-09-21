import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchCustomers } from '../services/api';
import '../styles/CustomerInsights.css'; // Create a CSS file for styling

const CustomerInsights = () => {
    const { data: customerData, loading, error } = useFetch(fetchCustomers);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading customer data</div>;

    return (
        <div>
            <h2>Customer Insights</h2>
            <div className="chart-container">
                {customerData.map((data, index) => (
                    <div key={index} className="bar">
                        <span className="country-name">{data.country ? data.country : 'Unknown'}</span>
                        <div
                            className="bar-fill"
                            style={{ width: `${data.customer_count * 9}px` }} // Adjust multiplier for bar length
                        >
                            {data.customer_count}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerInsights;
