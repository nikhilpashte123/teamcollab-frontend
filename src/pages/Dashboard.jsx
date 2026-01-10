import { useState } from "react";

const stats = [
    { id: 1, label: "Total Revenue", value: "$45,231", change: "+12.5%", trend: "up", icon: "dollar" },
    { id: 2, label: "Active Projects", value: "23", change: "+4.2%", trend: "up", icon: "folder" },
    { id: 3, label: "Team Members", value: "156", change: "+8.1%", trend: "up", icon: "users" },
    { id: 4, label: "Pending Tasks", value: "42", change: "-3.4%", trend: "down", icon: "clock" },
];

const recentProjects = [
    { id: 1, name: "Website Redesign", progress: 75, status: "on-track", team: "Design", dueDate: "Jan 15" },
    { id: 2, name: "Mobile App Development", progress: 45, status: "at-risk", team: "Frontend", dueDate: "Jan 20" },
    { id: 3, name: "API Integration", progress: 90, status: "on-track", team: "Backend", dueDate: "Jan 12" },
    { id: 4, name: "Marketing Campaign", progress: 60, status: "on-track", team: "Marketing", dueDate: "Jan 18" },
];

const recentActivity = [
    { id: 1, user: "Sarah Wilson", action: "completed task", target: "Homepage Design", time: "2 mins ago", avatar: "SW" },
    { id: 2, user: "John Doe", action: "commented on", target: "API Documentation", time: "15 mins ago", avatar: "JD" },
    { id: 3, user: "Emma Stone", action: "created new", target: "Marketing Strategy", time: "1 hour ago", avatar: "ES" },
    { id: 4, user: "Mike Chen", action: "updated", target: "Mobile App Wireframes", time: "2 hours ago", avatar: "MC" },
    { id: 5, user: "Alex Kumar", action: "deployed", target: "Production Server", time: "3 hours ago", avatar: "AK" },
];

const upcomingDeadlines = [
    { id: 1, task: "Submit Q1 Report", dueDate: "Today", priority: "high", team: "Management" },
    { id: 2, task: "Client Presentation", dueDate: "Tomorrow", priority: "high", team: "Design" },
    { id: 3, task: "Code Review Session", dueDate: "Jan 12", priority: "medium", team: "Backend" },
    { id: 4, task: "Team Meeting", dueDate: "Jan 13", priority: "low", team: "All Teams" },
];

// SVG Icons
const DollarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const FolderIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
);

const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TrendUpIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const TrendDownIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ChartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

export default function Dashboard() {
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'dollar': return <DollarIcon />;
            case 'folder': return <FolderIcon />;
            case 'users': return <UsersIcon />;
            case 'clock': return <ClockIcon />;
            default: return <FolderIcon />;
        }
    };

    const priorityColors = {
        high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    };

    const statusColors = {
        'on-track': 'bg-green-500',
        'at-risk': 'bg-yellow-500',
        'delayed': 'bg-red-500'
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Dashboard
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
                            Welcome back! Here's what's happening today.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 text-sm font-medium">
                            <CalendarIcon />
                        </button>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-200 font-medium text-sm sm:text-base">
                            New Project
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 dark:border-slate-700"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                {getIcon(stat.icon)}
                            </div>
                            <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.trend === 'up'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                }`}>
                                {stat.trend === 'up' ? <TrendUpIcon /> : <TrendDownIcon />}
                                {stat.change}
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">{stat.label}</p>
                        <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Chart Card */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                                Performance Overview
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                                Project completion rates over time
                            </p>
                        </div>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-600 dark:text-slate-400">
                            <ChartIcon />
                        </button>
                    </div>

                    {/* Simple Bar Chart Visualization */}
                    <div className="space-y-4">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
                            const height = Math.floor(Math.random() * 60 + 40);
                            return (
                                <div key={day} className="flex items-center gap-4">
                                    <span className="text-xs text-slate-600 dark:text-slate-400 w-8">{day}</span>
                                    <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-8 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 flex items-center justify-end pr-3"
                                            style={{ width: `${height}%` }}
                                        >
                                            <span className="text-xs text-white font-medium">{height}%</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Upcoming Deadlines */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                            Upcoming Deadlines
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {upcomingDeadlines.map((deadline) => (
                            <div
                                key={deadline.id}
                                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                                        {deadline.task}
                                    </h3>
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${priorityColors[deadline.priority]}`}>
                                        {deadline.priority}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-600 dark:text-slate-400">{deadline.team}</span>
                                    <span className="text-slate-500 dark:text-slate-400 font-medium">{deadline.dueDate}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Projects & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Recent Projects */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                            Recent Projects
                        </h2>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                            View All
                        </button>
                    </div>

                    <div className="space-y-4">
                        {recentProjects.map((project) => (
                            <div
                                key={project.id}
                                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-1">
                                            {project.name}
                                        </h3>
                                        <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                                            <span>{project.team}</span>
                                            <span>•</span>
                                            <span>Due {project.dueDate}</span>
                                        </div>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full ${statusColors[project.status]}`}></div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-600 dark:text-slate-400">Progress</span>
                                        <span className="font-medium text-slate-900 dark:text-slate-100">{project.progress}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                            Recent Activity
                        </h2>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                            View All
                        </button>
                    </div>

                    <div className="space-y-4">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                                    {activity.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-slate-900 dark:text-slate-100">
                                        <span className="font-semibold">{activity.user}</span>
                                        <span className="text-slate-600 dark:text-slate-400"> {activity.action} </span>
                                        <span className="font-medium">{activity.target}</span>
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}