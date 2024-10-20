import React, { useState } from 'react';
import GrantSearch from './GrantSearch';
import GrantApplicationTracker from './GrantApplicationTracker';

const FundingAndGrantsDashboard = () => {
  const [viewMode, setViewMode] = useState('search');

  return (
    <div className="funding-grants-dashboard container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-10">Funding and Grants</h2>
      <div className="flex justify-center space-x-4 mb-10">
        <button
          className={`btn ${viewMode === 'search' ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : ''}`}
          onClick={() => setViewMode('search')}
        >
          Search Grants
        </button>
        <button
          className={`btn ${viewMode === 'tracker' ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : ''}`}
          onClick={() => setViewMode('tracker')}
        >
          My Applications
        </button>
      </div>

      {/* Conditionally render the GrantSearch or GrantApplicationTracker component */}
      {viewMode === 'search' && <GrantSearch />}
      {viewMode === 'tracker' && <GrantApplicationTracker />}
    </div>
  );
};

export default FundingAndGrantsDashboard;