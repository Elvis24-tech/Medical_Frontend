import Table from "../ui/Table";

const BillTable = ({ bills = [] }) => {
  return (
    <Table headers={["Patient", "Amount", "Status"]}>
      {bills.length === 0 ? (
        <tr>
          <td colSpan="3" className="p-4 text-center text-gray-500">
            No bills found
          </td>
        </tr>
      ) : (
        bills.map((b) => (
          <tr key={b.id} className="border-t">
            <td className="p-2">
              {b.patient_name || b.patient || "N/A"}
            </td>

            <td className="p-2">
              KES {b.amount || 0}
            </td>

            <td className="p-2 capitalize">
              {b.status || "Pending"}
            </td>
          </tr>
        ))
      )}
    </Table>
  );
};

export default BillTable;