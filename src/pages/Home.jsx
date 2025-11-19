import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import EventCard from '../components/events/EventCard';
import SearchBar from '../components/events/SearchBar';

// States
import { useEventsState } from '../states/eventsState';
import { useAuthState } from '../states/authState';

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
        <div className="container mt-4 py-4">
            {/* Family context + add event jumbotron */}
            <div className="p-4 p-md-5 text-white rounded bg-dark mb-3">
                <h1>Welcome{isAuthenticated && ( <span>, {user.username}</span> )}!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur impedit quae sit cumque? Natus minima repudiandae officiis maiores quas, quibusdam unde! Voluptate ad doloribus ullam consequuntur delectus explicabo nisi.</p>
                {isAuthenticated && ( 
                    <div className="row">
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <Link to="/catalogue"><button type="button" class="btn btn-light">Your Catalogue</button></Link>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <Link to="/new-event"><button type="button" class="btn btn-light">Create New Event</button></Link> 
                        </div>
                    </div>
                )}
            </div>

            <SearchBar 
                value={searchTerm}
                onChange={(val) => setSearchTerm(val)}
            />

            {isAuthenticated && (
                <>
                    {/* Upcoming Event cards */}
                    <h5 className="mb-3">Upcoming (next 14 days)</h5>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(evt => (
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