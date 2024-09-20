import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchTracks } from '../services/api';

const EngagementAnalytics = () => {
    const { data: tracks, loading, error } = useFetch(fetchTracks);
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading track data</div>;

    return (
        <div>
            <h2>Engagement Analytics</h2>
            <ul>
                {tracks.map((track, index) => (
                    // Ensure the key is unique, use track.id or fallback to index if necessary
                    <li key={track.id || index}>
                        {track.name} - Plays: {track.total_sold}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EngagementAnalytics;
