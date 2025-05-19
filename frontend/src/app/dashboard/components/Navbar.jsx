"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();

    const menuItems = [
        "Loomboard", "Notes", "Tasks", "Journals", 
        "Mindspace", "Pomodoro", "Harmonia", "Calendar", "Mindbot"
    ];

    const isActive = (path) => {
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    return (
        <aside className={`bg-cyan-100 ${isOpen ? "w-64" : "w-20"} transition-all duration-300 flex flex-col`} aria-label="Sidebar navigation">
            {/* Toggle button */}
            <header className="p-4 flex items-center justify-between cursor-pointer">
                {isOpen && <h1 href="/dashboard"><a className="text-xl font-bold text-gray-800 transition-opacity duration-300">Mindloom</a></h1>}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md hover:bg-cyan-200 transition-transform duration-300 ease-in-out transform hover:cursor-pointer"
                    aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
                    aria-expanded={isOpen}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-90"}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={isOpen ? "M4 6h16M4 12h8M4 18h16" : "M4 6h16M4 12h16M4 18h16"} 
                        />
                    </svg>
                </button>
            </header>

            {/* Navigation items */}
            <nav className="flex-grow px-4 py-2" aria-label="Main navigation">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => {
                        const route = `/dashboard/${item.toLowerCase()}`;
                        const active = isActive(route);
                        
                        return (
                            <li key={index}>
                                <a 
                                    href={route}
                                    className={`flex items-center p-2 rounded-md ${
                                        active 
                                            ? "bg-cyan-200 text-cyan-800" 
                                            : "text-gray-700 hover:bg-cyan-200"
                                    }`}
                                    aria-label={item}
                                    aria-current={active ? "page" : undefined}
                                >
                                    <span className={isOpen ? "block" : "hidden"}>{item}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            
            {/* Settings at bottom */}
            <footer className="p-4 mt-auto border-t border-cyan-200">
                <a 
                    href="/dashboard/settings"
                    className={`flex items-center p-2 rounded-md ${
                        isActive("/dashboard/settings") 
                            ? "bg-cyan-200 text-cyan-800" 
                            : "text-gray-700 hover:bg-cyan-200"
                    }`}
                    aria-label="Settings"
                    aria-current={isActive("/dashboard/settings") ? "page" : undefined}
                >
                    <span className={isOpen ? "block" : "hidden"}>Settings</span>
                </a>
            </footer>
        </aside>
    )
}
