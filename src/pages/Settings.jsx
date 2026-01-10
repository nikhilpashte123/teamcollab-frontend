import { useState } from "react";

// SVG Icons
const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const ShieldIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const BellIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

const PaletteIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
);

const GlobeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CameraIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const SaveIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export default function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    const [formData, setFormData] = useState({
        fullName: 'John Doe',
        email: 'john@teamcollab.com',
        phone: '+1 (555) 123-4567',
        bio: 'Product Manager at TeamCollab',
        location: 'San Francisco, CA',
        timezone: 'PST (UTC-8)'
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Settings
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    Manage your account settings and preferences
                </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
                {/* Profile Settings */}
                <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                                <UserIcon />
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                                    Profile Information
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                    Update your personal details and public profile
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Avatar Upload */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                            <div className="relative">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    JD
                                </div>
                                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white dark:bg-slate-700 rounded-full shadow-lg border-2 border-white dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
                                    <CameraIcon />
                                </button>
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                    Profile Photo
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    JPG, PNG or GIF. Max size 2MB
                                </p>
                                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                    Upload new photo
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Bio
                                </label>
                                <textarea
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    rows="3"
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-2 font-medium">
                                <SaveIcon />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </section>

                {/* Security Settings */}
                <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                                <ShieldIcon />
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                                    Security
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                    Manage your password and security settings
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter current password"
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Confirm new password"
                                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end pt-2">
                                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                                    Update Password
                                </button>
                            </div>
                        </div>

                        {/* Two-Factor Authentication */}
                        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                        Two-Factor Authentication
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Add an extra layer of security to your account
                                    </p>
                                </div>
                                <button
                                    onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                                    className={`w-14 h-7 flex items-center rounded-full px-1 transition-all ${twoFactorAuth ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-slate-300 dark:bg-slate-600"
                                        }`}
                                >
                                    <div
                                        className={`w-5 h-5 bg-white rounded-full transform transition-transform ${twoFactorAuth ? "translate-x-7" : ""
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notifications */}
                <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                                <BellIcon />
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                                    Notifications
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                    Configure how you receive notifications
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                    Email Notifications
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Receive updates via email
                                </p>
                            </div>
                            <button
                                onClick={() => setEmailNotifications(!emailNotifications)}
                                className={`w-14 h-7 flex items-center rounded-full px-1 transition-all ${emailNotifications ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-slate-300 dark:bg-slate-600"
                                    }`}
                            >
                                <div
                                    className={`w-5 h-5 bg-white rounded-full transform transition-transform ${emailNotifications ? "translate-x-7" : ""
                                        }`}
                                />
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                    Push Notifications
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Receive push notifications on your devices
                                </p>
                            </div>
                            <button
                                onClick={() => setPushNotifications(!pushNotifications)}
                                className={`w-14 h-7 flex items-center rounded-full px-1 transition-all ${pushNotifications ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-slate-300 dark:bg-slate-600"
                                    }`}
                            >
                                <div
                                    className={`w-5 h-5 bg-white rounded-full transform transition-transform ${pushNotifications ? "translate-x-7" : ""
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Preferences */}
                <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white">
                                <PaletteIcon />
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                                    Appearance
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                    Customize how TeamCollab looks
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                    Dark Mode
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Switch between light and dark theme
                                </p>
                            </div>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`w-14 h-7 flex items-center rounded-full px-1 transition-all ${darkMode ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-slate-300 dark:bg-slate-600"
                                    }`}
                            >
                                <div
                                    className={`w-5 h-5 bg-white rounded-full transform transition-transform ${darkMode ? "translate-x-7" : ""
                                        }`}
                                />
                            </button>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Language
                            </label>
                            <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                                <option>English (US)</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Timezone
                            </label>
                            <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                                <option>PST (UTC-8)</option>
                                <option>EST (UTC-5)</option>
                                <option>GMT (UTC+0)</option>
                                <option>IST (UTC+5:30)</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Danger Zone */}
                <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border-2 border-red-200 dark:border-red-900/50 overflow-hidden">
                    <div className="p-6 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-900/50">
                        <h2 className="text-lg sm:text-xl font-bold text-red-900 dark:text-red-400">
                            Danger Zone
                        </h2>
                        <p className="text-xs sm:text-sm text-red-700 dark:text-red-400/80">
                            Irreversible actions for your account
                        </p>
                    </div>

                    <div className="p-6 space-y-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-slate-200 dark:border-slate-700 rounded-xl">
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                    Delete Account
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Permanently delete your account and all data
                                </p>
                            </div>
                            <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm whitespace-nowrap">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}