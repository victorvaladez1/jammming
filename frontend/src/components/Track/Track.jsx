import React, { useState, useEffect } from "react";

const Track = ({ track, onRemove, isRemoval }) => {

    const handleClick = () => {
        onRemove(track.id);
    }

    return (
        <div className="flex justify-between items-center bg-white bg-opacity-10 p-4 rounded text-white">
            <div>
                <p className="font-semibold">{track.name}</p>
                <p className="text-sm">{track.artist} | {track.album}</p>
            </div>
            <button
                className={`text-sm px-3 py-1 rounded ${
                    isRemoval ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
                }`}
                onClick={handleClick}
            >
                {isRemoval ? "Remove" : "Add"}
            </button>
        </div>
    );
};

export default Track;