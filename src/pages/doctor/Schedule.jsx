import { useEffect, useState } from "react";
import api from "../../api/axios";

const Schedule = () => {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const res = await api.get("doctors/schedule/");
      setSchedule(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!schedule) return <p className="p-4">Loading schedule...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Doctor Schedule</h1>

      <div className="border p-4 bg-white rounded">
        <p><b>Start Time:</b> {schedule[0]?.start_time}</p>
        <p><b>End Time:</b> {schedule[0]?.end_time}</p>
        <p><b>Status:</b> {schedule[0]?.active ? "Active" : "Inactive"}</p>
      </div>
    </div>
  );
};

export default Schedule;