import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "../layout/Mainlayout";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard/MaintenanceDashboard";
import Complaints from "../pages/Complaints/Complaints";
import EmergencyAlerts from "../pages/EmergencyAlerts/EmergencyAlerts";
import Guide from "../pages/Guide/Guide";
import Notifications from "../pages/Notification/Notifications";
import NotFound from "../components/Shared/NotFound";
import { PublicRoute } from "./PublicRoute";
import { SignIn } from "../pages/Auth/Signin";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          element={
            <ProtectedRoute>
              <Mainlayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/emergencyalerts" element={<EmergencyAlerts />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/notification" element={<Notifications />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
