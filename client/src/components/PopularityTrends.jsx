import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchTracks } from '../services/api';

const PopularityTrends = () => {
    const { data: tracks, loading, error } = useFetch(fetchTracks);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading track data</div>;

    const sortedTracks = [...tracks].sort((a, b) => b.plays - a.plays);

    return (
        <div>
            <h2>Popularity Trends</h2>
            <ul>
                {sortedTracks.map(track => (
                    <li key={track.id}>{track.title} - Plays: {track.plays}</li>
                ))}
            </ul>
        </div>
    );
};

export default PopularityTrends;
