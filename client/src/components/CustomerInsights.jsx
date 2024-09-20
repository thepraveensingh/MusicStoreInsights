import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchCustomers } from '../services/api';

const CustomerInsights = () => {
    // console.log("this is coming from customerinsight" , fetchCustomers);
    const { data: customers, loading, error } = useFetch(fetchCustomers);
    console.log(customers);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading customer data</div>;

    return (
        <div>
            <h2>Customer Insights</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.customer_id}>{customer.first_name} - Total Spend: {customer.totalSpend}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerInsights;
