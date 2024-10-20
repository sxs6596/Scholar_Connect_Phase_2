import React, { useState } from 'react';
import Chat from './Chat';
import FileUpload from './FileUpload';
import Forum from './Forum';

const CollaborationTools = ({ projectId }) => {
  const [activeTool, setActiveTool] = useState('chat'); // Default tool is chat

  return (
    <div className="collaboration-tools container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-10">Collaboration Tools</h2>
      <div className="flex justify-center space-x-4 mb-10">
        <button
          className={`btn ${activeTool === 'chat' ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : ''}`}
          onClick={() => setActiveTool('chat')}
        >
          Chat
        </button>
        <button
          className={`btn ${activeTool === 'files' ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : ''}`}
          onClick={() => setActiveTool('files')}
        >
          File Upload
        </button>
        <button
          className={`btn ${activeTool === 'forum' ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : ''}`}
          onClick={() => setActiveTool('forum')}
        >
          Forum
        </button>
      </div>

      {/* Conditionally render based on the active tool */}
      {activeTool === 'chat' && <Chat projectId={projectId} />}
      {activeTool === 'files' && <FileUpload />}
      {activeTool === 'forum' && <Forum />}
    </div>
  );
};

export default CollaborationTools;