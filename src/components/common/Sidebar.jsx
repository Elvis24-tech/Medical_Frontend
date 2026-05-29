import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <div className="flex flex-col gap-3">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/doctors">Doctors</Link>
        <Link to="/admin/patients">Patients</Link>
        <Link to="/admin/appointments">Appointments</Link>
        <Link to="/admin/bills">Bills</Link>
        <Link to="/admin/payments">Payments</Link>
      </div>
    </div>
  );
};

export default Sidebar;