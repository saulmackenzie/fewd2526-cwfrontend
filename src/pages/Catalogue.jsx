import React, { useState } from "react";

// States
import { useEventsState } from "../states/eventsState";

// Components
import EventCard from '../components/events/EventCard';
import SearchBar from "../components/events/SearchBar";

function Catalogue() {
    const { events, loading, error } = useEventsState();

    const [searchTerm, setSearchTerm] = useState('');
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const filteredEvents = Array.isArray(events)
        ? events.filter(evt => {
            const title = String(evt?.event ?? '').toLowerCase();
            return title.includes((searchTerm || '').toLowerCase());
        })
        : [];

    return (
        <div className="container mt-4 py-4">
            <h1>Events Catalogue</h1>

            <SearchBar 
                value={searchTerm}
                onChange={(val) => setSearchTerm(val)}
            />

            {/* Event cards */}
            <h5 className="my-3">Upcoming (next 14 days)</h5>
            {filteredEvents.length > 0 ? (
                filteredEvents.map(evt => (
                    <EventCard key={evt.id ?? evt._id} event={evt} />
                ))
            ) : (
                <p>No upcoming events.</p>
            )}
        </div>
    );    
}

export default Catalogue;