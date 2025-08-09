import React, { useState, useEffect } from 'react';

const SearchBar = () => {

    return (
        <div className="mt-6">
            <input 
                type="text"
                placeholder="Enter a song, album, or artist"
                className="px-4 py-2 rounded-md w-80 border border-gray-300 shadow-sm bg-transparent text-white placeholder-white focus:outline-noe focus:ring-2 focus:ring-white focus:border-white"
            />
            <button className="ml-2 px-4 py-2 bg-white text-indigo-600 font-semibold rounded-md">
                Search
            </button>
        </div>
    );
}

export default SearchBar;