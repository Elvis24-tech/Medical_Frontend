import { useEffect, useState } from "react";

const MedicalHistory = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Mock data (later you will replace with API call)
    const data = [
      {
        id: 1,
        title: "General Checkup",
        doctor: "Dr. Smith",
        date: "2026-05-10",
        status: "Completed",
        notes: "Patient is in good health. Blood pressure normal.",
      },
      {
        id: 2,
        title: "Malaria Treatment",
        doctor: "Dr. James",
        date: "2026-04-22",
        status: "Completed",
        notes: "Prescribed Artemether-Lumefantrine for 3 days.",
      },
      {
        id: 3,
        title: "Dental Review",
        doctor: "Dr. Kevin",
        date: "2026-03-15",
        status: "Follow-up",
        notes: "Minor cavity detected, follow-up in 2 weeks.",
      },
    ];

    setRecords(data);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Medical History
        </h1>
        <p className="text-gray-500">
          Your past consultations and treatments
        </p>
      </div>

      {/* TIMELINE / RECORDS */}
      <div className="space-y-4">
        {records.map((record) => (
          <div
            key={record.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {record.title}
              </h2>

              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  record.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {record.status}
              </span>
            </div>

            <p className="text-gray-500 mt-1">
              Doctor: {record.doctor}
            </p>

            <p className="text-gray-500 text-sm">
              Date: {record.date}
            </p>

            <p className="mt-3 text-gray-700">
              {record.notes}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;