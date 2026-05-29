import Table from "../ui/Table";

const BillTable = ({ bills = [] }) => {
  return (
    <Table headers={["Patient", "Amount", "Status"]}>
      {bills.map((b) => (
        <tr key={b.id} className="border-t">
          <td className="p-2">{b.patient}</td>
          <td className="p-2">${b.amount}</td>
          <td className="p-2">{b.status}</td>
        </tr>
      ))}
    </Table>
  );
};

export default BillTable;