import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";
import AdminDashboard from "../pages/admin/Dashboard";
import AdminDoctors from "../pages/admin/Doctors";
import AdminPatients from "../pages/admin/Patients";
import AdminAppointments from "../pages/admin/Appointments";
import AdminBills from "../pages/admin/Bills";
import AdminPayments from "../pages/admin/Payments";
import DoctorDashboard from "../pages/doctor/Dashboard";
import DoctorAppointments from "../pages/doctor/Appointments";
import DoctorMedicalRecords from "../pages/doctor/MedicalRecords";
import DoctorPrescriptions from "../pages/doctor/Prescriptions";
import DoctorSchedule from "../pages/doctor/Schedule";
import PatientDashboard from "../pages/patient/Dashboard";
import BookAppointment from "../pages/patient/BookAppointment";
import MyAppointments from "../pages/patient/MyAppointments";
import PatientBills from "../pages/patient/Bills";
import PatientPayments from "../pages/patient/Payments";
import MedicalHistory from "../pages/patient/MedicalHistory";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/unauthorized"
        element={<Unauthorized />}
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/doctors"
        element={
          <ProtectedRoute role="admin">
            <AdminDoctors />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/patients"
        element={
          <ProtectedRoute role="admin">
            <AdminPatients />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/appointments"
        element={
          <ProtectedRoute role="admin">
            <AdminAppointments />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/bills"
        element={
          <ProtectedRoute role="admin">
            <AdminBills />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/payments"
        element={
          <ProtectedRoute role="admin">
            <AdminPayments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctor/dashboard"
        element={
          <ProtectedRoute role="doctor">
            <DoctorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor/appointments"
        element={
          <ProtectedRoute role="doctor">
            <DoctorAppointments />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor/records"
        element={
          <ProtectedRoute role="doctor">
            <DoctorMedicalRecords />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor/prescriptions"
        element={
          <ProtectedRoute role="doctor">
            <DoctorPrescriptions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctor/schedule"
        element={
          <ProtectedRoute role="doctor">
            <DoctorSchedule />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient/dashboard"
        element={
          <ProtectedRoute role="patient">
            <PatientDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/book"
        element={
          <ProtectedRoute role="patient">
            <BookAppointment />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/appointments"
        element={
          <ProtectedRoute role="patient">
            <MyAppointments />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/bills"
        element={
          <ProtectedRoute role="patient">
            <PatientBills />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/payments"
        element={
          <ProtectedRoute role="patient">
            <PatientPayments />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient/history"
        element={
          <ProtectedRoute role="patient">
            <MedicalHistory />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;