export const getFamilyEvents = async () => {
    const res = await fetch('http://localhost:3002/family-events', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`Failed to fetch family events: HTTP ${res.status}`);
    return await res.json();
}