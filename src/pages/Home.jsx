import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

// States
import { useEventsState } from '../states/eventsState';
import { useAuthState } from '../states/authState';

function Home() {
    const { events, loading, error } = useEventsState();
    const { user, isAuthenticated } = useAuthState();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    console.log(events);
    console.log("User:", user, "\nAuthenticated:", isAuthenticated);

    return (
        <div className="container mt-4 py-4">
            {/* Family context + add event jumbotron */}
            <div className="p-4 p-md-5 text-white rounded bg-dark mb-3">
                <h1>Welcome, Smiths!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur impedit quae sit cumque? Natus minima repudiandae officiis maiores quas, quibusdam unde! Voluptate ad doloribus ullam consequuntur delectus explicabo nisi.</p>
                <button type="button" class="btn btn-light">View Your Events</button>
            </div>

            {/* Search & filter */}
            <form className="row g-2 align-items-center mb-3">
                <div className="col-md-4">
                    <label className="form-label">Search</label>
                    <input className="form-control" placeholder="name, location, equipment" />
                </div>
                <div className="col-md-3">
                    <label className="form-label">From</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="col-md-3">
                    <label className="form-label">To</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="col-md-2 d-grid">
                    <button type="submit" className="btn btn-outline-secondary">Apply</button>
                </div>
            </form>

            {isAuthenticated && (
                <>
                    {/* Upcoming Event cards */}
                    <h5 className="mb-3">Upcoming (next 14 days)</h5>
                    {Array.isArray(events) && events.length > 0 ? (
                        events.map(evt => (
                            <EventCard key={evt.id ?? evt._id} event={evt} />
                        ))
                    ) : (
                        <p>No upcoming events.</p>
                    )}
                </>
            )}
        </div>
    );
}

export default Home;