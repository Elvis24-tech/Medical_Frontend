const AppointmentStatusBadge = ({ status }) => {
    const colors = {
      Pending: "bg-yellow-200 text-yellow-800",
      Completed: "bg-green-200 text-green-800",
      Cancelled: "bg-red-200 text-red-800",
    };
  
    return (
      <span className={`px-2 py-1 rounded ${colors[status] || ""}`}>
        {status}
      </span>
    );
  };
  
  export default AppointmentStatusBadge;