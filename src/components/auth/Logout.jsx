import React from "react";
import { useNavigate } from 'react-router-dom';

// States
import { useAuthState } from "../../states/authState";

// CSS
import styles from '../css/AuthForm.module.css';

function Logout() {
    const { logout, loading, error } = useAuthState();

    const submit = async (e) => {
        e.preventDefault();
        try {
            await logout();
        } catch (err) {
            console.error("Logout failed:", err);
        }
    }

    return (
        <form onSubmit={submit} className="text-center">
            <button type="submit" className="btn btn-secondary" disabled={loading}>Logout</button>
            {error && <div>Error: {error}</div>}
        </form>
    );
}

export default Logout;