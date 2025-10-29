export const newEvent = async (eventData) => {
    const res = await fetch('http://localhost:3002/new-event-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            event: eventData.event,
            date: eventData.date,
            startTime: eventData.startTime,
            endTime: eventData.endTime,
            location: eventData.location,
            requiredItems: eventData.requiredItems,
            username: eventData.username,
            userfamily: eventData.userfamily,
        }),
    });
    if (!res.ok) throw new Error(`Failed to create new event: HTTP ${res.status}`);
    return await res.json();
}