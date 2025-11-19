export const login = async (credentials) => {
    const res = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
            role: credentials.role,
            familyId: credentials.familyId,
        }),
    });
    if (!res.ok) throw new Error(`Failed to login: HTTP ${res.status}`);
    return await res.json();
}