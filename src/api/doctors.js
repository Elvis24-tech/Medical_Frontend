import api from "./axios";
export const getDoctors = () => api.get("doctors/");