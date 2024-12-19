import React, { useState } from "react";
import JobApplicationForm from "./JobApplicationForm";  // Import JobApplicationForm
import "./JobPostings.css";

const jobData = [
  { title: "Software Engineer", company: "XYZ Corp", location: "New York, NY", date: "December 16, 2024" },
  { title: "Marketing Manager", company: "ABC Ltd.", location: "Los Angeles, CA", date: "December 14, 2024" },
  { title: "Product Designer", company: "DEF Co.", location: "San Francisco, CA", date: "December 12, 2024" },
  { title: "Data Scientist", company: "GHI Analytics", location: "Chicago, IL", date: "December 10, 2024" },
  { title: "Marketing Manager", company: "ABC Ltd.", location: "Los Angeles, CA", date: "December 14, 2024" },
  { title: "HR Specialist", company: "MNO HR", location: "Remote", date: "December 8, 2024" },
];

const JobPostings = () => {
  const [isApplying, setIsApplying] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsApplying(true); // Show the application form
  };

  const handleCloseForm = () => {
    setIsApplying(false); // Close the application form
    setSelectedJob(null);  // Reset the selected job
  };

  return (
    <div className="job-postings">
      <h2>Job Postings</h2>
      <p>Explore and share job opportunities.</p>
      <div className="job-list">
        {jobData.map((job, index) => (
          <div key={index} className="job-item">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Date Posted:</strong> {job.date}</p>
            <button className="apply-button" onClick={() => handleApplyClick(job)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {isApplying && (
  <div className="application-form-container">
    <button onClick={handleCloseForm} className="close-form">
      ← Close
    </button>
    <JobApplicationForm job={selectedJob} />
  </div>
)}

    </div>
  );
};

export default JobPostings;
