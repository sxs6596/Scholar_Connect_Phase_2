import React, { useState, useEffect } from 'react';

const Chat = ({ projectId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Simulate fetching chat history (dummy data)
    const initialMessages = [
      { senderId: 'user1', content: 'Hello! How is the project going?' },
      { senderId: 'user2', content: 'It’s going well, thanks!' }
    ];
    setMessages(initialMessages);
  }, [projectId]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { senderId: 'currentUser', content: message };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');  // Clear input after sending
    }
  };

  return (
    <div className="chat-box p-4 bg-neutral-focus rounded-lg shadow-lg shadow-cyan-500/50">
      <h3 className="text-xl font-bold text-gray-200 mb-4">Project Chat</h3>
      <div className="message-list mb-4 max-h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.senderId === 'currentUser' ? 'text-right' : 'text-left'}`}>
            <p className={`py-2 px-4 inline-block ${msg.senderId === 'currentUser' ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-black'} rounded-lg`}>
              {msg.content}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="input input-bordered w-full mb-2 bg-neutral-focus text-neutral-content"
      />
      <button onClick={sendMessage} className="btn bg-cyan-400 hover:bg-cyan-500 text-white w-full">Send</button>
    </div>
  );
};

export default Chat;