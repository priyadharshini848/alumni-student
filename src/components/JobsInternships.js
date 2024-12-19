import React, { useState } from "react";
import "./JobsInternships.css";

const jobInternshipsList = [
  {
    title: "Software Engineering Intern",
    company: "TechCorp",
    location: "San Francisco, USA",
    type: "Internship",
    description: "Join our software engineering team as an intern and gain hands-on experience.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    contact: "careers@techcorp.com",
    image: "https://st3.depositphotos.com/1037987/15097/i/380/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
  },
  {
    title: "Marketing Intern",
    company: "MarketPro",
    location: "New York, USA",
    type: "Internship",
    description: "Help us grow our brand and develop strategies for digital marketing campaigns.",
    skills: ["SEO", "Content Marketing", "Google Analytics"],
    contact: "jobs@marketpro.com",
    image: "https://st4.depositphotos.com/12982378/30881/i/380/depositphotos_308819686-stock-photo-positive-woman-pointing-finger-isolated.jpg"
  },
  {
    title: "Junior Data Scientist",
    company: "DataWorks",
    location: "Berlin, Germany",
    type: "Job",
    description: "Join our data science team to analyze large datasets and build predictive models.",
    skills: ["Python", "R", "SQL", "Machine Learning"],
    contact: "hiring@dataworks.com",
    image: "https://st.depositphotos.com/1594308/3681/i/380/depositphotos_36818041-stock-photo-pensive-businessman.jpg"
  },
  {
    title: "Product Design Intern",
    company: "InnovateX",
    location: "London, UK",
    type: "Internship",
    description: "Design innovative and user-friendly products in a fast-paced startup environment.",
    skills: ["Figma", "Sketch", "Prototyping"],
    contact: "careers@innovatex.com",
    image: "https://st4.depositphotos.com/13193658/30158/i/380/depositphotos_301586860-stock-photo-handsome-businessman-formal-wear-smiling.jpg"
  },
  {
    title: "UX/UI Design Intern",
    company: "Designly",
    location: "Toronto, Canada",
    type: "Internship",
    description: "Collaborate with senior designers to create engaging user experiences.",
    skills: ["Adobe XD", "Figma", "Wireframing"],
    contact: "hr@designly.com",
    image: "https://st4.depositphotos.com/12985848/29887/i/380/depositphotos_298877708-stock-photo-smiling-man-denim-shirt-using.jpg"
  },
  {
    title: "Cybersecurity Analyst",
    company: "SecureIT",
    location: "Sydney, Australia",
    type: "Job",
    description: "Protect company networks and systems from potential cyber threats.",
    skills: ["Network Security", "Firewalls", "Encryption", "Threat Detection"],
    contact: "jobs@secureit.com",
    image: "https://st3.depositphotos.com/4071389/18265/i/380/depositphotos_182656402-stock-photo-girl-looking-away-window-content.jpg"
  }
];

const JobsInternship = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: ""
  });

  const filteredJobsInternships = jobInternshipsList.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      coverLetter: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedJob) {
      // Simulate applying by printing the data to the console
      console.log("Applying for job:", selectedJob.title);
      console.log("Form Data:", formData);
      alert(`Application for ${selectedJob.title} submitted!`);
      closeModal();
    }
  };

  return (
    <div className="jobs-internship-container">
      <h2 className="jobs-internship-title">Explore Jobs & Internships</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for jobs/internships..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="jobs-list">
        {filteredJobsInternships.length > 0 ? (
          filteredJobsInternships.map((job, index) => (
            <div key={index} className="job-card">
              <img src={job.image} alt={job.company} className="job-image" />
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Skills:</strong> {job.skills.join(", ")}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <button onClick={() => openModal(job)} className="apply-button">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No jobs/internships found. Try another search.</p>
        )}
      </div>

      {/* Apply Modal */}
      {isModalOpen && (
        <div className="apply-modal">
          <div className="modal-content">
            <h3>Apply for {selectedJob.title}</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Cover Letter:</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit">Submit Application</button>
                <button type="button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsInternship;
