import { Navbar } from "./components/Navbar";

export const metadata = {
    title: "Mindloom - AI Powered Productivity Tool",
    description: "Welcome to Mindloom. Your ultimate AI powered productivity tool for organizing thoughts, ideas, notes and journals in one seamless platform.",
};

export default function DashboardLayout({ children }) {
    

    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <Navbar/>
            
            {/* Main content */}
            <main className="flex-grow" id="main-content">
                {children}
            </main>
        </div>
    );
}
