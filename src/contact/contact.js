import { useState } from "react";
import "./contact.css";
import { GiWorld } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsPlus, BsDash } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import img from "../images/blogContent1.png";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

export function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqItems = [
    {
      question: "Do you share facilities and public proposes?",
      answer: "Yes, we do share facilities for public purposes. Our apartments come with common areas like gardens, gyms, and community halls that can be used by all residents. We believe in creating spaces that foster community interaction."
    },
    {
      question: "What cities do you provide service in?",
      answer: "We currently provide our services in major metropolitan cities including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, and Kolkata. We're continuously expanding to new locations to serve more customers."
    },
    {
      question: "What kind of interior designers are you?",
      answer: "We are full-service interior designers specializing in residential and commercial spaces. Our team includes experts in modern, contemporary, minimalist, and traditional design styles. We focus on creating functional, beautiful spaces that reflect our clients' personalities and needs."
    }
  ];

  return (
    <div className="contact">
      <div className="contact-header">
        <div className="header-content">
          <h1>Contact Us</h1>
          <p>Home / Contact</p>
        </div>
      </div>

      <div className="main-container">
        <div className="faq-section">
          <h2>Frequently Asked <span>Questions</span></h2>
          
          <div className="accordion">
            {faqItems.map((item, index) => (
              <div className="accordion-item" key={index}>
                <div className="accordion-header" onClick={() => toggleFaq(index)}>
                  <p>{item.question}</p>
                  <span className="accordion-icon">
                    {openFaq === index ? <BsDash /> : <BsPlus />}
                  </span>
                </div>
                {openFaq === index && (
                  <div className="accordion-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="image-section">
          <img src={img} alt="Interior design" />
        </div>
      </div>

      {/* Dark Contact Info Section - Replacing the form div with this new section */}
      <div className="dark-contact-section">
        <div className="dark-contact-content">
          <h2>We love meeting new people</h2>
          <p className="subtitle">and helping them.</p>
          
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="info-icon">
                <HiOutlineMail />
              </div>
              <p>pravinpunita@neeev.in</p>
            </div>
            
            <div className="contact-info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="address-info">
                <p>Aashiana Apartments, Mayur Vihar, Phase 1</p>
                <p>Extension, New Delhi, 110091, India</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="info-icon">
                <BsTelephone />
              </div>
              <p>+91 9811 693 881</p>
            </div>
            
            <div className="contact-info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="address-info">
                <p>3/41, Raj Palace, Sector-5, Sahibabad,</p>
                <p>Ghaziabad UP</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="info-icon">
                <GiWorld />
              </div>
              <p>https://neeev.in</p>
            </div>
          </div>
          
          <div className="social-icons">
            <a href="https://www.facebook.com/neeev.interior?mibextid=qi2Omg&rdid=dtYlTOHIU6goeqMw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FnzTixfDkE4aBADEn%2F%3Fmibextid%3Dqi2Omg#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/neeev-interiors/" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/neeevinteriors?utm_source=qr&igsh=MWZmNWk5a2h4anRkMw%3D%3D" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <div className="map-title">
          <h3>Temporary Apartments</h3>
          <p>Find us on the map</p>
        </div>
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6548.45295053092!2d77.34764487762685!3d28.680728737891865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb3bb6682861%3A0x5822d89c86b4eaa2!2sNEEEV%20Interiors%20and%20Architecture!5e0!3m2!1sen!2sin!4v1740365294256!5m2!1sen!2sin"
            title="map"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

    </div>
  );
}