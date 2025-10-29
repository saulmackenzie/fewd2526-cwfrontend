import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// States
import { useAuthState } from '../../states/authState';

// CSS
import styles from '../css/AuthForm.module.css';

function Register() {
    const { register, login, loading, error } = useAuthState();
    const [form, setForm] = useState({ username: '', password: '' });
    const nav = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            if (!form.username || !form.password) throw new Error("Please fill in all fields.");
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
        <form onSubmit={submit} className="text-center">
            <ul className="list-unstyled">
                <li className="m-2">
                    <input value={form.username} placeholder='Username' onChange={e => setForm({...form, username: e.target.value})} />
                </li>
                <li className="m-2">
                    <input type="password" placeholder='Password' value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
                </li>
                <li className="m-2">
                    <button type="submit" className="btn btn-secondary" disabled={loading}>Register</button>
                </li>
            </ul>
            {error && <div>Error: {error}</div>}
        </form>
    );
}

export default Register;
