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
      }, 1000);

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Create Account
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Join the hospital system
            </p>
          </div>
          {message && (
            <div className="mb-4 p-3 text-sm rounded-lg bg-gray-100 text-gray-700">
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Username"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="phone"
              placeholder="07XXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
            />

            <div>
              <label className="text-sm font-medium text-gray-700">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>

          </form>
          <div className="text-center mt-5">
            <p className="text-sm text-gray-500">
              Already have an account?
            </p>

            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm mt-1"
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