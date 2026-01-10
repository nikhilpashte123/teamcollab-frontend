import { NavLink } from "react-router-dom";
import { useState } from "react";

const menu = [
    { name: "Dashboard", path: "/", icon: "dashboard" },
    { name: "Teams", path: "/teams", icon: "teams" },
    { name: "Messages", path: "/messages", icon: "messages" },
    { name: "Tasks", path: "/tasks", icon: "tasks" },
    { name: "Settings", path: "/settings", icon: "settings" },
];

// SVG Icons
const DashboardIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const TeamsIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const MessagesIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const TasksIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const SettingsIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const BellIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'dashboard': return <DashboardIcon />;
            case 'teams': return <TeamsIcon />;
            case 'messages': return <MessagesIcon />;
            case 'tasks': return <TasksIcon />;
            case 'settings': return <SettingsIcon />;
            default: return <DashboardIcon />;
        }
    };

    return (
        <>
            {/* Mobile Hamburger */}
            <button
                onClick={() => setOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
                <MenuIcon />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed z-50 lg:z-auto top-0 left-0 w-72 min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white transform transition-transform duration-300 shadow-2xl
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >
                {/* Logo Section */}
                <div className="h-20 flex items-center justify-between px-6 border-b border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">TC</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                TeamCollab
                            </h1>
                            <p className="text-xs text-slate-400">Workspace</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setOpen(false)}
                        className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* User Profile Card */}
                <div className="mx-4 mt-6 mb-4 p-4 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                            JD
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-white truncate">John Doe</h3>
                            <p className="text-xs text-slate-400 truncate">john@teamcollab.com</p>
                        </div>
                        <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors relative">
                            <BellIcon />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                    </div>
                </div>

                {/* Menu */}
                <nav className="mt-2 px-4 space-y-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-3">
                        Main Menu
                    </p>
                    {menu.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative overflow-hidden
                ${isActive
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span className={`transition-transform group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}>
                                        {getIcon(item.icon)}
                                    </span>
                                    <span className="font-medium">{item.name}</span>
                                    {isActive && (
                                        <span className="ml-auto w-2 h-2 bg-white rounded-full"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50">
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/30">
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm">✨</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-white mb-1">Upgrade to Pro</h3>
                                <p className="text-xs text-slate-400">Get unlimited access to all features</p>
                            </div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium py-2 rounded-lg hover:shadow-lg transition-all">
                            Upgrade Now
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}