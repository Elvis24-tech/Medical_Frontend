import { useEffect, useState } from "react";
import api from "../../api/axios";
import { bookAppointment } from "../../api/appointments";

export default function AppointmentForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    appointment_date: "",
    appointment_time: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await bookAppointment(form);

      setForm({
        appointment_date: "",
        appointment_time: "",
        reason: ""
      });

      if (onSuccess) onSuccess();

    } catch (err) {
      console.error("Booking failed:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="date"
        name="appointment_date"
        value={form.appointment_date}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="time"
        name="appointment_time"
        value={form.appointment_time}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="reason"
        value={form.reason}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        placeholder="Reason for visit"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {loading ? "Booking..." : "Book Appointment"}
      </button>
    </form>
  );
}