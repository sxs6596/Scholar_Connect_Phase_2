import React, { useState, useEffect } from 'react';

// GrantApplicationTracker Component: Displays grants the user applied for
const GrantApplicationTracker = () => {
  const [applications, setApplications] = useState([]);

  // Simulated data for user applications (to be replaced by API call)
  const dummyApplications = [
    { GrantID: 1, GrantTitle: 'AI Research Grant', Status: 'Pending', AppliedDate: '2024-10-01' },
    { GrantID: 2, GrantTitle: 'Renewable Energy Grant', Status: 'Approved', AppliedDate: '2024-09-15' },
  ];

  useEffect(() => {
    // Simulating an API call to fetch user applications
    setApplications(dummyApplications);
  }, []);

  return (
    <div className="application-tracker p-6 bg-neutral-focus rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50">
      <h3 className="text-xl font-bold text-gray-200 mb-4">Your Grant Applications</h3>
      <ul className="list-disc pl-5 text-gray-200">
        {applications.map((application) => (
          <li key={application.GrantID} className="mb-2">
            <h4 className="text-lg font-bold">{application.GrantTitle}</h4>
            <p>Status: {application.Status}</p>
            <p>Applied on: {application.AppliedDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrantApplicationTracker;