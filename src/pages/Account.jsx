import React, { useState } from "react";

// Auth forms
import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import Register from "../components/auth/Register";

function Account() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    return (
        <div className="container mt-4 py-4">
            {isAuthenticated ? (
                <Logout />
            ) : (
                <Login />
            )}
        </div>
    );
}

export default Account;