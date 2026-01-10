import { useState } from "react";

const tasks = [
    { id: 1, title: "Design Homepage Mockup", status: "in-progress", priority: "high", dueDate: "Jan 12", assignee: "Sarah", color: "blue" },
    { id: 2, title: "API Integration", status: "todo", priority: "medium", dueDate: "Jan 15", assignee: "John", color: "purple" },
    { id: 3, title: "Write Documentation", status: "todo", priority: "low", dueDate: "Jan 18", assignee: "Mike", color: "green" },
    { id: 4, title: "Bug Fixes - Login Page", status: "in-progress", priority: "high", dueDate: "Jan 11", assignee: "Emma", color: "red" },
    { id: 5, title: "Database Optimization", status: "done", priority: "medium", dueDate: "Jan 10", assignee: "Alex", color: "indigo" },
    { id: 6, title: "User Testing", status: "todo", priority: "low", dueDate: "Jan 20", assignee: "Sarah", color: "pink" },
];

// SVG Icons
const PlusIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);

const SearchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const FilterIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export default function Tasks() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filterStatus === "all" || task.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const todoTasks = filteredTasks.filter(t => t.status === "todo");
    const inProgressTasks = filteredTasks.filter(t => t.status === "in-progress");
    const doneTasks = filteredTasks.filter(t => t.status === "done");

    const priorityColors = {
        high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    };

    const TaskCard = ({ task }) => (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 dark:border-slate-700 group">
            <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base flex-1">
                    {task.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${priorityColors[task.priority]}`}>
                    {task.priority}
                </span>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <ClockIcon />
                    <span>{task.dueDate}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <UserIcon />
                    <span>{task.assignee}</span>
                </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                <div className={`w-full h-1 rounded-full bg-gradient-to-r from-${task.color}-400 to-${task.color}-600`}></div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Tasks Dashboard
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
                            Manage and track your team's tasks
                        </p>
                    </div>

                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-2 justify-center font-medium text-sm sm:text-base">
                        <PlusIcon />
                        <span>New Task</span>
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">Total Tasks</p>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{tasks.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">In Progress</p>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{inProgressTasks.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                                <ClockIcon />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">Completed</p>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{doneTasks.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                                <CheckIcon />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">To Do</p>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{todoTasks.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                                <div className="w-4 h-4 border-2 border-orange-600 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="flex-1 relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-slate-200"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                        <button
                            onClick={() => setFilterStatus("all")}
                            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${filterStatus === "all"
                                ? "bg-blue-600 text-white"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilterStatus("todo")}
                            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${filterStatus === "todo"
                                ? "bg-blue-600 text-white"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                                }`}
                        >
                            To Do
                        </button>
                        <button
                            onClick={() => setFilterStatus("in-progress")}
                            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${filterStatus === "in-progress"
                                ? "bg-blue-600 text-white"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                                }`}
                        >
                            In Progress
                        </button>
                        <button
                            onClick={() => setFilterStatus("done")}
                            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${filterStatus === "done"
                                ? "bg-blue-600 text-white"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                                }`}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* To Do Column */}
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 sm:p-6 backdrop-blur">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            To Do
                            <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">{todoTasks.length}</span>
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {todoTasks.map(task => <TaskCard key={task.id} task={task} />)}
                    </div>
                </div>

                {/* In Progress Column */}
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 sm:p-6 backdrop-blur">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            In Progress
                            <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">{inProgressTasks.length}</span>
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {inProgressTasks.map(task => <TaskCard key={task.id} task={task} />)}
                    </div>
                </div>

                {/* Done Column */}
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 sm:p-6 backdrop-blur">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Done
                            <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">{doneTasks.length}</span>
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {doneTasks.map(task => <TaskCard key={task.id} task={task} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}