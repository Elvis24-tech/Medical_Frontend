import api from "./axios";

export const getBills = () => api.get("billing/");
export const getBill = (id) => api.get(`billing/${id}/`);