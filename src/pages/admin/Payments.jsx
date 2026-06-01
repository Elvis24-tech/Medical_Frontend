import { useEffect, useState } from "react";
import api from "../../api/axios";

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await api.get("payments/");
        const data = res.data;

        setPayments(data.results || data || []);
      } catch (err) {
        console.error(err);
        setPayments([]);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Payments</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        {payments.map((p) => (
          <div key={p.id} className="border-b py-2">
            {p.amount} - {p.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;