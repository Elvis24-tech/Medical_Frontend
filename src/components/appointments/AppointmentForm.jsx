import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const AppointmentForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        label="Patient Name"
        name="patient"
        value={form.patient}
        onChange={handleChange}
      />

      <Input
        label="Doctor"
        name="doctor"
        value={form.doctor}
        onChange={handleChange}
      />

      <Input
        label="Date"
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
      />

      <Button type="submit">Book Appointment</Button>
    </form>
  );
};

export default AppointmentForm;