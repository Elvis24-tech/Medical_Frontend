import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-blue-50 to-green-50 flex flex-col overflow-hidden">
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 border-b border-teal-100 bg-white/60 backdrop-blur">
        <h1 className="text-2xl md:text-3xl font-black text-teal-700 tracking-wide">
          MediCare
        </h1>

        <Link
          to="/login"
          className="bg-teal-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition shadow-md"
        >
          Login
        </Link>
      </nav>
      <div className="flex-1 grid lg:grid-cols-2 items-center gap-10 px-6 md:px-16 py-12 md:py-20">
        <div className="text-center lg:text-left space-y-7">
          <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full font-semibold text-sm shadow-sm">
            💚 Caring • Smart • Secure
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900">
            Healthcare Made <br />
            <span className="text-teal-600">Simple & Human</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A modern hospital system designed to bring doctors, patients, and
            care together in one calm, efficient, and intelligent platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <Link
              to="/login"
              className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-teal-700 transition"
            >
              Get Started
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Trusted for safe patient care and modern hospital workflows
          </p>

        </div>
        <div className="relative flex justify-center items-center">

          <div className="absolute w-80 h-80 bg-teal-300/30 blur-3xl rounded-full"></div>
          <div className="absolute w-72 h-72 bg-blue-300/30 blur-3xl rounded-full translate-x-10"></div>
          <div className="relative w-80 sm:w-105 bg-white rounded-3xl p-6 shadow-2xl border border-teal-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Care Dashboard
              </h2>

              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold">
                Live System
              </span>
            </div>

            <div className="space-y-4">

              <div className="bg-teal-50 p-4 rounded-2xl border border-teal-100 hover:shadow-sm transition">
                <h3 className="font-semibold text-gray-800">
                  Patient Records
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Secure, organized, and always accessible.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow transition">
                <h3 className="font-semibold text-gray-800">
                  Appointments
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Smooth scheduling between doctors and patients.
                </p>
              </div>

              <div className="bg-linear-to-r from-teal-600 to-blue-600 text-white p-4 rounded-2xl shadow-md">
                <h3 className="font-semibold">
                  Billing System
                </h3>
                <p className="text-sm text-teal-100 mt-1">
                  Fast, automated, and reliable payments.
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