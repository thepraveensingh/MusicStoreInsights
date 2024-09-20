import React from 'react';
import useFetch from '../hooks/useFetch';
import { fetchPlaylists } from '../services/api';

const PlaylistRecommendations = () => {
    const { data: playlists, loading, error } = useFetch(fetchPlaylists);
    console.log(playlists);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading playlist data</div>;

    return (
        <div>
            <h2>Playlist Recommendations</h2>
            <ul>
                {playlists.map(playlist => (
                    <li key={playlist.playlist_id}> Playlist #{playlist.playlist_id} - Name: {playlist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlaylistRecommendations;
