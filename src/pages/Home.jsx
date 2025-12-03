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
            <div className={`p-5 p-md-5 text-white rounded bg-dark mb-5 shadow ui-gradient ${styles.heroSection}`}>
                <h1 className="display-4 fw-bold">Welcome{isAuthenticated && ( <span>, {user.username}</span> )}!</h1>
                <p className="lead mb-4">Plan and manage your family's events with ease.</p>
                {isAuthenticated && ( 
                    <div className="row text-center">
                        <div className='col-md-6 col-sm-12'>
                            <Link to="/catalogue"><button type="button" className="btn btn-primary-outline w-100 py-4 text-white fs-3 btn-scale">View Your Catalogue</button></Link>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <Link to="/new-event"><button type="button" className="btn btn-primary-outline w-100 py-4 text-white fs-3 btn-scale">Create New Event</button></Link> 
                        </div>
                    </div>
                )}
            </div>

            {isAuthenticated ? (
                <>
                    <SearchBar
                        value={searchTerm}
                        onChange={(val) => setSearchTerm(val)}
                    />

                    <div className='mb-5'>
                        {/* Upcoming Event cards */}
                        <h4 className="mb-3 fw-light text-white">Upcoming Events</h4>
                        <div className="row">
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map(evt => (
                                    <EventCard key={evt.id ?? evt._id} event={evt} />
                                ))
                            ) : (
                                <p>No upcoming events.</p>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-white">
                    <div className="row my-5">
                        <div className="col-md-6 col-sm-12">
                            <h3 className="text-start">New to NestPlan?</h3>
                            <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolorem, harum dolores architecto neque numquam nobis amet, nulla laudantium labore in ipsum. Quas eligendi fugiat non ipsum cupiditate animi voluptates?</p>
                            <Link to="/account"><button type="button" className="btn btn-primary-outline w-100 py-4 text-white fs-3 btn-scale mt-4">Join NestPlan</button></Link>
                        </div>
                        
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.ndCKdMbJTMQkzLuC72moswHaFE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" className={`${styles.homeImg}`} alt="New to NestPlan?" />
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5">
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.ndCKdMbJTMQkzLuC72moswHaFE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" className={`${styles.homeImg}`} alt="Everything in one place" />
                        </div>
                        
                        <div className="col-md-6 col-sm-12">
                            <h3 className="text-end">Everything in one place</h3>
                            <p className="text-end">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolorem, harum dolores architecto neque numquam nobis amet, nulla laudantium labore in ipsum. Quas eligendi fugiat non ipsum cupiditate animi voluptates?</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5">
                        <div className="col-md-6 col-sm-12 ">
                            <h3 className="text-start">Never miss a moment</h3>
                            <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolorem, harum dolores architecto neque numquam nobis amet, nulla laudantium labore in ipsum. Quas eligendi fugiat non ipsum cupiditate animi voluptates?</p>
                        </div>
                        
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.ndCKdMbJTMQkzLuC72moswHaFE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" className={`${styles.homeImg}`} alt="Never miss a moment" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;