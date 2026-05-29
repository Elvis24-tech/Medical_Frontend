import { useEffect, useState } from "react";
import { getPayments } from "../api/payments";

export const usePayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getPayments().then((res) => setPayments(res.data));
  }, []);

  return { payments };
};