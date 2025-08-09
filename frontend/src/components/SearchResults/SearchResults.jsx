import React, { useState, useEffect } from 'react';

const SearchResults = ({ results, isLoading }) => {
    if (isLoading) {
        return <div className="text-white mt-4">Loading...</div>
    }

    if (!results || results.length === 0) {
        return <div className="text-white mt-4">No results found.</div>
    }

    return (
        <div className="mt-4 space-y-2">    
            {results.map((item, index) => (
                <div
                    key={index}
                    className="bg-white bg-opacity-10 text-gray-800 p-4 rounded-md shadow hover:bg-opacity-20  transition duration-200"    
                >
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.artist}</p>
                </div>
            ))}
        </div>
    )
};

export default SearchResults;