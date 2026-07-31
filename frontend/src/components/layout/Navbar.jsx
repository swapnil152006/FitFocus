import { FiBell, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">
        <button className="text-slate-600 hover:text-blue-600">
          <FiBell size={22} />
        </button>

        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-500 hover:text-red-600"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </header>
  );
}