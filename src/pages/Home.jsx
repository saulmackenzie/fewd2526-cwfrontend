import React, { useState, useEffect } from 'react';
import { allUsers } from '../apis/allUsers';
import { allEvents } from '../apis/allEvents';

function Home() {
    const [users, setUsers] = useState(null);
    const [events, setEvents] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        allUsers()
            .then(data => { if (mounted) setUsers(data); })
            .catch(err => { if (mounted) setError(err.message); });
        return () => { mounted = false; };
    });

    useEffect(() => {
        let mounted = true;
        allEvents()
            .then(data => { if (mounted) setEvents(data); })
            .catch(err => { if (mounted) setError(err.message); });
        return () => { mounted = false; };
    });

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <h1>Home Page</h1>
            <pre>{JSON.stringify(users, null , 2)}</pre>
            <pre>{JSON.stringify(events, null , 2)}</pre>
        </>
    );
}

export default Home;