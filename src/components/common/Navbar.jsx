import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold">Hospital System</h1>

      <div className="flex gap-4 items-center">
        <span>{user?.email}</span>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;