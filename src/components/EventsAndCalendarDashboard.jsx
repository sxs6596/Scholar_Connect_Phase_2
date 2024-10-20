import React, { useState } from 'react';
import EventList from './EventList';
import EventCalendar from './EventCalendar';
import EventRegistration from './EventRegistration';

const EventsAndCalendarDashboard = () => {
  const [viewMode, setViewMode] = useState('list');
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="events-calendar-dashboard container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-10">Events and Calendar</h2>
      <div className="flex justify-center space-x-4 mb-10">
        <button
          className={`btn ${viewMode === 'list' ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : ''}`}
          onClick={() => setViewMode('list')}
        >
          View Events
        </button>
        <button
          className={`btn ${viewMode === 'calendar' ? 'bg-cyan-400 hover:bg-cyan-500 text-white' : ''}`}
          onClick={() => setViewMode('calendar')}
        >
          Calendar View
        </button>
      </div>

      {/* Conditionally render EventList or EventCalendar */}
      {viewMode === 'list' && <EventList onSelectEvent={setSelectedEvent} />}
      {viewMode === 'calendar' && <EventCalendar onSelectEvent={setSelectedEvent} />}

      {/* Render EventRegistration if an event is selected */}
      {selectedEvent && (
        <EventRegistration eventId={selectedEvent.EventID} eventTitle={selectedEvent.EventTitle} />
      )}
    </div>
  );
};

export default EventsAndCalendarDashboard;