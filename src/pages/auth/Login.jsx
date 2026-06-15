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
      localStorage.setItem("user", JSON.stringify(user))
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
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-blue-50 to-green-50 flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute w-96 h-96 bg-teal-300/30 blur-3xl rounded-full"></div>
      <div className="absolute w-80 h-80 bg-blue-300/30 blur-3xl rounded-full translate-x-10"></div>
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-teal-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-teal-700">
              MediCare Login
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
                className="mt-1 w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
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
                className="mt-1 w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-2xl shadow-lg transition"
            >
              {loading ? "Signing in..." : "Get Started"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don’t have an account?
            </p>

            <button
              onClick={() => navigate("/register")}
              className="mt-2 text-teal-600 hover:text-teal-700 font-semibold"
            >
              Create Account
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-5">
          Trusted for safe patient care and modern hospital workflows
        </p>

      </div>
    </div>
  );
};

export default Login;