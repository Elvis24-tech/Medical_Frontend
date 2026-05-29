import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const PrescriptionForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    patient: "",
    medicine: "",
    dosage: "",
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
        label="Patient"
        name="patient"
        value={form.patient}
        onChange={handleChange}
      />

      <Input
        label="Medicine"
        name="medicine"
        value={form.medicine}
        onChange={handleChange}
      />

      <Input
        label="Dosage"
        name="dosage"
        value={form.dosage}
        onChange={handleChange}
      />

      <Button type="submit">Save Prescription</Button>
    </form>
  );
};

export default PrescriptionForm;