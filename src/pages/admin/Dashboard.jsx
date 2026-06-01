import { useEffect, useState } from "react";
import api from "../../api/axios";
import DashboardCard from "../../components/common/DashboardCard";

const Dashboard = () => {
  const [stats, setStats] = useState({
    doctors: 0,
    patients: 0,
    appointments: 0,
    revenue: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [d, p, a, b] = await Promise.all([
          api.get("doctors/"),
          api.get("patients/"),
          api.get("appointments/"),
          api.get("billing/")
        ]);

        setStats({
          doctors: d.data.length || d.data.count || 0,
          patients: p.data.length || p.data.count || 0,
          appointments: a.data.length || a.data.count || 0,
          revenue: b.data.reduce((sum, bill) => sum + Number(bill.amount || 0), 0)
        });

      } catch (err) {
        console.error("Dashboard error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <DashboardCard title="Doctors" value={stats.doctors} />
        <DashboardCard title="Patients" value={stats.patients} />
        <DashboardCard title="Appointments" value={stats.appointments} />
        <DashboardCard title="Revenue" value={`$${stats.revenue}`} />
      </div>
    </div>
  );
};

export default Dashboard;