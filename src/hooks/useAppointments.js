import { useEffect, useState } from "react";
import { getAppointments } from "../api/appointments";

export const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments().then((res) => {
      setAppointments(res.data);
    });
  }, []);

  return { appointments };
};