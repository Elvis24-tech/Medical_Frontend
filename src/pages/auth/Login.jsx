import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await login({
        email: formData.email,
        password: formData.password,
      });

      const user = res.user;
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "patient") navigate("/patient/dashboard");
      else if (user.role === "doctor") navigate("/doctor/dashboard");
      else if (user.role === "admin") navigate("/admin/dashboard");
      else navigate("/unauthorized");

    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl px-6 sm:px-8 py-8 sm:py-10">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Hospital Management System
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Sign in to continue securely
            </p>
          </div>
          {error && (
            <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>

          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?
            </p>

            <button
              onClick={() => navigate("/register")}
              className="mt-2 text-blue-600 hover:text-blue-800 font-semibold"
            >
              Create Account
            </button>
          </div>

        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          Secure access for authorized hospital staff only
        </p>

      </div>
    </div>
  );
};

export default Login;