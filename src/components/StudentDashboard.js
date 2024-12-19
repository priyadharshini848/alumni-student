import React, { useState } from "react";
import FindMentor from "./FindMentor";
import JobsInternships from "./JobsInternships";
import YourProfile from "./YourProfile";
import QandAForum from './Q&AForum';
import "./StudentDashboard.css"; // Add your CSS here

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("mentor");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Student Dashboard</h2>
        <ul>
          <li onClick={() => handleSectionChange("mentor")}>Find a Mentor</li>
          <li onClick={() => handleSectionChange("jobs")}>Explore Jobs</li>
          <li onClick={() => handleSectionChange("profile")}>Your Profile</li>
          <li onClick={() => handleSectionChange("qa")}>Q&A Forum</li>        </ul>
      </div>

      <div className="main-content">
        {activeSection === "mentor" && <FindMentor />}
        {activeSection === "jobs" && <JobsInternships />}
        {activeSection === "profile" && <YourProfile />}
        {activeSection === "qa" && <QandAForum />}
      </div>
    </div>
  );
};

export default StudentDashboard;
