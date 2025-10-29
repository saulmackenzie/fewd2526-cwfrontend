export const newEventEntry = async (eventData) => {
    const res = await fetch('http://localhost:3002/new-event-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: eventData.user,
        }),   
    });
    if (!res.ok) throw new Error(`Failed to create new event: HTTP ${res.status}`);
    return await res.json();
}