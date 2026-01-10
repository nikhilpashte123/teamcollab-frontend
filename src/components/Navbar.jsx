import { useState } from "react";

// SVG Icons
const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const BellIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

const MailIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const SettingsIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const LogoutIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export default function Navbar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <nav className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
            {/* Left Section - Search */}
            <div className="flex items-center flex-1 max-w-2xl">
                <div className="relative w-full max-w-md">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                        <SearchIcon />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400"
                    />
                </div>
            </div>

            {/* Right Section - Actions & Profile */}
            <div className="flex items-center gap-3 sm:gap-4">
                {/* Notifications */}
                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors relative text-slate-600 dark:text-slate-400"
                    >
                        <BellIcon />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* Notifications Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Notifications</h3>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                                {[1, 2, 3].map((item) => (
                                    <div
                                        key={item}
                                        className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-0"
                                    >
                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                                                JD
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-slate-900 dark:text-slate-100">
                                                    <span className="font-semibold">John Doe</span> mentioned you in a comment
                                                </p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">2 minutes ago</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 border-t border-slate-200 dark:border-slate-700">
                                <button className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                    View all notifications
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Messages */}
                <button className="hidden sm:block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors relative text-slate-600 dark:text-slate-400">
                    <MailIcon />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                </button>

                {/* Divider */}
                <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-700"></div>

                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowProfile(!showProfile)}
                        className="flex items-center gap-2 sm:gap-3 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            JD
                        </div>
                        <div className="hidden sm:block text-left">
                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">John Doe</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Admin</p>
                        </div>
                        <ChevronDownIcon />
                    </button>

                    {/* Profile Dropdown Menu */}
                    {showProfile && (
                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <div className="p-3 border-b border-slate-200 dark:border-slate-700">
                                <p className="font-semibold text-slate-900 dark:text-slate-100">John Doe</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">john@teamcollab.com</p>
                            </div>

                            <div className="py-2">
                                <button className="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <UserIcon />
                                    <span>My Profile</span>
                                </button>
                                <button className="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <SettingsIcon />
                                    <span>Settings</span>
                                </button>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-700 py-2">
                                <button className="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-3 text-red-600 dark:text-red-400">
                                    <LogoutIcon />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}