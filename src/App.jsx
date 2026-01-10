import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";
import Teams from "./pages/Teams";
import Tasks from "./pages/Tasks";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-white dark:bg-black text-black dark:text-white min-h-screen">
        <Sidebar />
        <main className="w-full p-6 lg:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
