import "./home.css";
import photoBg from "../images/backgroung/Homebg.png";
import { Link } from "react-router-dom";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import thoughts from "./peopleThoughts.json";
import CountUp from "react-countup";
import { useState, useEffect, useRef } from "react";

import home1 from "../images/home/home1.png";
import hPoject1 from "../images/home/hProject1.jpg";
import hhProject2 from "../images/home/hProject2.jpg";
import hhProject3 from "../images/home/hProject3.jpg";
import hhProject4 from "../images/home/hProject4.jpg";
import hArticle1 from "../images/home/hArticle1.jpg";
import hArticle2 from "../images/home/hArticle2.jpg";
import hArticle3 from "../images/home/hArticle3.jpg";
import heroImage from "../images/home/heroImage.png";
import customer1 from "../images/home/customer.jpg";

export function Home() {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log(e.target);
    if (e.target.className === "article nochosen") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "article nochosen";
      }
      e.target.classList.remove("nochosen");
      e.target.classList.add("chosen");
    } else if (e.target.className === "article chosen") {
      e.target.className = "article nochosen";
    }
  };
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <div className="homeNews" style={{ backgroundImage: `url(${photoBg})` }}>
        <h1>
          Let Your <i className="quirky">Home</i> <br/>Be Unique
        </h1>
        <p>
        Transform your space into a masterpiece—where every detail tells a story.
        </p>
        <Link to="">
          <button className="animated-button">
            <span className="text-default">Let's Create!</span>
            <BsArrowRight className="arrow-icon" />
          </button>
        </Link>
      </div>
      <div className="quotes">
        <div className="pattern first" />
        <div className="content">
          <h1 className="quote-mark">“</h1>
          <p>
            {" "}
            "I like an interior that defies labeling. I don't really want
            someone to walk into a room and know that I did it."
          </p>
          <p className="author">- Unknown Designer</p>
        </div>
        <div className="pattern second" />
      </div>
      <div className="homeOther">
        <div className="homeAboutUs">
          <div className="hp-subtext">
            <h1>We Design Spaces That Define Style and Elegance</h1>
            <p>
              From modern minimalism to timeless luxury, we bring sophistication
              to life through thoughtful layouts, premium materials, and
              seamless execution.
            </p>
            <div className="callUs">
              <div className="phoneNum">
                <p className="h-icon">
                  <BsTelephone />
                </p>
                <a href="tel: +994 (070) 883-37-38">
                  <p>
                    +994 (070) 883-37-38
                    <br />
                    <span>Call Us Anytime</span>
                  </p>
                </a>
                <br />
              </div>
              <Link to={`/contact`}>
                <button>
                  Get Free Estimate
                  <BsArrowRight
                    style={{ marginLeft: "2%", color: "#CDA274" }}
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="hp-img">
            <img src={home1} alt="concept" />
          </div>
        </div>
      </div>

      <div className="people-thoughts">
        <h1>What People Think About Us</h1>
        <div className="people">
          {thoughts.people.map((req, ind) => {
            return (
              <div className="person" key={ind}>
                <div className="person-title">
                  <div>
                    <img src={customer1} alt="customer" />
                  </div>
                  <p>
                    {req.fullname}
                    <br />
                    <span>{req.country}</span>
                  </p>
                </div>
                <p className="thought">{req.thoughts}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hero-container">
        <h2 className="hero-title">
          We <em>Serve</em> Pan India
        </h2>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Luxury Interior" className="hero-image" />
        </div>
      </div>
      <div className="homeOther">
      <div className="homeProjects">
        <h1>Follow Our Projects</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page lookings at its layouts.
        </p>
        <div className="hp-list">
          <div className="hp-project">
            <div className="hp-pro-img">
              <img src={hPoject1} alt="project" />
            </div>
            <div className="hp-pro-detail">
              <div className="hp-pro-info">
                <p className="hp-prj-title">Modern Kitchen</p>
                <p className="hp-prj-path">Decor / Architecture</p>
              </div>
              <div className="hp-pro-btn">
                <Link to={`/project-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="hp-project">
            <div className="hp-pro-img">
              <img src={hhProject2} alt="project" />
            </div>
            <div className="hp-pro-detail">
              <div className="hp-pro-info">
                <p className="hp-prj-title">Modern Kitchen</p>
                <p className="hp-prj-path">Decor / Architecture</p>
              </div>
              <div className="hp-pro-btn">
                <Link to={`/project-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="hp-project">
            <div className="hp-pro-img">
              <img src={hhProject3} alt="project" />
            </div>
            <div className="hp-pro-detail">
              <div className="hp-pro-info">
                <p className="hp-prj-title">Modern Kitchen</p>
                <p className="hp-prj-path">Decor / Architecture</p>
              </div>
              <div className="hp-pro-btn">
                <Link to={`/project-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="hp-project">
            <div className="hp-pro-img">
              <img src={hhProject4} alt="project" />
            </div>
            <div className="hp-pro-detail">
              <div className="hp-pro-info">
                <p className="hp-prj-title">Modern Kitchen</p>
                <p className="hp-prj-path">Decor / Architecture</p>
              </div>
              <div className="hp-pro-btn">
                <Link to={`/project-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="home-experience" ref={ref}>
      <div className="h-years">
        {isVisible && <CountUp className="h-year num" duration={4} end={12} />}
        <p>Years Of Experience</p>
      </div>
      <div className="h-s-project">
        {isVisible && <CountUp className="h-sp num" duration={4} end={85} />}
        <p>Success Projects</p>
      </div>
      <div className="h-a-project">
        {isVisible && <CountUp className="h-ap num" duration={4} end={15} />}
        <p>Active Projects</p>
      </div>
      <div className="h-customers">
        {isVisible && <CountUp className="h-cust num" duration={4} end={95} />}
        <p>Happy Customers</p>
      </div>
    </div>
      <div className="articleNews">
        <h1>Articles & News</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts
        </p>
        <div className="articles">
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle1} alt="article" />
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle2} alt="article" />
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle3} alt="article" />
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-interno">
        <h1>Wanna join the interno?</h1>
        <p>It is a long established fact will be distracted.</p>
        <Link to={`/contact`}>
          <button>
            Contact With Us
            <AiOutlineArrowRight
              style={{ marginLeft: "5px" }}
              color="#292F36"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
