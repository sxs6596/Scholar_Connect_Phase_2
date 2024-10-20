import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Make sure to include CSS

// EventCalendar Component: Displays events in a calendar format
const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Simulated data for events (to be replaced by API call)
  const dummyEvents = [
    { EventID: 1, EventTitle: 'AI in Healthcare', EventDate: '2024-12-01' },
    { EventID: 2, EventTitle: 'Renewable Energy Summit', EventDate: '2024-12-15' },
    { EventID: 3, EventTitle: 'Quantum Computing Conference', EventDate: '2025-01-10' },
  ];

  useEffect(() => {
    // Simulating an API call to fetch events
    setEvents(dummyEvents);
  }, []);

  // Find events on the selected date
  const eventsOnSelectedDate = events.filter(
    (event) => new Date(event.EventDate).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="event-calendar p-6 bg-neutral-focus rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50">
      <h3 className="text-xl font-bold text-gray-200 mb-4">Events Calendar</h3>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className="mb-4"
      />
      <div>
        <h4 className="text-lg font-bold text-gray-300">Events on {selectedDate.toDateString()}:</h4>
        {eventsOnSelectedDate.length > 0 ? (
          <ul className="list-disc pl-5 text-gray-200">
            {eventsOnSelectedDate.map((event) => (
              <li key={event.EventID}>
                <p>{event.EventTitle}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No events on this date</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;