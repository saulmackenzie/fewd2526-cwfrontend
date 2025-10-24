import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from '../../states/authState';

function Login() {
    const {login, loading, error} = useAuthState();
    const [form, setForm] = useState({ username: '', password: '' });
    const nav = useNavigate();
    
    const submit = async (e) => {
        e.preventDefault();
        try {
            await login(form);
            nav('/');
        } catch (err) {
            console.error("Login failed:", err);
        }
    }

    return (
        <form onSubmit={submit}>
            <input value={form.username} placeholder='Username' onChange={e => setForm({...form, username: e.target.value})} />
            <input type="password"  placeholder='Password' value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
            <button type="submit" disabled={loading}>Login</button>
            {error && <div>Error: {error}</div>}
        </form>
    );
}

export default Login;