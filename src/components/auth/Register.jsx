import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../../states/authState';

function Register() {
    const { register, login, loading, error } = useAuthState();
    const [form, setForm] = useState({ username: '', password: '' });
    const nav = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            console.log("Registering user:", form);
            await register(form);
        } catch (err) {
            console.error("Registration failed:", err);
        } finally {
            // Automatically log in after registration
            console.log("Logging in user after registration");
            await login(form);
            nav('/');
        }
    }
    
    return (
        <form onSubmit={submit}>
            <input value={form.username} placeholder='Username' onChange={e => setForm({...form, username: e.target.value})} />
            <input type="password" placeholder='Password' value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
            <button type="submit" disabled={loading}>Register</button>
            {error && <div>Error: {error}</div>}
        </form>
    );
}

export default Register;
