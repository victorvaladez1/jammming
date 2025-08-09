import React from "react";
import Track from "./Track/Track.js";

const TrackList = ({ tracks, onRemove, isRemoval }) => {

    return (
        <div className="space-y-4">
            {tracks.map((track) => {
                <Track 
                    key={track.id}
                    track={track}
                    onRemove={onRemove}
                    isRemoval={isRemoval}
                />
            })}
        </div>
    );
};

export default TrackList;