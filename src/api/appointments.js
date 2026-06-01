import api from "./axios";

// GET appointments (normalized)
export const getAppointments = async () => {
  const res = await api.get("/appointments/");

  return (
    res.data?.results ||
    res.data?.data ||
    (Array.isArray(res.data) ? res.data : [])
  );
};

// BOOK appointment
export const bookAppointment = async (data) => {
  const res = await api.post("/appointments/", data);
  return res.data;
};

// APPROVE
export const approveAppointment = async (id) => {
  const res = await api.post(`/appointments/${id}/approve/`);
  return res.data;
};

// CANCEL
export const cancelAppointment = async (id) => {
  const res = await api.post(`/appointments/${id}/cancel/`);
  return res.data;
};

// COMPLETE
export const completeAppointment = async (id) => {
  const res = await api.post(`/appointments/${id}/complete/`);
  return res.data;
};