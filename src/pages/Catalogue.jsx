import React, { useState } from "react";

// States
import { useEventsState } from "../states/eventsState";
import EventCard from '../components/EventCard';

function Catalogue() {
    const { events, loading, error } = useEventsState();
    const [searchTerm, setSearchTerm] = useState('');
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mt-4 py-4">
            <h1>Events Catalogue</h1>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

            {/* Event cards */}
            <h5 className="my-3">Upcoming (next 14 days)</h5>
            {Array.isArray(events) && events.length > 0 ? (
                events.map(evt => (
                    <EventCard key={evt.id ?? evt._id} event={evt} />
                ))
            ) : (
                <p>No upcoming events.</p>
            )}
        </div>
    );    
}

export default Catalogue;