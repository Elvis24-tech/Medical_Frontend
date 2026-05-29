const MedicalRecordCard = ({ record }) => {
    return (
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-bold">{record.patient}</h3>
        <p className="text-gray-500">{record.diagnosis}</p>
        <p className="text-sm">{record.notes}</p>
      </div>
    );
  };
  
  export default MedicalRecordCard;