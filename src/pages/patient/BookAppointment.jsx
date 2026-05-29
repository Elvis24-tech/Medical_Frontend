import AppointmentForm from "../../components/appointments/AppointmentForm";

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">

      <div className="w-full max-w-3xl">

        {/* HEADER */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Book Appointment
          </h1>
          <p className="text-gray-500 mt-2">
            Schedule a consultation with a doctor quickly and easily
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <AppointmentForm />
        </div>

      </div>

    </div>
  );
};

export default BookAppointment;