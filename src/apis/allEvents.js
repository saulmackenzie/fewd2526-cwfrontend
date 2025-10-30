export const allEvents = async (familyId) => {
    const res = await fetch(`http://localhost:3002/all-events?familyId=${encodeURIComponent(familyId)}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`Failed to fetch events: HTTP ${res.status}`);
    return await res.json();
}