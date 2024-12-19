import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Register from "./components/Register";
import Login from "./components/Login";
import StudentDashboard from "./components/StudentDashboard";
import AlumniLogin from "./components/Auth/AlumniLogin"; // Alumni Login Component
import AlumniDashboard from "./components/AlumniDashboard"; // Alumni Dashboard Component

function App() {
  return (
          <Router>
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<FrontPage />} />
          <Route path="/register" element={<Register />} />

          {/* Student Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />

          {/* Alumni Routes */}
          <Route path="/alumni-login" element={<AlumniLogin />} />
          <Route path="/alumni-dashboard" element={<AlumniDashboard />} />
        </Routes>
      </Router>
   
  );
}

export default App;
