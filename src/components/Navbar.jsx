import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      
      {/* Brand */}
      <h1 className="text-xl font-bold text-blue-600">
        Medicore
      </h1>

      {/* Right side */}
      <div className="flex items-center gap-4">

        {user && (
          <span className="text-sm text-gray-600">
            Welcome, <span className="font-medium">{user.username}</span>
          </span>
        )}

        {user && (
          <button
            onClick={logout}
            className="px-4 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
          >
            Logout
          </button>
        )}

      </div>
    </div>
  );
}

export default Navbar;