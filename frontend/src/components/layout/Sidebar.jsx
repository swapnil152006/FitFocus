import {
  FiHome,
  FiCheckSquare,
  FiActivity,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: FiHome, path: "/dashboard" },
  { name: "Tasks", icon: FiCheckSquare, path: "/tasks" },
  { name: "Fitness", icon: FiActivity, path: "/fitness" },
  { name: "Analytics", icon: FiBarChart2, path: "/analytics" },
  { name: "Settings", icon: FiSettings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold text-blue-400 mb-10">
        FitFocus
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}