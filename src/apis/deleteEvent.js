export const deleteEvent = async (event) => {
    const id = event._id;
    const res = await fetch(`http://localhost:3002/delete-event/${encodeURIComponent(id)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: event.organiser,
            userfamily: event.familyId,
        })
    });
    if (!res.ok) throw new Error(`Failed to delete event: HTTP ${res.status}`);
    return await res.json();
};

export default deleteEvent;