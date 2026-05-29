import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden">
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 border-b border-blue-100">
        <h1 className="text-2xl md:text-3xl font-black text-blue-700">
          MediCare
        </h1>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-md"
        >
          Login
        </Link>
      </nav>
      <div className="flex-1 grid lg:grid-cols-2 items-center gap-10 px-6 md:px-16 py-10 md:py-16">
        <div className="text-center lg:text-left space-y-6">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            Smart Hospital System
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900">
            Modern <span className="text-blue-600">Hospital</span> <br />
            Management System
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            Manage patients, doctors, appointments, billing and reports in one
            simple, secure and powerful platform built for modern hospitals.
          </p>

          <Link
            to="/login"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-blue-600 rounded-[40px] rotate-6 shadow-2xl"></div>
          <div className="absolute bg-white w-80 sm:w-96 rounded-3xl p-6 shadow-2xl border border-blue-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Dashboard Preview
              </h2>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                Live
              </span>
            </div>

            <div className="space-y-4">

              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <h3 className="font-semibold text-gray-800">
                  Patient Records
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Securely store and manage patient data.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border shadow-sm">
                <h3 className="font-semibold text-gray-800">
                  Appointments
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Schedule and manage doctor visits easily.
                </p>
              </div>

              <div className="bg-blue-600 text-white p-4 rounded-2xl">
                <h3 className="font-semibold">
                  Billing System
                </h3>
                <p className="text-sm text-blue-100 mt-1">
                  Fast and automated hospital billing.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;