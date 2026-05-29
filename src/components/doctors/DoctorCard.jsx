export default function DoctorCard({ doctor }) {
    return (
      <div className="border p-3">
        <h3>{doctor.user.username}</h3>
        <p>{doctor.specialization}</p>
      </div>
    );
  }