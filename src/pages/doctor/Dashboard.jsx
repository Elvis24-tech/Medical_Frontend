import { useEffect, useState } from "react";
import { getAppointments } from "../../api/appointments";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await getAppointments();
      const list =
        res?.results ||
        res?.data ||
        (Array.isArray(res) ? res : []);

      setAppointments(list);
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  const safeAppointments = Array.isArray(appointments)
    ? appointments
    : [];

  const total = safeAppointments.length;
  const pending = safeAppointments.filter(a => a.status === "pending").length;
  const approved = safeAppointments.filter(a => a.status === "approved").length;
  const completed = safeAppointments.filter(a => a.status === "completed").length;

  if (loading) return <p className="p-6">Loading dashboard...</p>;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
        <p className="text-gray-500">System overview</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Stat title="Total" value={total} />
        <Stat title="Pending" value={pending} color="text-yellow-500" />
        <Stat title="Approved" value={approved} color="text-blue-600" />
        <Stat title="Completed" value={completed} color="text-green-600" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ModuleCard title="Appointments" onClick={() => navigate("/doctor/appointments")} />
        <ModuleCard title="Medical Records" onClick={() => navigate("/doctor/records")} />
        <ModuleCard title="Prescriptions" onClick={() => navigate("/doctor/prescriptions")} />
        <ModuleCard title="Schedule" onClick={() => navigate("/doctor/schedule")} />
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold mb-3">Recent Appointments</h2>
        {safeAppointments.length === 0 ? (
          <p className="text-gray-500">No appointments yet</p>
        ) : (
          safeAppointments.slice(0, 5).map(a => (
            <div key={a.id} className="border-b py-2 flex justify-between">
              <div>
                <p className="font-medium">
                  {a.patient_name || "Patient"}
                </p>
                <p className="text-sm text-gray-500">
                  {a.appointment_date} • {a.appointment_time}
                </p>
              </div>
              <span className="text-sm capitalize">{a.status}</span>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

const Stat = ({ title, value, color = "text-gray-800" }) => (
  <div className="bg-white p-4 rounded shadow">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

const ModuleCard = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="p-4 bg-gray-100 rounded hover:bg-gray-200 text-left"
  >
    {title}
  </button>
);

export default Dashboard;