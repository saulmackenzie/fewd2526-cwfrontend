export const deleteEvent = async (event) => {
    const res = await fetch('http://localhost:3002/delete-event', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: event.username,
            userfamily: event.userfamily,
        })
    });
    if (!res.ok) throw new Error(`Failed to delete event: HTTP ${res.status}`);
    return await res.json();
};