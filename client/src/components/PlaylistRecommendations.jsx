import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchPlaylists } from '../services/api';

const PlaylistRecommendations = () => {
    const { data: playlists, loading, error } = useFetch(fetchPlaylists);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading playlist data</div>;

    return (
        <div>
            <h2>Playlist Recommendations</h2>
            <ul>
                {playlists.map(playlist => (
                    <li key={playlist.id}>{playlist.name} - Tracks: {playlist.trackCount}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlaylistRecommendations;
