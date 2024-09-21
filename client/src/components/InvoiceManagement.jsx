import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchInvoices } from '../services/api';
import '../styles/InvoiceManagement.css'; // Ensure to import your CSS file

const InvoiceManagement = () => {
    const { data: invoices, loading, error } = useFetch(fetchInvoices);
    console.log(invoices);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading invoice data</div>;

    return (
        <div className="invoice-container">
            <h2>Invoice Management</h2>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice.invoice_id}>
                        inv_Name: {invoice.first_name} {invoice.last_name} , 
                        total_purchases: {invoice.total_purchases} , 
                        Amount: ${invoice.Amount} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvoiceManagement;
