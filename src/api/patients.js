import api from "./axios";
export const getPatients = () => api.get("patients/");