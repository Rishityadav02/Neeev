import React from "react";
import "./Architecture.css"; // Ensure you have the updated CSS file
import topImage from "../interior-top.jpg"; // Replace with your image path
import leftImage from "../interior-left.png"; // Replace with your image path

const services = [
  {
    title: "Conceptual Design & Feasibility Studies",
    description:
      "We will help you turn your initial ideas into a conceptual design that captures the soul of your dream. We will also conduct feasibility studies to determine whether the project can be carried out and identify any problems that might arise.",
  },
  {
    title: "Site Planning & Analysis",
    description:
      "Extensive site analysis is required for successful projects, and we shall employ it. It will entail assessing topography, zoning ordinances, and on-site utilities. By considering this analysis, the design layout maximizes space utilization.",
  },
  {
    title: "Space Planning & Design",
    description:
      "We believe in designing spaces that are nice-looking and super-efficient. In the meantime, we will maximize your project’s layout to optimize space utilization while developing a free flow between rooms.",
  },
  {
    title: "Building Permitting & Approvals",
    description:
      "Navigating the building permit process is complex. Correspondingly, we will facilitate all the necessary papers and liaise with relevant authorities so as to ensure that your project gets approved accordingly.",
  },
  {
    title: "Construction Documentation & Drawings",
    description:
      "The architects will design clear drawings that tell the construction team what they should do and how. This way, the contractors can build a building as designed and meet all legal standards.",
  },
  {
    title: "Project Management & Construction Administration",
    description:
      "We provide full project management services for the entire construction process, including budgeting, scheduling, and overseeing contractors and subcontractors.",
  },
];

const Architecture = () => {
  return (
    <div className="architecture-design">
      {/* Top Image */}
      <img src={topImage} alt="Architecture Design" className="top-image" />

      {/* Hero Section */}
      <div className="hero-section">
        {/* Left Image */}
        <img src={leftImage} alt="Architectural Concept" className="left-image" />
        <div className="hero-content">
          <h1>Architecture & Design Studio</h1>
          <p>
            We bring innovative and efficient architectural solutions that blend aesthetics with functionality. From conceptual design to project management, we handle it all.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Architectural Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Architecture;
