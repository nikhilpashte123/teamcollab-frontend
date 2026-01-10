import { useState } from "react";

const chats = [
    { id: 1, name: "Design Team", last: "New UI updates shared", online: true, avatar: "DT", time: "2m ago" },
    { id: 2, name: "Backend Team", last: "API deployed", online: false, avatar: "BT", time: "1h ago" },
    { id: 3, name: "John Doe", last: "Let's connect", online: true, avatar: "JD", time: "5m ago" },
    { id: 4, name: "Marketing", last: "Campaign launch tomorrow", online: true, avatar: "MK", time: "10m ago" },
    { id: 5, name: "Sarah Wilson", last: "Thanks for the help!", online: false, avatar: "SW", time: "3h ago" },
];

const messages = [
    { id: 1, text: "Hey! How's the project going?", sent: false, time: "10:30 AM" },
    { id: 2, text: "Going great! UI almost done 🚀", sent: true, time: "10:32 AM" },
    { id: 3, text: "That's awesome! Can't wait to see it", sent: false, time: "10:33 AM" },
    { id: 4, text: "I'll share a preview soon", sent: true, time: "10:35 AM" },
];

// SVG Icons as components
const SearchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const VideoIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const MoreIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
);

const PaperclipIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
);

const SmileIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const SendIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const BackIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

export default function Messages() {
    const [activeChat, setActiveChat] = useState(chats[0]);
    const [messageInput, setMessageInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [showChatList, setShowChatList] = useState(true);

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleChatSelect = (chat) => {
        setActiveChat(chat);
        setShowChatList(false);
    };

    return (
        <div className="flex h-[calc(100vh-3rem)] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
            {/* LEFT SIDEBAR: Chat List */}
            <div className={`${showChatList ? 'flex' : 'hidden'} md:flex w-full md:w-80 lg:w-96 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex-col`}>
                {/* Header */}
                <div className="p-5 border-b border-slate-200 dark:border-slate-700">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Messages
                    </h1>

                    {/* Search Bar */}
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-slate-200"
                        />
                    </div>
                </div>

                {/* Chat List */}
                <div className="flex-1 overflow-y-auto">
                    {filteredChats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => handleChatSelect(chat)}
                            className={`p-4 cursor-pointer transition-all duration-200 border-l-4 ${activeChat.id === chat.id
                                ? "bg-blue-50 dark:bg-slate-800 border-blue-600"
                                : "border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                                        {chat.avatar}
                                    </div>
                                    {chat.online && (
                                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                                    )}
                                </div>

                                {/* Chat Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                                            {chat.name}
                                        </h3>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                                            {chat.time}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                                        {chat.last}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT: Chat Window */}
            <div className={`${showChatList ? 'hidden' : 'flex'} md:flex flex-1 flex-col bg-white dark:bg-slate-900`}>
                {/* Chat Header */}
                <div className="h-16 px-4 md:px-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                        {/* Back Button - Mobile Only */}
                        <button
                            onClick={() => setShowChatList(true)}
                            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-slate-600 dark:text-slate-400"
                        >
                            <BackIcon />
                        </button>

                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                                {activeChat.avatar}
                            </div>
                            {activeChat.online && (
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                            )}
                        </div>
                        <div>
                            <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                                {activeChat.name}
                            </h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                {activeChat.online ? "Active now" : "Offline"}
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 md:gap-3">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-slate-600 dark:text-slate-400">
                            <PhoneIcon />
                        </button>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-slate-600 dark:text-slate-400">
                            <VideoIcon />
                        </button>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-slate-600 dark:text-slate-400">
                            <MoreIcon />
                        </button>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50 dark:bg-slate-900/50">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sent ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[85%] sm:max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2.5 rounded-2xl ${message.sent
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm"
                                    : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-sm shadow-sm"
                                    }`}
                            >
                                <p className="text-sm leading-relaxed break-words">{message.text}</p>
                                <p
                                    className={`text-xs mt-1 ${message.sent ? "text-blue-100" : "text-slate-500 dark:text-slate-400"
                                        }`}
                                >
                                    {message.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-3 md:p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-2 md:gap-3">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-slate-600 dark:text-slate-400 hidden sm:block">
                            <PaperclipIcon />
                        </button>

                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                placeholder="Type a message..."
                                className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-slate-200"
                                onKeyPress={(e) => {
                                    if (e.key === "Enter" && messageInput.trim()) {
                                        setMessageInput("");
                                    }
                                }}
                            />
                        </div>

                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition text-slate-600 dark:text-slate-400 hidden sm:block">
                            <SmileIcon />
                        </button>

                        <button
                            onClick={() => {
                                if (messageInput.trim()) {
                                    setMessageInput("");
                                }
                            }}
                            className="p-2.5 md:p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}