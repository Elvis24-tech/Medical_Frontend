import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "patient",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/auth/register/", form);
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">

      {/* glow */}
      <div className="absolute w-[450px] h-[450px] bg-blue-200 blur-3xl rounded-full top-10 right-10 opacity-40"></div>

      {/* CARD */}
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-3xl p-8">

        <h2 className="text-3xl font-black text-blue-600 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3">

          <input
            name="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-xl border"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone"
            className="w-full px-4 py-3 rounded-xl border"
            onChange={handleChange}
          />

          <select
            name="role"
            className="w-full px-4 py-3 rounded-xl border"
            onChange={handleChange}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-semibold cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;