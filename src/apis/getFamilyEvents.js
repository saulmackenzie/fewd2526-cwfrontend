export const getFamilyEvents = async () => {
    const res = await fetch('https://fewd2526-cwbackend.onrender.com/family-events', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`Failed to fetch family events: HTTP ${res.status}`);
    return await res.json();
}