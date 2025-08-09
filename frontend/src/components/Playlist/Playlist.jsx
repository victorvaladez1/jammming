import React, { useState, useEffect } from "react";
import TrackList from "./TrackList/TrackList.jsx";

const Playlist = ({playlistName, tracks, onNameChange, onRemove, onSave }) => {
    return (
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg w-full max-w-md text-white">
            <input
                className="w-full p-2 mb-4 text-black rounded"
                value={playlistName}
                onChange={(e) => onNameChange(e.target.value)}
                placeholder="New Playlist Name"
            />
            <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true} />
            <button 
                className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                onClick={onSave}
            >
                Save to Spotify
            </button>
        </div>
    );
}

export default Playlist;