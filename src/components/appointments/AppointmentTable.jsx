import Table from "../ui/Table";
import AppointmentStatusBadge from "./AppointmentStatusBadge";

const AppointmentTable = ({ appointments = [] }) => {
  return (
    <Table headers={["Patient", "Doctor", "Date", "Status"]}>
      {appointments.map((a) => (
        <tr key={a.id} className="border-t">
          <td className="p-2">{a.patient}</td>
          <td className="p-2">{a.doctor}</td>
          <td className="p-2">{a.date}</td>
          <td className="p-2">
            <AppointmentStatusBadge status={a.status} />
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default AppointmentTable;