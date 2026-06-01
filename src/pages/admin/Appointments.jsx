import { useEffect, useState } from "react";
import api from "../../api/axios";
import AppointmentTable from "../../components/appointments/AppointmentTable";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await api.get("appointments/");
        const data = res.data;

        setAppointments(data.results || data || []);
      } catch (err) {
        console.error(err);
        setAppointments([]);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Appointments</h1>

      <AppointmentTable appointments={appointments} />
    </div>
  );
};

export default Appointments;