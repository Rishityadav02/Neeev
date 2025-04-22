import React from "react";
import "./InteriorDesign.css"; // Ensure you have the updated CSS file
import topImage from "../interior-top.jpg"; // Replace with your image path
import leftImage from "../interior-left.png"; // Replace with your image path

const services = [
  {
    title: "Space Planning & Optimization",
    description:
      "By focusing on your space, we can guarantee that it is made most of. We arrange it to be more efficient, thereby improving the flow of people around and making the best use of every inch available.",
  },
  {
    title: "Interior Design & Decoration",
    description:
      "Our designers work with you from conception through furniture purchase to give you a look that is both stylistically consistent and represents your preferences. They gather quality lighting fixtures, furniture, and other items for a beautiful and useful living room.",
  },
  {
    title: "Material & Finish Selection",
    description:
      "We provide an extensive selection of materials, finishes, and color palettes so you can realize the design of your dreams. Our great attention to detail guarantees a finished product that is flawlessly executed and aesthetically appealing.",
  },
  {
    title: "Custom Millwork & Built-ins",
    description:
      "We work with expert artisans to create custom millwork and built-in furniture that merge seamlessly into your space and cater to your specific desires.",
  },
  {
    title: "Luxury Interior Design",
    description:
      "We have a group of well-trained designers who create an individualized lavish home that is highly elaborate for our customers.",
  },
  {
    title: "3D Visualization",
    description:
      "Our use of new 3D visualization technology will give you a virtual tour of your final product. It enables you to make sound choices and see the overall changes before starting construction.",
  },
];

const InteriorDesign = () => {
  return (
    <div className="interior-design">
      {/* Top Image */}
      <img src={topImage} alt="Interior Design" className="top-image" />

      {/* Hero Section */}
      <div className="hero-section">
        {/* Left Image */}
        <img src={leftImage} alt="Luxury Interior" className="left-image" />
        <div className="hero-content">
          <h1>Interior Design Studio</h1>
          <p>
            Transform your space with our expertise in interior design. From space
            planning to 3D visualization, we ensure every detail aligns with your
            vision.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Comprehensive Interior Design Studio Services</h2>
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

export default InteriorDesign;
