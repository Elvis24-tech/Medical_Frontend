import { useEffect, useState } from "react";
import api from "../../api/axios";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await api.get("billing/");

        const data =
          res.data?.results ||
          res.data?.data ||
          res.data ||
          [];

        setBills(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load bills:", err);
        setBills([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  const totalDue = bills
    .filter((b) => b.status === "Pending")
    .reduce((sum, b) => sum + Number(b.amount || 0), 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Patient Bills
        </h1>
        <p className="text-gray-500">
          Manage your hospital payments and invoices
        </p>
      </div>

      {/* SUMMARY CARD */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-gray-500">Total Pending Payment</h2>

        <p className="text-2xl font-bold text-red-600">
          {loading ? "..." : `KSh ${totalDue}`}
        </p>
      </div>

      {/* LIST */}
      {loading ? (
        <p className="text-gray-500">Loading bills...</p>
      ) : bills.length === 0 ? (
        <p className="text-gray-500">No bills found</p>
      ) : (
        <div className="space-y-4">

          {bills.map((bill) => (
            <div
              key={bill.id}
              className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
            >

              {/* LEFT */}
              <div>
                <h2 className="text-lg font-semibold">
                  {bill.service || bill.description || "Service"}
                </h2>

                <p className="text-gray-500 text-sm">
                  Date: {bill.date || bill.created_at}
                </p>

                <p className="text-gray-700 font-medium">
                  KSh {bill.amount}
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-right space-y-2">

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    bill.status === "Paid"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {bill.status}
                </span>

                {bill.status === "Pending" && (
                  <button className="block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Pay Now
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Bills;