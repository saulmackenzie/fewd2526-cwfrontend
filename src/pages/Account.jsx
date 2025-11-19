import React from "react";

// Auth forms
import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import Register from "../components/auth/Register";

// States
import { useAuthState } from "../states/authState";

function Account() {
    const { isAuthenticated } = useAuthState();
    
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="container py-4 border rounded bg-light mb-5">
                {isAuthenticated ? (
                    <div className="text-center">
                        <h5>Do you wish to log out?</h5>
                        <Logout />
                    </div>
                ) : (
                    <div className="row justify-content-center">
                        <div className="col-6 text-center">
                            <h5>Have an account with us?</h5>
                            <Login />
                        </div>
                        <div className="col-6 text-center">
                            <h5>Don't have an account with us?</h5>
                            <Register />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Account;