
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/auth/login/", {
        email,
        password,
      });

      const { access, user } = res.data;

      // save token
      localStorage.setItem("token", access);

      // save user (optional but useful)
      localStorage.setItem("user", JSON.stringify(user));

      // ROLE-BASED REDIRECT (FIXED)
      if (user.role === "admin") {
        navigate("/admin");
      } else if (user.role === "doctor") {
        navigate("/doctor");
      } else {
        navigate("/patient");
      }

    } catch (err) {
      console.log(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl top-10 left-10 opacity-50"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-200 rounded-full blur-3xl bottom-10 right-10 opacity-40"></div>

      {/* CARD */}
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-3xl p-8">

        <h2 className="text-3xl font-black text-blue-600 text-center">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Login to Medicore
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer font-semibold"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;