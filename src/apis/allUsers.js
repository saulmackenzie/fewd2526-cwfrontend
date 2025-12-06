export const allUsers = async () => {
    const res = await fetch('https://fewd2526-cwbackend.onrender.com/all-users', {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' }, 
    });
    if (!res.ok) throw new Error(`Failed to fetch users: HTTP ${res.status}`);
    return await res.json();
}