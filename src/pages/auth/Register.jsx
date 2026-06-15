import { useState } from "react";
import api from "../../api/axios";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "patient",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await api.post("auth/register/", formData);

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1200);

      setFormData({
        username: "",
        email: "",
        password: "",
        role: "patient",
        phone: "",
      });

    } catch (err) {
      console.error(err);
      setMessage(
        err.response?.data
          ? JSON.stringify(err.response.data)
          : "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">

      {/* BACKGROUND (LANDING THEME) */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-50 via-blue-50 to-green-50"></div>
      <div className="absolute w-96 h-96 bg-teal-300/30 blur-3xl rounded-full"></div>
      <div className="absolute w-80 h-80 bg-blue-300/30 blur-3xl rounded-full translate-x-10"></div>

      {/* CARD */}
      <div className="relative w-full max-w-md">

        <div className="bg-white/70 backdrop-blur border border-teal-100 shadow-2xl rounded-3xl p-8">

          {/* HEADER */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-teal-700">
              Create Account
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Join the MediCare hospital system
            </p>
          </div>

          {/* MESSAGE */}
          {message && (
            <div className="mb-4 p-3 text-sm rounded-xl bg-teal-50 text-teal-700 border border-teal-100">
              {message}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <Input
              label="Username"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
            />

            <Input
              label="Phone Number"
              name="phone"
              placeholder="07XXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
            />

            {/* ROLE */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-2xl shadow-lg transition"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>

          </form>

          {/* LOGIN LINK */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Already have an account?
            </p>

            <button
              onClick={() => navigate("/login")}
              className="text-teal-600 hover:text-teal-700 font-semibold text-sm mt-1"
            >
              Sign in
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Register;