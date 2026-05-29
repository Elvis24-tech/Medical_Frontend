const BillCard = ({ bill }) => {
    return (
      <div className="bg-white p-4 shadow rounded flex justify-between">
        <div>
          <h3 className="font-bold">{bill.patient}</h3>
          <p className="text-gray-500">Amount: ${bill.amount}</p>
        </div>
  
        <span
          className={`px-2 py-1 rounded ${
            bill.status === "Paid"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {bill.status}
        </span>
      </div>
    );
  };
  
  export default BillCard;