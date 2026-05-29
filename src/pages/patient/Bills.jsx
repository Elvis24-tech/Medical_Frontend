import { useEffect, useState } from "react";

const Bills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    // Mock data (replace later with API)
    const data = [
      {
        id: 1,
        service: "General Consultation",
        amount: 500,
        status: "Paid",
        date: "2026-05-10",
      },
      {
        id: 2,
        service: "Lab Tests",
        amount: 1200,
        status: "Pending",
        date: "2026-05-12",
      },
      {
        id: 3,
        service: "Dental Cleaning",
        amount: 800,
        status: "Paid",
        date: "2026-04-22",
      },
    ];

    setBills(data);
  }, []);

  const totalDue = bills
    .filter((b) => b.status === "Pending")
    .reduce((sum, b) => sum + b.amount, 0);

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
          KSh {totalDue}
        </p>
      </div>

      {/* BILLS LIST */}
      <div className="space-y-4">
        {bills.map((bill) => (
          <div
            key={bill.id}
            className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
          >

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-lg font-semibold">
                {bill.service}
              </h2>

              <p className="text-gray-500 text-sm">
                Date: {bill.date}
              </p>

              <p className="text-gray-700 font-medium">
                KSh {bill.amount}
              </p>
            </div>

            {/* RIGHT SIDE */}
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

    </div>
  );
};

export default Bills;