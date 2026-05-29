import AppointmentTable from "../../components/appointments/AppointmentTable";
const Appointments = () => {
  const appointments = [
    {
      id: 1,
      patient: "John",
      doctor: "Dr. Smith",
      date: "2026-05-29",
      status: "Completed",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Appointments
      </h1>

      <AppointmentTable appointments={appointments} />
    </div>
  );
};

export default Appointments;