import React, { useState, useEffect } from 'react';

// GrantSearch Component: Display and search for available grants
const GrantSearch = () => {
  const [grants, setGrants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Simulated data for available grants (to be replaced by API call)
  const dummyGrants = [
    { GrantID: 1, GrantTitle: 'AI Research Grant', Deadline: '2024-12-31' },
    { GrantID: 2, GrantTitle: 'Renewable Energy Grant', Deadline: '2024-11-30' },
    { GrantID: 3, GrantTitle: 'Quantum Computing Grant', Deadline: '2025-01-15' },
  ];

  useEffect(() => {
    // Simulating an API call to fetch grants
    setGrants(dummyGrants);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredGrants = grants.filter((grant) =>
    grant.GrantTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grant-search p-6 bg-neutral-focus rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50">
      <h3 className="text-xl font-bold text-gray-200 mb-4">Search for Grants</h3>
      <input
        type="text"
        placeholder="Search by grant title"
        value={searchTerm}
        onChange={handleSearch}
        className="input input-bordered w-full mb-4 bg-neutral-focus text-neutral-content"
      />
      <ul className="list-disc pl-5 text-gray-200">
        {filteredGrants.map((grant) => (
          <li key={grant.GrantID} className="mb-2">
            <div className="flex justify-between">
                <div className="flex flex-col ">
                    <h4 className="text-lg font-bold">{grant.GrantTitle}</h4>
                    <p>Deadline: {grant.Deadline}</p>
                </div>
                <button className="btn bg-cyan-400 hover:bg-cyan-500 text-white mt-2">Apply</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrantSearch;