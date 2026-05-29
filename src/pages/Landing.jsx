// src/pages/Landing.jsx

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
      <h1 className="text-5xl font-bold mb-4">
        Hospital Management System
      </h1>

      <p className="mb-6 text-lg">
        Manage doctors, patients, appointments and billing
      </p>

      <Link
        to="/login"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Landing;