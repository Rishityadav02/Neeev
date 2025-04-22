import React from "react";
import "./constructionServices.css"; // Ensure you have the updated CSS file
import topImage from "../interior-top.jpg"; // Replace with your image path
import leftImage from "../interior-left.png"; // Replace with your image path

const constructionSteps = [
  {
    title: "Consultation",
    description:
      "This is where as a client you come forward in an arranged meeting and air out your suggestions to the project at no cost on your side, then the two of us will discuss further on your expectations and projected spending. We use questioning in order to comprehend what you want and guide you.",
  },
  {
    title: "Pre-Construction Planning",
    description:
      "Our team prepares a detailed construction plan with schedules, budgets, and material specifications. Moreover, we get all essential permits.",
  },
  {
    title: "Construction",
    description:
      "Our experienced constructor will initiate the implementation of your project with our highly maintained safety standards and quality control. Be informed that we shall keep updating you on any progress we make or answer any query or concern raised by you.",
  },
  {
    title: "Quality Control",
    description:
      "In each stage, our building crew undertakes a thorough scrutiny to maintain high standards while constructing. All the works must have been examined by our learned professionals in each phase.",
  },
  {
    title: "Completion & Handover",
    description:
      "After construction is finished, we will conduct a final inspection with you to guarantee your contentment. Then, we will give you all the required warranties and manuals.",
  },
];

const ConstructionServices = () => {
  return (
    <div className="construction-services">
      {/* Top Image */}
      <img src={topImage} alt="Construction Services" className="construction-top-image" />

      {/* Hero Section */}
      <div className="construction-hero">
        {/* Left Image */}
        <img src={leftImage} alt="Construction Process" className="construction-left-image" />
        <div className="construction-hero-content">
          <h1>Construction Services</h1>
          <p>
            We adhere strictly to a well-defined construction process at NEEEV to ensure a smooth and efficient project for our clients.
          </p>
        </div>
      </div>

      {/* Construction Steps Section */}
      <div className="construction-steps">
        <h2>Our Construction Process</h2>
        <div className="construction-steps-grid">
          {constructionSteps.map((step, index) => (
            <div className="construction-step-card" key={index}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionServices;
