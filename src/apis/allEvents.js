export const allEvents = async () => {
    const res = await fetch('http://localhost:3002/all-events', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`Failed to fetch events: HTTP ${res.status}`);
    return await res.json();
}