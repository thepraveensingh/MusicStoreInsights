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
                {tracks.map(track => (
                    <li key={track.id}>{track.title} - Plays: {track.plays}</li>
                ))}
            </ul>
        </div>
    );
};

export default EngagementAnalytics;
