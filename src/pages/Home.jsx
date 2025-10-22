import React, { useState, useEffect } from 'react';
import { useEventsState } from '../states/eventsState';

function Home() {
    const { events, loading, error } = useEventsState();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <h1>Home Page</h1>
            <pre>{JSON.stringify(events, null , 2)}</pre>
        </>
    );
}

export default Home;