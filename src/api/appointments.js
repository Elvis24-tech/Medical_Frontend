import axios from "./axios";
export const getPatientAppointments = async () => {
  const res = await axios.get("/appointments/patient/");
  return res.data;
};
export const createAppointment = async (data) => {
  const res = await axios.post("/appointments/", data);
  return res.data;
};
export const getAllAppointments = async () => {
  const res = await axios.get("/appointments/");
  return res.data;
};