import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchInvoices } from '../services/api';

const InvoiceManagement = () => {
    const { data: invoices, loading, error } = useFetch(fetchInvoices);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading invoice data</div>;

    return (
        <div>
            <h2>Invoice Management</h2>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice.id}>Invoice #{invoice.id} - Amount: {invoice.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default InvoiceManagement;
