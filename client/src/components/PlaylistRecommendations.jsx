import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchPlaylists } from '../services/api';
import '../styles/PlaylistRecommendations.css';  // Import the CSS file

const PlaylistRecommendations = () => {
    const { data: playlists, loading, error } = useFetch(fetchPlaylists);
    
    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error loading playlist data</div>;

    return (
        <div className="playlist-container">
            <h2>Recommended Playlists</h2>
            <ul className="playlist-grid">
                {playlists.map(playlist => (
                    <li key={playlist.playlist_id} className="playlist-item">
                        <div className="playlist-card">
                            <span className="playlist-name">{playlist.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlaylistRecommendations;
 