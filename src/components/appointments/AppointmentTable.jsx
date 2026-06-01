const AppointmentTable = ({ appointments = [] }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Patient</th>
            <th className="p-3 text-left">Doctor</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {appointments.length === 0 ? (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                No appointments found
              </td>
            </tr>
          ) : (
            appointments.map((a) => (
              <tr key={a.id} className="border-t hover:bg-gray-50">

                {/* Patient */}
                <td className="p-3">
                  {a.patient_name || "N/A"}
                </td>

                {/* Doctor */}
                <td className="p-3">
                  {a.doctor_name || "N/A"}
                </td>

                {/* Date */}
                <td className="p-3">
                  {a.appointment_date || "N/A"}
                </td>

                {/* Time */}
                <td className="p-3">
                  {a.appointment_time || "N/A"}
                </td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold capitalize
                      ${
                        a.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : a.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : a.status === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                      }
                    `}
                  >
                    {a.status}
                  </span>
                </td>

              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;