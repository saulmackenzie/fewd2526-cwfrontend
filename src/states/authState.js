import { useState } from "react";

export default function useAuthState() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    }

    return isAuthenticated ? { isAuthenticated, login } : { isAuthenticated, logout };
}