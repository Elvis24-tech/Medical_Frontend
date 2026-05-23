import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import DashboardLayout from "./layouts/DashboardLayout"
import ProtectedRoute from "./components/ProtectedRoute"
import AdminDashboard from "./pages/admin/Dashboard"
import DoctorDashboard from "./pages/doctor/Dashboard"
import PatientDashboard from "./pages/patient/Dashboard"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
      </Route>

      <Route
        path="/doctor"
        element={
          <ProtectedRoute role="doctor">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DoctorDashboard />} />
      </Route>

      <Route
        path="/patient"
        element={
          <ProtectedRoute role="patient">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<PatientDashboard />} />
      </Route>

    </Routes>
  )
}

export default App