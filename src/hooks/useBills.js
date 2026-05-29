import { useEffect, useState } from "react";
import { getBills } from "../api/billing";

export const useBills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    getBills().then((res) => setBills(res.data));
  }, []);

  return { bills };
};