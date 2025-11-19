import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// States
import { useAuthState } from '../../states/authState';

// CSS
import styles from '../css/AuthForm.module.css';

function Register() {
    const { register, login, loading, error } = useAuthState();
    const [form, setForm] = useState({ username: '', password: '' });
    const [validForm, setValidForm] = useState(false);
    const nav = useNavigate();

    const checkValid = (next) => {
        const isValid = (next.username?.trim().length ?? 0) > 3 && (next.password?.trim().length ?? 0) > 3;
        setValidForm(isValid);
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            if (!validForm) throw new Error("Please fill in all fields.");
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
                    <input
                        value={form.username}
                        placeholder='Username'
                        onChange={e => {
                            const next = {...form, username: e.target.value};
                            setForm({...form, username: e.target.value})   
                            checkValid(next);
                        }} 
                    />
                </li>
                <li className="m-2">
                    <input 
                        type="password"
                        placeholder='Password'
                        value={form.password}
                        onChange={e => {
                            const next = {...form, password: e.target.value};
                            setForm({...form, password: e.target.value});
                            checkValid(next);
                        }}
                    />
                </li>
                <li className="m-2">
                    <button type="submit" className="btn btn-secondary" disabled={loading || !validForm}>Register</button>
                </li>
            </ul>
            {error && <div>Error: {error}</div>}
        </form>
    );
}

export default Register;
