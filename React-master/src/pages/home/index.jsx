import "./home.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FreeTrial from "../../components/free-trial/freeTrial";
import Icon from "../../components/icon";
import React, { useEffect, useRef, useState } from "react";
import data from "../../assets/js/db.json"; 
const { services, processes, showcases1, showcases2 } = data;

function ServiceBlock({ item }) {
  return (
    <article className="services__aService">
      <Icon size={80} icon={item.icon} bg="black" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

function ProcessBlock({ item, index }) {
  return (
    <article className="process__aProcess">
      <div className="process__icon-title-div">
        <Icon size={80} icon={item.icon} bg="black" />
        <h3>{item.title}</h3>
      </div>
      <p>{item.description}</p>
      <img
        className="wrapper"
        src={`assets/${
          window.innerWidth <= 1900
            ? "wrapper2"
            : index === processes.length - 1
            ? "wrapper2"
            : "wrapper"
        }.png`}
        alt="wrapper icon"
      />
      {index !== processes.length - 1 && (
        <img className="arrow" src="assets/gray-arrow.svg" alt="arrow icon" />
      )}
    </article>
  );
}

function ShowcaseBlock({ item }) {
  return (
    <article className="showcases__aShowcase">
      <img src={`assets/${item.photo}.png`} alt="showcase" />
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

const Home = () => {
  const [isHovered, setIsHovered] = useState({
    left: false,
    right: false,
  });

  const [companiesHelped, setCompaniesHelped] = useState(0);
  const [revenueGenerated, setRevenueGenerated] = useState(0);
  const ref = useRef(null);
  const servicesRef = useRef(null);

  const animateNumber = (target, setter) => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / target));

    const increment = () => {
      if (start < target) {
        start++;
        setter(start);
        setTimeout(increment, stepTime);
      } else {
        setter(target);
      }
    };

    increment();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          
          animateNumber(330, setCompaniesHelped);
          animateNumber(230, setRevenueGenerated);
          observer.unobserve(ref.current); 
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          servicesRef.current.classList.add("animate");
        }
      },
      { threshold: 0.5 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div className="home">
      <Header bg="black" />
      <section className="hero">
        <div className="gradient" />

        <div className="hero__upper-part">
          <article className="hero__text">
            <h1>
              Empower Your <br />
              <span className="hero__text--highlighted">Business Transformation</span>
              <br />
              with Cutting-Edge IT Solutions
            </h1>
            <p>
              Unlock your business potential with innovative IT services designed to accelerate
              growth. From digital transformation to scalable infrastructure, we provide the tools
              and expertise to take your business to new heights in today's digital world.
            </p>
            <FreeTrial bg="white" />
          </article>

          <article className="hero__photo">
            <div className="hero__photo-wrapper">
              <img src="assets/hero-img.jpg" width={300} alt="home hero" />
            </div>
          </article>
        </div>
      </section>
      <section className="services" ref={servicesRef}>
        <h2>Our Services</h2>
        <h1>Innovative IT solutions for your business success.</h1>
        <div className="services__grid">
          {services.map((item, index) => (
            <ServiceBlock key={index} item={item} />
          ))}
        </div>
      </section>
      <section className="aboutUs">
        <div className="aboutUs__images">
          <img
            className="tChild"
            src="assets/home-page-top-layer-img.png"
            alt="home page"
          />
        </div>

        <div className="aboutUs__info">
          <h2>About us</h2>
          <h1>Our fundamental purpose in everything we do.</h1>
          <p className="aboutUs__long-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div ref={ref} className="aboutUs__numbers">
            <section>
              <p className="bigNumber">{companiesHelped} +</p>
              <p className="smallNumber">Companies helped</p>
            </section>
            <section>
              <p className="bigNumber">{revenueGenerated} +</p>
              <p className="smallNumber">Revenue generated</p>
            </section>
          </div>
          <FreeTrial bg="white" />
        </div>
      </section>
      <section className="process">
        <h2>Process</h2>
        <h1>Process that moves things forward</h1>
        <div className="process__flex">
          {processes.map((item, index) => (
            <ProcessBlock key={index} item={item} index={index} />
          ))}
        </div>
      </section>
      <section className="showcases">
        <h2>Recent Showcase</h2>
        <div className="showcases__flexbox">
          <div className="showcases__left-part">
            {showcases1.map((item, index) => (
              <ShowcaseBlock key={index} item={item} />
            ))}
          </div>
          <div className="showcases__right-part">
            <div className="showcases__btn">
              <FreeTrial bg="black" />
            </div>
            {showcases2.map((item, index) => (
              <ShowcaseBlock key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="testimonial">
        <img style={{ borderRadius: 500 }} src="assets/ceo-img.jpg" alt="testimonial" />
        <h2>
          “Be genuine in your assessment, and provide constructive feedback to
          benefit both potential customers and the company providing the product
          or service.”
        </h2>
        <div>
          <h3>Mohammed Badran</h3>
          <p>CEO of an ITtech</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
