import { useEffect, useState } from "react";
import api from "../../api/axios";

const Bills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await api.get("billing/");
        const data = res.data?.results || res.data || [];

        setBills(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBills();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Bills</h1>

      {bills.length === 0 ? (
        <p>No bills found.</p>
      ) : (
        <div className="space-y-3">
          {bills.map((bill) => (
            <div
              key={bill.id}
              className="bg-white p-4 rounded-lg shadow"
            >
              <p><strong>ID:</strong> {bill.id}</p>
              <p><strong>Amount:</strong> {bill.amount}</p>
              <p><strong>Status:</strong> {bill.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bills;