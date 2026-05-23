import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <div className="sticky top-0 bg-white border-b border-gray-100 z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">

          <h1 className="text-2xl font-black text-blue-600 tracking-tight">
            Medicore
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-sm"
            >
              Get Started
            </button>
          </div>

        </div>
      </div>

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div className="space-y-7">

          <div className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            Smart Hospital Platform
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Healthcare at your <span className="text-blue-600">fingertips</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Book appointments, manage patients, doctors, and hospital operations in a simple and modern system.
          </p>

          {/* SEARCH CTA (GLOVO STYLE CORE ELEMENT) */}
          <div className="flex items-center bg-gray-100 rounded-full p-2 shadow-sm max-w-lg">

            <input
              placeholder="Search doctor, patient, appointment..."
              className="flex-1 bg-transparent px-5 py-3 outline-none text-sm"
            />

            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Search
            </button>

          </div>

          {/* QUICK ACTIONS */}
          <div className="flex flex-wrap gap-3 pt-2">

            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-100 transition">
              Book Appointment
            </button>

            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-100 transition">
              Find Doctors
            </button>

            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-100 transition">
              View Records
            </button>

          </div>

        </div>

        {/* RIGHT (PURE MINIMAL VISUAL BLOCK) */}
        <div className="relative">

          {/* soft background blob */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl"></div>

          {/* clean info card */}
          <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-6">

            <h3 className="text-lg font-bold text-gray-900">
              Why Medicore?
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
                <p className="text-gray-600 text-sm">
                  Fast appointment booking system for patients and doctors
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
                <p className="text-gray-600 text-sm">
                  Centralized patient and medical record management
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
                <p className="text-gray-600 text-sm">
                  Secure and scalable hospital operations system
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FEATURES GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Quick Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="p-5 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <p className="font-semibold text-blue-600">Appointments</p>
            <p className="text-sm text-gray-500 mt-1">Book instantly</p>
          </div>

          <div className="p-5 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <p className="font-semibold text-blue-600">Doctors</p>
            <p className="text-sm text-gray-500 mt-1">Find specialists</p>
          </div>

          <div className="p-5 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <p className="font-semibold text-blue-600">Patients</p>
            <p className="text-sm text-gray-500 mt-1">Manage records</p>
          </div>

          <div className="p-5 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <p className="font-semibold text-blue-600">Emergency</p>
            <p className="text-sm text-red-500 mt-1">24/7 support</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Landing;