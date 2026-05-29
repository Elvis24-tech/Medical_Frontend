import { useEffect, useState } from "react";
import { getPatientAppointments } from "../../api/appointments";
import PageHeader from "../../components/common/PageHeader";
import Loader from "../../components/common/Loader";
import ErrorMessage from "../../components/common/ErrorMessage";
import AppointmentCard from "../../components/appointments/AppointmentCard";

export default function MyAppointments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getPatientAppointments();
      setData(res.data || []);
    } catch (err) {
      setError("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-6">
      <PageHeader title="My Appointments" />

      {data.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        data.map((item) => (
          <AppointmentCard key={item.id} appointment={item} />
        ))
      )}
    </div>
  );
}