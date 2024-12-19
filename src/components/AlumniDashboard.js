import React, { useState } from "react";
import AlumniDirectory from "./AlumniDirectory";
import JobPostings from "./JobPostings";
import MentorshipProgram from "./MentorshipProgram";
import YourProfile from "./Profile";
import "./AlumniDashboard.css";

const AlumniDashboard = () => {
  const [activeSection, setActiveSection] = useState("directory");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Alumni Dashboard</h2>
        <ul>
          <li onClick={() => handleSectionChange("directory")}>Alumni Directory</li>
          <li onClick={() => handleSectionChange("jobs")}>Job Postings</li>
          <li onClick={() => handleSectionChange("mentorship")}>Mentorship Program</li>
          <li onClick={() => handleSectionChange("profile")}>Your Profile</li>
        </ul>
      </div>

      <div className="main-content">
        {activeSection === "directory" && <AlumniDirectory />}
        {activeSection === "jobs" && <JobPostings />}
        {activeSection === "mentorship" && <MentorshipProgram />}
        {activeSection === "profile" && <YourProfile />}
      </div>
    </div>
  );
};

export default AlumniDashboard;
