export const editEvent = async (eventData) => {
    const res = await fetch('http://localhost:3002/edit-event', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: eventData.user,
            family: eventData.family,
        }),
    });
    if (!res.ok) throw new Error(`Failed to edit event: HTTP ${res.status}`);
    return await res.json();
}