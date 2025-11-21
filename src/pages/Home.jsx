import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import EventCard from '../components/events/EventCard';
import SearchBar from '../components/events/SearchBar';

// States
import { useEventsState } from '../states/eventsState';
import { useAuthState } from '../states/authState';

import styles from "./css/Home.module.css";

function Home() {
    const { events, loading, error } = useEventsState();
    const { user, isAuthenticated } = useAuthState(); 

    const [searchTerm, setSearchTerm] = useState('');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    console.log(events);
    console.log("User:", user, "\nAuthenticated:", isAuthenticated);

    const filteredEvents = Array.isArray(events)
        ? events.filter(evt => {
            const title = String(evt?.event ?? '').toLowerCase();
            return title.includes((searchTerm || '').toLowerCase());
        })
        : [];

    return (
        <div className="container mt-4 py-4 mx-auto px-3 px-md-0">
            {/* Family context + add event jumbotron */}
            <div className={`p-4 p-md-5 text-white rounded bg-dark mb-5 shadow ui-gradient ${styles.heroSection}`}>
                <h1 className="display-4 fw-bold">Welcome{isAuthenticated && ( <span>, {user.username}</span> )}!</h1>
                <p className="lead mb-4">Plan and manage your family's events with ease.</p>
                {isAuthenticated && ( 
                    <div className="row text-center">
                        <div className='col-6'>
                            <Link to="/catalogue"><button type="button" className={`btn btn-primary-outline w-100 py-3 text-white fs-3 ${styles.heroButton}`}>Your Catalogue</button></Link>
                        </div>
                        <div className='col-6'>
                            <Link to="/new-event"><button type="button" className={`btn btn-primary-outline w-100 py-3 text-white fs-3 ${styles.heroButton}`}>Create New Event</button></Link> 
                        </div>
                    </div>
                )}
            </div>

            <SearchBar
                value={searchTerm}
                onChange={(val) => setSearchTerm(val)}
            />

            {isAuthenticated && (
                <div className='mb-5'>
                    {/* Upcoming Event cards */}
                    <h4 className="mb-3 fw-light text-white">Upcoming Events</h4>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(evt => (
                            <EventCard key={evt.id ?? evt._id} event={evt} />
                        ))
                    ) : (
                        <p>No upcoming events.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;