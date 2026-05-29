import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back, {user?.username || "Patient"}
          </h1>
          <p className="text-gray-500">
            Here is your health overview
          </p>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Upcoming Appointments</h2>
          <p className="text-2xl font-bold text-blue-600">2</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Pending Bills</h2>
          <p className="text-2xl font-bold text-red-500">KSh 1,200</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Medical Records</h2>
          <p className="text-2xl font-bold text-green-600">5</p>
        </div>

      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button
            onClick={() => navigate("/patient/book")}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Book Appointment
          </button>

          <button
            onClick={() => navigate("/patient/appointments")}
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
          >
            My Appointments
          </button>

          <button
            onClick={() => navigate("/patient/bills")}
            className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
          >
            View Bills
          </button>

          <button
            onClick={() => navigate("/patient/history")}
            className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600"
          >
            Medical History
          </button>

        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>✔ Appointment booked with Dr. Smith</li>
          <li>✔ Lab results uploaded</li>
          <li>✔ Payment of KSh 1,200 completed</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;