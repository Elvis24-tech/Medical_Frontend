import { useEffect, useState } from "react";
import { getDoctors } from "../api/doctors";

export const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then((res) => setDoctors(res.data));
  }, []);

  return { doctors };
};