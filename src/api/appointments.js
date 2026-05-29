import api from "./axios";

export const getPatientAppointments = () => {
  return api.get("appointments/");
};

export const createAppointment = (data) => {
  return api.post("appointments/", data);
};

export const cancelAppointment = (id) => {
  return api.post(`appointments/${id}/cancel/`);
};

export const approveAppointment = (id) => {
  return api.post(`appointments/${id}/approve/`);
};