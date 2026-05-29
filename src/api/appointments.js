import api from "./axios";

// GET all appointments (role-based backend filtering already handles this)
export const getAppointments = async () => {
  const res = await api.get("/appointments/");
  return res.data;
};

// GET patient appointments explicitly (optional helper)
export const getPatientAppointments = async () => {
  const res = await api.get("/appointments/");
  return res.data;
};

// Doctor actions
export const approveAppointment = async (id) => {
  const res = await api.post(`/appointments/${id}/approve/`);
  return res.data;
};

export const cancelAppointment = async (id) => {
  const res = await api.post(`/appointments/${id}/cancel/`);
  return res.data;
};

export const completeAppointment = async (id) => {
  const res = await api.post(`/appointments/${id}/complete/`);
  return res.data;
};