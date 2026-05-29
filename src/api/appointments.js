import API from "./axios";
export const getAppointments = async () => {
  const response = await API.get("appointments/");
  return response.data;
};

export const createAppointment = async (data) => {
  const response = await API.post("appointments/", data);
  return response.data;
};

export const approveAppointment = async (id) => {
  const response = await API.post(
    `appointments/${id}/approve/`
  );

  return response.data;
};

export const cancelAppointment = async (id) => {
  const response = await API.post(
    `appointments/${id}/cancel/`
  );

  return response.data;
};