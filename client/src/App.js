import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CustomerInsights from './components/CustomerInsights';
import EngagementAnalytics from './components/EngagementAnalytics';
import PlaylistRecommendations from './components/PlaylistRecommendations';
import PopularityTrends from './components/PopularityTrends';
import InvoiceManagement from './components/InvoiceManagement';
import "./App.css"

const App = () => {
    return (
      <Router>
          {/* <Dashboard/> */}
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customer-insights" element={<CustomerInsights />} />
                <Route path="/engagement" element={<EngagementAnalytics />} />
                <Route path="/playlists" element={<PlaylistRecommendations />} />
                <Route path="/popularity-trends" element={<PopularityTrends />} />
                <Route path="/invoices" element={<InvoiceManagement />} />
            </Routes>
        </Router>
    );
};

export default App;
