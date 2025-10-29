import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// States
import { useAuthState } from '../../states/authState';

function Login() {
    const {login, loading, error} = useAuthState();
    const [form, setForm] = useState({ username: '', password: '' });
    const nav = useNavigate();
    
    const submit = async (e) => {
        e.preventDefault();
        try {
            if (!form.username || !form.password) throw new Error("Please fill in all fields.");
            console.log("Logging in user:", form);
            await login(form);
            nav('/');
        } catch (err) {
            console.error("Login failed:", err);
        }
    }

    return (
        <form onSubmit={submit} className="text-center">
            <ul className="list-unstyled">
                <li className="m-2">
                    <input value={form.username} placeholder='Username' onChange={e => setForm({...form, username: e.target.value})} />
                </li>
                <li className="m-2">
                    <input type="password"  placeholder='Password' value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
                </li>
                <li className="m-2">
                    <button type="submit" className="btn btn-secondary" disabled={loading}>Login</button>
                </li>
            </ul>
            {error && <div>Error: {error}</div>}
        </form>
    );
}

export default Login;