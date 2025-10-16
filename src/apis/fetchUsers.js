export const fetchUsers = async () => {
    const res = await fetch('http://localhost:3002/all-users', {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' }, 
    });
    if (!res.ok) throw new Error(`Failed to fetch users: HTTP ${res.status}`);
    return await res.json();
}