import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import DashboardCard from "../../components/common/DashboardCard";

const Dashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    doctors: 0,
    patients: 0,
    appointments: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [d, p, a, b] = await Promise.all([
          api.get("doctors/"),
          api.get("patients/"),
          api.get("appointments/"),
          api.get("billing/"),
        ]);

        const bills = Array.isArray(b.data) ? b.data : [];

        setStats({
          doctors: Array.isArray(d.data) ? d.data.length : d.data.count || 0,
          patients: Array.isArray(p.data) ? p.data.length : p.data.count || 0,
          appointments: Array.isArray(a.data)
            ? a.data.length
            : a.data.count || 0,
          revenue: bills.reduce(
            (sum, bill) => sum + Number(bill.amount || 0),
            0
          ),
        });
      } catch (err) {
        console.error("Dashboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Overview of hospital activity in real time
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-4 gap-6">
        <DashboardCard title="Doctors" value={stats.doctors} />
        <DashboardCard title="Patients" value={stats.patients} />
        <DashboardCard title="Appointments" value={stats.appointments} />
        <DashboardCard title="Revenue" value={`$${stats.revenue}`} />
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Quick Navigation
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          <button
            onClick={() => navigate("/admin/doctors")}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Manage Doctors
          </button>

          <button
            onClick={() => navigate("/admin/patients")}
            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            View Patients
          </button>

          <button
            onClick={() => navigate("/admin/appointments")}
            className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
          >
            Appointments
          </button>

          <button
            onClick={() => navigate("/admin/bills")}
            className="bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700"
          >
            Billing
          </button>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;