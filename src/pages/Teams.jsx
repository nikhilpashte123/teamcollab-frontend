import { useState } from "react";

const teams = [
    {
        id: 1,
        name: "Design Team",
        description: "Creating beautiful user experiences",
        members: 8,
        projects: 12,
        color: "blue",
        avatar: "DT",
        lead: "Sarah Wilson",
        status: "active"
    },
    {
        id: 2,
        name: "Backend Team",
        description: "Building robust server infrastructure",
        members: 6,
        projects: 8,
        color: "purple",
        avatar: "BT",
        lead: "John Doe",
        status: "active"
    },
    {
        id: 3,
        name: "Marketing",
        description: "Growing our brand and reach",
        members: 5,
        projects: 15,
        color: "pink",
        avatar: "MK",
        lead: "Emma Stone",
        status: "active"
    },
    {
        id: 4,
        name: "Frontend Team",
        description: "Crafting interactive web experiences",
        members: 7,
        projects: 10,
        color: "green",
        avatar: "FT",
        lead: "Mike Chen",
        status: "active"
    },
    {
        id: 5,
        name: "DevOps",
        description: "Maintaining infrastructure and deployments",
        members: 4,
        projects: 6,
        color: "orange",
        avatar: "DO",
        lead: "Alex Kumar",
        status: "active"
    },
    {
        id: 6,
        name: "Data Science",
        description: "Analyzing data and building ML models",
        members: 5,
        projects: 7,
        color: "indigo",
        avatar: "DS",
        lead: "Lisa Park",
        status: "active"
    }
];

const teamMembers = [
    { id: 1, name: "Sarah Wilson", role: "Design Lead", avatar: "SW", online: true },
    { id: 2, name: "John Doe", role: "Backend Lead", avatar: "JD", online: true },
    { id: 3, name: "Emma Stone", role: "Marketing Lead", avatar: "ES", online: false },
    { id: 4, name: "Mike Chen", role: "Frontend Dev", avatar: "MC", online: true },
    { id: 5, name: "Alex Kumar", role: "DevOps Engineer", avatar: "AK", online: true },
    { id: 6, name: "Lisa Park", role: "Data Scientist", avatar: "LP", online: false },
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

const UsersIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const FolderIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
);

const MoreIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export default function Teams() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTeam, setSelectedTeam] = useState(null);

    const filteredTeams = teams.filter(team =>
        team.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Teams
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
                            Collaborate with your teams and manage projects
                        </p>
                    </div>

                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-2 justify-center font-medium text-sm sm:text-base">
                        <PlusIcon />
                        <span>Create Team</span>
                    </button>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">Total Teams</p>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{teams.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                <UsersIcon />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">Team Members</p>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                                    {teams.reduce((acc, team) => acc + team.members, 0)}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">Active Projects</p>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                                    {teams.reduce((acc, team) => acc + team.projects, 0)}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                                <FolderIcon />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                        <SearchIcon />
                    </div>
                    <input
                        type="text"
                        placeholder="Search teams..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-slate-200"
                    />
                </div>
            </div>

            {/* Teams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {filteredTeams.map(team => (
                    <div
                        key={team.id}
                        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 group cursor-pointer"
                        onClick={() => setSelectedTeam(team)}
                    >
                        {/* Team Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${team.color}-400 to-${team.color}-600 flex items-center justify-center text-white font-semibold shadow-lg`}>
                                    {team.avatar}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {team.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Led by {team.lead}
                                    </p>
                                </div>
                            </div>
                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-600 dark:text-slate-400">
                                <MoreIcon />
                            </button>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                            {team.description}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                                    <UsersIcon />
                                    <span className="font-medium">{team.members}</span>
                                </div>
                                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                                    <FolderIcon />
                                    <span className="font-medium">{team.projects}</span>
                                </div>
                            </div>

                            <button className="text-blue-600 dark:text-blue-400 hover:gap-2 flex items-center gap-1 transition-all text-sm font-medium">
                                <span>View</span>
                                <ArrowRightIcon />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4">
                            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 mb-2">
                                <span>Team Progress</span>
                                <span className="font-medium">{Math.floor(Math.random() * 40 + 60)}%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r from-${team.color}-400 to-${team.color}-600 rounded-full transition-all`}
                                    style={{ width: `${Math.floor(Math.random() * 40 + 60)}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Team Members Section */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        Team Members
                    </h2>
                    <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.map(member => (
                        <div
                            key={member.id}
                            className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border border-slate-100 dark:border-slate-700"
                        >
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                                    {member.avatar}
                                </div>
                                {member.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm truncate">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}