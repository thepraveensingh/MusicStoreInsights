import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchTracks } from '../services/api';
import '../styles/PopularityTrends.css'; // Ensure to import your CSS file

const PopularityTrends = () => {
    const { data: tracks, loading, error } = useFetch(fetchTracks);
    console.log(tracks);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading track data</div>;

    const sortedTracks = [...tracks].sort((a, b) => b.plays - a.plays);

    return (
        <div className="popularity-container">
            <h2>Here are the top 10 tracks</h2>
            <ul>
                {sortedTracks.map(track => (
                    <li key={track.id}>{track.name} - Sold: {track.total_sold}</li>
                ))}
            </ul>
        </div>
    );
};

export default PopularityTrends;
