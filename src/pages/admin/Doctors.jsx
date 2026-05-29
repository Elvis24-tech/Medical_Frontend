import DoctorCard from "../../components/doctors/DoctorCard";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Smith",
      specialization: "Cardiologist",
    },
    {
      id: 2,
      name: "Dr. Jane",
      specialization: "Dentist",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Doctors</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;