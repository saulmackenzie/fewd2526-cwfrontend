import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="bg-dark ui-gradient text-white py-4">
            <div class="container text-center">
                <p>© 2025 NestPlan, Inc. All rights reserved.</p>
                <ul class="list-inline">
                    <li class="list-inline-item"><Link to="/" class="text-white">Home</Link></li>
                    <li class="list-inline-item"><Link to="/about" class="text-white">About</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;