import BillTable from "../../components/billing/BillTable";
const Bills = () => {
  const bills = [
    {
      id: 1,
      patient: "John",
      amount: 250,
      status: "Paid",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bills</h1>

      <BillTable bills={bills} />
    </div>
  );
};

export default Bills;