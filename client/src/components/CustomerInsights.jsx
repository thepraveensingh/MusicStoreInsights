import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchCustomers } from '../services/api';

const CustomerInsights = () => {
    const { data: customerData, loading, error } = useFetch(fetchCustomers);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading customer data</div>;

    return (
        <div>
            <h2>Customer Insights</h2>
            <ul>
                {customerData.map((data, index) => (
                    <li key={index}>
                        Country: {data.country ? data.country : 'Unknown'} - Customer Count: {data.customer_count}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerInsights;
