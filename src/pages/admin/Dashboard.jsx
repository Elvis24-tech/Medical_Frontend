import DashboardCard from "../../components/common/DashboardCard";
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <DashboardCard title="Doctors" value="25" />
        <DashboardCard title="Patients" value="150" />
        <DashboardCard title="Appointments" value="78" />
        <DashboardCard title="Revenue" value="$12,000" />
      </div>
    </div>
  );
};

export default Dashboard;