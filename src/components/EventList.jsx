import React, { useState, useEffect } from 'react';

// EventList Component: Displays a list of upcoming events
const EventList = () => {
  const [events, setEvents] = useState([]);

  // Simulated data for upcoming events (to be replaced by API call)
  const dummyEvents = [
    { EventID: 1, EventTitle: 'AI in Healthcare', EventDate: '2024-12-01' },
    { EventID: 2, EventTitle: 'Renewable Energy Summit', EventDate: '2024-12-15' },
    { EventID: 3, EventTitle: 'Quantum Computing Conference', EventDate: '2025-01-10' },
  ];

  useEffect(() => {
    // Simulating an API call to fetch events
    setEvents(dummyEvents);
  }, []);

  return (
    <div className="event-list p-6 bg-neutral-focus rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50">
      <h3 className="text-xl font-bold text-gray-200 mb-4">Upcoming Events</h3>
      <ul className="list-disc pl-5 text-gray-200">
        {events.map((event) => (
          <li key={event.EventID} className="mb-2">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h4 className="text-lg font-bold">{event.EventTitle}</h4>
                <p>Date: {event.EventDate}</p>
              </div>
              <button className="btn bg-cyan-400 hover:bg-cyan-500 text-white mt-2">Register</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;