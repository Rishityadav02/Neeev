import "./about.css";
import whatWe from "../images/whatwedo.jpg";
import profile from "../images/about/imageceo.jpg";
import result from "../images/result.jpg";
import { BsArrowRight } from "react-icons/bs";

export function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>
          About Us<p>Home / About us</p>
        </h1>
      </div>
      <div className="quotes">
        <div className="pattern first">
          <p></p>
        </div>
        <div className="content">
          <h1>“</h1>
          <p className="comment">
          NEEEV is one of the trusted interior designers in Noida, Ghaziabad, Greater Noida, Gurugram, and Delhi.   We specialize in delivering exceptional personalized interior design solutions depending on your requirements. Our experience covers all aspects of interior design, ensuring that every project we work on meets the highest standards of quality and innovation.
          </p>
        </div>

        <div className="pattern second"></div>
      </div>
      <div className="about-concept">
        <div className="con firstPart">
          <div className="c-text">
            <h1>What We Do</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button>
              Our Concept
              <BsArrowRight style={{ color: "#CDA274", marginLeft: "3%" }} />
            </button>
          </div>
          <div className="concept-img">
            <img src={whatWe} alt="concept"></img>
          </div>
        </div>

        <div className="con secondPart">
          <div className="concept-img">
            <img src={result} alt="concept"></img>
          </div>
          <div className="c-text">
            <h1>What We Do</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button>
              Our Concept
              <BsArrowRight style={{ color: "#CDA274", marginLeft: "3%" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="why-neev">
      <div className="why-neev-left">
        <h2>
          <span>Why <i>Neev?</i></span>
        </h2>
        <h1>Designing Spaces, Building Relationships</h1>
        <p>
          Some of the key highlights that would make NEEEV stand out from other
          competitors are
        </p>
      </div>

      <div className="why-neev-right">
        <div className="why-neev-box">
          <div className="why-neev-icon">🏅</div>
          <div className="why-neev-text">
            <h3>Designed for You, Built to Perfection</h3>
            <p>
              We combine global design trends with local touches to craft spaces
              that truly reflect your style and needs.
            </p>
          </div>
        </div>

        <div className="why-neev-box">
          <div className="why-neev-icon">👓</div>
          <div className="why-neev-text">
            <h3>Your Vision, Our Mission</h3>
            <p>
              Tell us your ideas, budget, and timeline—we’ll bring them to life
              with you every step of the way!
            </p>
          </div>
        </div>

        <div className="why-neev-box">
          <div className="why-neev-icon">🛡️</div>
          <div className="why-neev-text">
            <h3>Trust, Transparency, Commitment</h3>
            <p>
              No hidden surprises! We keep everything clear and deliver exactly
              what we promise.
            </p>
          </div>
        </div>

        <div className="why-neev-box">
          <div className="why-neev-icon">🧑‍🤝‍🧑</div>
          <div className="why-neev-text">
            <h3>Experts You Can Rely On</h3>
            <p>
              Our skilled professionals ensure top-notch quality, no matter the
              project size or complexity.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="card-container">
      <div className="card-content">
        <img src={profile} alt="Profile" className="profile-image" />
        <div className="text-content">
          <h2>Find Professional And Customer Friendly Responses</h2>
          <p>
            We know how to prioritize professionalism and client-centered
            approaches. Every project is diverse, so we listen to your
            particular ideas and needs. Instead of just meeting these
            requirements with our Design-Build resolutions, we would rather go
            beyond what is expected with honesty and commitment to fulfilling
            our promises.
          </p>
          <p>
            NEEEV has earned a name for itself in different market segments. We
            have significant experience across several sectors and excel due to
            our exceptionally skilled and committed teams. Every staff at NEEEV
            is very proud to offer the best possible services to clients,
            leaving no room for error when it comes to any projects being done
            here.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
