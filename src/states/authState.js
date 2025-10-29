import React, { createContext, useCallback, useContext, useState } from "react";
import { login as apiLogin } from "../apis/login";
import { register as apiRegister} from "../apis/register";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try { return JSON.parse(localStorage.getItem("user")); } catch { return null; }
    });
    const [token, setToken] = useState(() => localStorage.getItem("token") || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = useCallback(async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const data = await apiLogin(credentials);
            const u = {
                username: data.username ?? null,
                role: data.userrole ?? null,
                familyId: data.userfamily ?? null,
            };
            const t = data.token ?? null;
            setUser(u);
            setToken(t);
            console.log("Logged in user:", u, "\nwith token:", t);
            localStorage.setItem("user", JSON.stringify(u));
            if (t) {
                localStorage.setItem("token", t);
                if (data.expiresIn) localStorage.setItem("token_expires", String(data.expiresIn));
            } 
            return data;
        } catch (err) {
            setError(err.message || String(err));
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const register = useCallback(async (userData) => {
        setLoading(true);
        setError(null);
        console.log("Registering user with data:", userData);
        try {
            const data = await apiRegister(userData);
            return data;
        } catch (err) {
            setError(err.message || String(err));
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }, []);

    const isAuthenticated = Boolean(user || token);

    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated, loading, error, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthState() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuthState must be used within an AuthProvider");
    return ctx;
}