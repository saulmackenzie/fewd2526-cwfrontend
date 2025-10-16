import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../apis/fetchUsers';

function Home() {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        fetchUsers()
            .then(data => { if (mounted) setUsers(data); })
            .catch(err => { if (mounted) setError(err.message); });
        return () => { mounted = false; };
    });

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <h1>Home Page</h1>
            <pre>{JSON.stringify(users, null , 2)}</pre>
        </>
    );
}

export default Home;