const PrescriptionCard = ({ prescription }) => {
    return (
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-bold">{prescription.patient}</h3>
        <p className="text-gray-500">{prescription.medicine}</p>
        <p className="text-sm">{prescription.dosage}</p>
      </div>
    );
  };
  
  export default PrescriptionCard;