import React from "react";
import "./professionalTraining.css"; // Ensure you have the updated CSS file
import topImage from "../interior-top.jpg"; // Replace with your image path
import leftImage from "../interior-left.png"; // Replace with your image path

const trainingPrograms = [
  {
    title: "Communication Skills",
    description:
      "Enhance your team's oral and written communication with our programs on public speaking, presentation skills, business writing, and interpersonal communication.",
  },
  {
    title: "Leadership Development",
    description:
      "Strengthen leadership skills with courses on leadership styles, coaching and mentoring, conflict resolution, and team building.",
  },
  {
    title: "Project Management",
    description:
      "Equip your team with the skills needed for effective project planning, scheduling, resource allocation, risk management, and project monitoring.",
  },
  {
    title: "Software Skills",
    description:
      "Train employees in the latest software relevant to your industry. We offer customized programs and access to industry-standard software training materials.",
  },
  {
    title: "Sales & Marketing",
    description:
      "Empower sales agents and marketers with training in effective communication, advertising tactics, and digital marketing strategies.",
  },
  {
    title: "Safety & Compliance Training",
    description:
      "Ensure regulatory compliance with courses on data protection, anti-discrimination laws, and workplace health and safety.",
  },
];

const ProfessionalTraining = () => {
  return (
    <div className="architecture">
      {/* Top Image */}
      <img src={topImage} alt="Professional Training" className="top-image" />

      {/* Hero Section */}
      <div className="hero-section">
        {/* Left Image */}
        <img src={leftImage} alt="Training Program" className="left-image" />
        <div className="hero-content">
          <h1>Professional Training Programs</h1>
          <p>
            At NEEEV, we provide specialized training programs to enhance professional skills across various fields, ensuring personal and organizational growth.
          </p>
        </div>
      </div>

      {/* Training Programs Section */}
      <div className="services-section">
        <h2>Our Training Programs</h2>
        <div className="services-grid">
          {trainingPrograms.map((program, index) => (
            <div className="service-card" key={index}>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTraining;
