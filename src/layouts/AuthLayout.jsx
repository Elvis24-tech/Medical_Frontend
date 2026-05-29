import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;