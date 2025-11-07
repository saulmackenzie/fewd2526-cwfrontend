export const editEvent = async (event) => {
    const id = event.id;
    const res = await fetch(`http://localhost:3002/update-event/${encodeURIComponent(id)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user:               event.user,
            event:              event.event,
            description:        event.description,
            requiredItems:      event.requiredItems,
            location:           event.location,
            date:               event.date,
            startTime:          event.startTime,
            endTime:            event.endTime,
            user:               event.user,
            familyId:           event.familyId
        }),
    });
    if (!res.ok) throw new Error(`Failed to edit event: HTTP ${res.status}`);
    return await res.json();
}

export default editEvent;