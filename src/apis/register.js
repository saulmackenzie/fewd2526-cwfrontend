export const register = async (userData) => {
    const res = await fetch('https://fewd2526-cwbackend.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: userData.username,
            password: userData.password,
        }),
    });
    if (!res.ok) throw new Error(`Failed to register user: HTTP ${res.status}`);
    return await res.json();
}