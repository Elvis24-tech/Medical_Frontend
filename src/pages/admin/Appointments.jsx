import { useEffect, useState } from "react";
import api from "../../api/axios";
import AppointmentTable from "../../components/appointments/AppointmentTable";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await api.get("appointments/");
        const list = res.data.results || res.data || [];

        setAppointments(list);
      } catch (err) {
        console.error(err);
        setAppointments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Appointments</h1>

      <AppointmentTable appointments={appointments} />
    </div>
  );
};

export default Appointments;