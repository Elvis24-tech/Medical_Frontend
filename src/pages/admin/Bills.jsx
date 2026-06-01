import { useEffect, useState } from "react";
import api from "../../api/axios";
import BillTable from "../../components/billing/BillTable";

const Bills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await api.get("billing/");
        const data = res.data;

        setBills(data.results || data || []);
      } catch (err) {
        console.error(err);
        setBills([]);
      }
    };

    fetchBills();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bills</h1>

      <BillTable bills={bills} />
    </div>
  );
};

export default Bills;