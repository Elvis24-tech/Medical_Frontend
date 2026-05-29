import AppointmentStatusBadge from "./AppointmentStatusBadge";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3 className="font-bold">{appointment.patient}</h3>
        <p className="text-gray-500">{appointment.doctor}</p>
        <p className="text-sm text-gray-400">{appointment.date}</p>
      </div>

      <AppointmentStatusBadge status={appointment.status} />
    </div>
  );
};

export default AppointmentCard;