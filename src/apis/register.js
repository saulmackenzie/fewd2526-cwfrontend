export const register = async (userData) => {
    const res = await fetch('http://localhost:3002/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: userData.username,
            password: userData.password,
            family: userData.family,
        }),
    });
    if (!res.ok) throw new Error(`Failed to register user: HTTP ${res.status}`);
    return await res.json();
}