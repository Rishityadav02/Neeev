import "./services.css";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import photo1 from "../images/services1.jpg";
import icon1 from "../images/Icon1.svg";
import photo2 from "../images/services2.jpg";
import icon2 from "../images/Icon2.svg";
import photo3 from "../images/services3.jpg";
import icon3 from "../images/Icon3.svg";
import photo4 from "../images/services4.jpg";
import icon4 from "../images/Icon4.svg";

export function Services() {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log("pClass1", pClass);
    if (e.target.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.classList.add("selected-type");
    } else if (e.target.className === "service-type selected-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };

  const handleChangeTwo = (e) => {
    const pClass = e.target.parentElement.parentElement;
    console.log("pClass2", pClass);
    if (e.target.parentElement.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.parentElement.classList.add("selected-type");
    } else if (
      e.target.parentElement.className === "service-type selected-type"
    ) {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };

  return (
    <div className="services">
      <div className="services-header">
        <h1>
          Services<p>Home / Services</p>
        </h1>
      </div>
      <div className="service-types">
  <div className="service-type" onClick={handleChange}>
    <h2 onClick={handleChangeTwo}>Interior Design Studio</h2>
    <p onClick={handleChangeTwo}>
      At NEEEV, we blend style with functionality to create spaces that reflect you. Whether it’s a full home makeover or a single-room.
    </p>
    <Link to="/interior-design">
      <button>
        Read More <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
      </button>
    </Link>
  </div>

  <div className="service-type" onClick={handleChange}>
    <h2 onClick={handleChangeTwo}>Architecture</h2>
    <p onClick={handleChangeTwo}>
      Our experts transform ideas into stunning, functional spaces. We craft designs beyond expectations, making a dream reality.
    </p>
    <Link to="/architecture">
      <button>
        Read More <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
      </button>
    </Link>
  </div>

  <div className="service-type" onClick={handleChange}>
    <h2 onClick={handleChangeTwo}>Professional Training</h2>
    <p onClick={handleChangeTwo}>
      Enhance your team’s productivity with tailored training in communication, leadership, and more.
    </p>
    <Link to="/professional-training">
      <button>
        Read More <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
      </button>
    </Link>
  </div>

  <div className="service-type" onClick={handleChange}>
    <h2 onClick={handleChangeTwo}>Construction Services</h2>
    <p onClick={handleChangeTwo}>
      From homes to commercial spaces, We deliver top-quality construction with precision, efficiency, and budget-friendly execution.
    </p>
    <Link to="/construction-services">
      <button>
        Read More <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
      </button>
    </Link>
  </div>
</div>

      <div className="howWeWork">
        <div className="how-title">
          <h1>Your Blueprint for Perfect Interiors</h1>
          <p>
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="how-content">
          <div className="hc-img">
            <img src={photo1} alt="concept"></img>
          </div>
          <div className="hc-text">
            <div className="hc-text-anima">
              <img src={icon1} alt="icon"></img>
              <p>01</p>
            </div>
            <div className="hc-subtext">
              <h2>Concept & Details</h2>
              <p>
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy from text of the and typesetting indufstry.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="how-content">
          <div className="hc-text">
            <div className="hc-text-anima">
              <img src={icon2} alt="icon"></img>
              <p>02</p>
            </div>
            <div className="hc-subtext">
              <h2>Idea for work</h2>
              <p>
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy from text of the and typesetting indufstry.{" "}
              </p>
            </div>
          </div>
          <div className="hc-img">
            <img src={photo2} alt="concept"></img>
          </div>
        </div>

        <div className="how-content">
          <div className="hc-img">
            <img src={photo3} alt="concept"></img>
          </div>
          <div className="hc-text">
            <div className="hc-text-anima">
              <img src={icon3} alt="icon"></img>
              <p>03</p>
            </div>
            <div className="hc-subtext">
              <h2>Design</h2>
              <p>
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy from text of the and typesetting indufstry.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="how-content">
          <div className="hc-text">
            <div className="hc-text-anima">
              <img src={icon4} alt="icon"></img>
              <p>04</p>
            </div>
            <div className="hc-subtext">
              <h2>Perfection</h2>
              <p>
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy from text of the and typesetting indufstry.{" "}
              </p>
            </div>
          </div>
          <div className="hc-img">
            <img src={photo4} alt="concept"></img>
          </div>
        </div>
      </div>

      <div className="neeev">
        <h1>Wanna join Neeev?</h1>
        <p>Shape the future with us—where ideas meet execution.</p>
        <Link>
          <button>
            Contact With Us
            <AiOutlineArrowRight style={{ marginLeft: "8px" }} />
          </button>
        </Link>
      </div>
    </div>
  );
}
