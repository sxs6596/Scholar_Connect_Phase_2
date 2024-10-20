import React, { useState, useEffect } from 'react';

// Main ProjectDashboard Component with Dummy Data Support
function ProposalDashboard() {
  const [viewMode, setViewMode] = useState('list');  // Modes: 'list', 'create', 'edit', 'feedback'
  const [proposals, setProposals] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [formData, setFormData] = useState({ projectTitle: '', projectDescription: '' });
  const [feedback, setFeedback] = useState('');

  // Dummy Data to simulate proposals
  const dummyProposals = [
    {
      ProposalID: 1,
      ProjectTitle: 'AI Research on Autonomous Vehicles',
      ProjectDescription: 'Research focused on AI algorithms for autonomous driving.',
      Status: 'Pending',
      Feedback: 'Good start, needs more details on safety protocols.'
    },
    {
      ProposalID: 2,
      ProjectTitle: 'Renewable Energy in Urban Areas',
      ProjectDescription: 'Exploring solar energy utilization in city infrastructures.',
      Status: 'Approved',
      Feedback: 'Excellent proposal, ready for implementation.'
    },
    {
      ProposalID: 3,
      ProjectTitle: 'Quantum Computing and Cryptography',
      ProjectDescription: 'Investigating the impact of quantum computing on modern cryptography.',
      Status: 'Rejected',
      Feedback: 'Needs more details on the technical aspects of quantum algorithms.'
    },
  ];

  // Use dummy data in case the API is unavailable
  useEffect(() => {
    if (viewMode === 'list') {
      // Simulate an API call with dummy data
      setProposals(dummyProposals);
    }
  }, [viewMode]);

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle creating a new proposal (dummy function for now)
  const handleCreateProposal = (e) => {
    e.preventDefault();
    // Simulate adding a new proposal to the list
    const newProposal = {
      ProposalID: proposals.length + 1,
      ProjectTitle: formData.projectTitle,
      ProjectDescription: formData.projectDescription,
      Status: 'Pending',
      Feedback: 'No feedback yet',
    };
    setProposals([...proposals, newProposal]);
    setViewMode('list');  // Go back to list after submission
  };

  // Handle editing an existing proposal (dummy function for now)
  const handleEditProposal = (e) => {
    e.preventDefault();
    // Simulate editing the selected proposal
    const updatedProposals = proposals.map((proposal) =>
      proposal.ProposalID === selectedProposal.ProposalID
        ? { ...selectedProposal, ...formData }
        : proposal
    );
    setProposals(updatedProposals);
    setViewMode('list');  // Go back to list after editing
  };

  // Handle feedback submission (dummy function for now)
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Simulate adding feedback to the selected proposal
    const updatedProposals = proposals.map((proposal) =>
      proposal.ProposalID === selectedProposal.ProposalID
        ? { ...proposal, Feedback: feedback }
        : proposal
    );
    setProposals(updatedProposals);
    setViewMode('list');  // Go back to list after submitting feedback
  };

  // Switch to edit mode and populate form data
  const handleEditClick = (proposal) => {
    setSelectedProposal(proposal);
    setFormData({
      projectTitle: proposal.ProjectTitle,
      projectDescription: proposal.ProjectDescription,
    });
    setViewMode('edit');
  };

  // Switch to feedback mode
  const handleFeedbackClick = (proposal) => {
    setSelectedProposal(proposal);
    setFeedback(proposal.Feedback || '');
    setViewMode('feedback');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-400 mb-10">
        Project Dashboard
      </h1>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={() => setViewMode('list')}
          className={`btn ${viewMode === 'list' ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : ''}`}
        >
          View Proposals
        </button>
        <button
          onClick={() => setViewMode('create')}
          className={`btn ${viewMode === 'create' ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : ''}`}
        >
          Create New Proposal
        </button>
      </div>

      {/* Render based on the current mode */}
      {viewMode === 'list' && (
        <div>
          <h2 className="text-2xl font-bold text-center text-slate-400 mb-6">My Proposals</h2>
          <div className="grid grid-cols-1 gap-6">
            {proposals.map((proposal) => (
              <div
                key={proposal.ProposalID}
                className="bg-neutral-focus p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50"
              >
                <h3 className="text-xl font-bold text-gray-200 mb-2">
                  {proposal.ProjectTitle}
                </h3>
                <p className="mb-2">
                  <strong>Status:</strong> {proposal.Status}
                </p>
                <p className="mb-4">
                  <strong>Feedback:</strong> {proposal.Feedback || 'No feedback yet'}
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEditClick(proposal)}
                    className="btn bg-cyan-400 hover:bg-cyan-500 text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleFeedbackClick(proposal)}
                    className="btn bg-cyan-400 hover:bg-cyan-500 text-white"
                  >
                    Provide Feedback
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {viewMode === 'create' && (
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-400 mb-6">
            Create New Proposal
          </h2>
          <form
            onSubmit={handleCreateProposal}
            className="bg-neutral-focus p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50"
          >
            <div className="mb-4">
              <label htmlFor="projectTitle" className="block text-white">
                Project Title
              </label>
              <input
                type="text"
                id="projectTitle"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                className="input input-bordered w-full bg-neutral-focus text-neutral-content"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projectDescription" className="block text-white">
                Project Description
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
                required
              />
            </div>
            <button type="submit" className="btn bg-cyan-400 hover:bg-cyan-500 text-white w-full">
              Submit Proposal
            </button>
          </form>
        </div>
      )}

      {viewMode === 'edit' && selectedProposal && (
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-400 mb-6">
            Edit Proposal
          </h2>
          <form
            onSubmit={handleEditProposal}
            className="bg-neutral-focus p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50"
          >
            <div className="mb-4">
              <label htmlFor="projectTitle" className="block text-white">
                Project Title
              </label>
              <input
                type="text"
                id="projectTitle"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                className="input input-bordered w-full bg-neutral-focus text-neutral-content"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projectDescription" className="block text-white">
                Project Description
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
                required
              />
            </div>
            <button type="submit" className="btn bg-cyan-400 hover:bg-cyan-500 text-white w-full">
              Update Proposal
            </button>
          </form>
        </div>
      )}

      {viewMode === 'feedback' && selectedProposal && (
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-400 mb-6">
            Provide Feedback for {selectedProposal.ProjectTitle}
          </h2>
          <form
            onSubmit={handleFeedbackSubmit}
            className="bg-neutral-focus p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50"
          >
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-white">
                Feedback
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="textarea textarea-bordered w-full bg-neutral-focus text-neutral-content"
                required
              />
            </div>
            <button type="submit" className="btn bg-cyan-400 hover:bg-cyan-500 text-white w-full">
              Submit Feedback
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProposalDashboard;