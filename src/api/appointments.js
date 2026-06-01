import api from "./axios";

// GET ALL (doctor/admin)
export const getAppointments = async () => {
  const res = await api.get("appointments/");
  return res.data;
};

// GET PATIENT APPOINTMENTS
export const getPatientAppointments = async () => {
  const res = await api.get("appointments/");
  return res.data;
};

// BOOK APPOINTMENT
export const bookAppointment = async (data) => {
  const res = await api.post("appointments/", data);
  return res.data;
};

// DOCTOR ACTIONS
export const approveAppointment = async (id) => {
  const res = await api.post(`appointments/${id}/approve/`);
  return res.data;
};

export const cancelAppointment = async (id) => {
  const res = await api.post(`appointments/${id}/cancel/`);
  return res.data;
};

export const completeAppointment = async (id) => {
  const res = await api.post(`appointments/${id}/complete/`);
  return res.data;
};