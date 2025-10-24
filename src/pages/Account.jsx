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
            <div className="container h-100 mt-4 py-4 border rounded bg-light">
                {isAuthenticated ? (
                    <Logout />
                ) : (
                    <>
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <h2>Login here</h2>
                                <Login />
                            </div>
                            <div className="col-6">
                                <h2>Don't have an account with us?</h2>
                                <Register />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Account;