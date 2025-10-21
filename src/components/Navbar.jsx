import { useState } from "react";
import useAuthState from "../states/authState";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const links = [
        {label: "Home" , href: "/"},
        {label: "View Events" , href: "/events"},
        {label: "My Account" , href: "/account"},
        {label: "About" , href: "/about"},
    ];
    
    return (
        <nav className="">
            <div className="">
                <div className="">
                    {/* Logo */}
                    <a href="/" className="">Family Event App</a>
                </div>
            </div>
        </nav>
    );
}