import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchInvoices } from '../services/api';

const InvoiceManagement = () => {
    const { data: invoices, loading, error } = useFetch(fetchInvoices);
    console.log(invoices);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading invoice data</div>;

    return (
        <div>
            <h2>Invoice Management</h2>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice.invoice_id}>Invoice #{invoice.invoice_id} - Amount: {invoice.total}</li>
                ))}
            </ul>
        </div>
    );
};

export default InvoiceManagement;
