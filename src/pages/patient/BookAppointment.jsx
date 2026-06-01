import { useNavigate } from "react-router-dom";
import AppointmentForm from "../../components/appointments/AppointmentForm";

const BookAppointment = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/patient/appointments");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

      <div className="w-full max-w-3xl">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Book Appointment
          </h1>
          <p className="text-gray-500 mt-2">
            Schedule a consultation quickly and easily
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <AppointmentForm onSuccess={handleSuccess} />
        </div>

      </div>

    </div>
  );
};

export default BookAppointment;