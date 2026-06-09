const MedicalRecordCard = ({ record }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">
          {record.patient_name || record.patient}
        </h3>

        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {new Date(record.created_at).toLocaleDateString()}
        </span>
      </div>

      {/* Doctor */}
      <div className="mb-3">
        <p className="text-sm text-gray-500">Doctor</p>
        <p className="font-medium">
          {record.doctor_name || record.doctor}
        </p>
      </div>

      {/* Diagnosis */}
      <div className="mb-3">
        <p className="text-sm text-gray-500">Diagnosis</p>
        <p className="font-medium text-red-600">
          {record.diagnosis}
        </p>
      </div>

      {/* Symptoms */}
      <div className="mb-3">
        <p className="text-sm text-gray-500">Symptoms</p>
        <p>{record.symptoms}</p>
      </div>

      {/* Treatment */}
      <div className="mb-3">
        <p className="text-sm text-gray-500">Treatment</p>
        <p>{record.treatment}</p>
      </div>

      {/* Notes */}
      {record.notes && (
        <div className="mb-3">
          <p className="text-sm text-gray-500">Notes</p>
          <p>{record.notes}</p>
        </div>
      )}

      {/* Prescriptions */}
      {record.prescriptions?.length > 0 && (
        <div className="mt-4 border-t pt-4">
          <h4 className="font-semibold mb-2">
            Prescriptions
          </h4>

          <div className="space-y-2">
            {record.prescriptions.map((p) => (
              <div
                key={p.id}
                className="bg-gray-50 p-3 rounded-lg"
              >
                <p className="font-medium">
                  {p.medication_name}
                </p>

                <p className="text-sm text-gray-600">
                  Dosage: {p.dosage}
                </p>

                <p className="text-sm text-gray-600">
                  Frequency: {p.frequency}
                </p>

                <p className="text-sm text-gray-600">
                  Duration: {p.duration}
                </p>

                {p.instructions && (
                  <p className="text-sm mt-1 italic">
                    {p.instructions}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalRecordCard;