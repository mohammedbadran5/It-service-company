import "./footer.scss";
import LOGO from "../logo";
import Button from "../button";
import Icon from "../icon";
import { useState, useEffect } from "react";

const Footer = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 450) setMobile(true);
  }, []);

  return (
    <div className="footer">
      <section className="footer__upper-part">
        <div className="footer__logo">
          <div className="footer_logoWrapper">
            <LOGO color="white" />
          </div>
          <p>
          We're a team of strategic creators and digital innovators, united in our pursuit of mastery and joy.
          </p>
        </div>
        <div className="footer__pages">
          <h1>Pages</h1>
          <a href="/" className="footer__p">Home</a>
          <a href="/about" className="footer__p">About</a>
          <a href="/project" className="footer__p">Project</a>
          <a href="/contact" className="footer__p">Contact Us</a>
        </div>

        <div className="footer__utilities">
          <h1>Services</h1>
          <p className="footer__p">Content Marketing</p>
          <p className="footer__p">Graphic Design</p>
          <p className="footer__p">Digital Marketing</p>
          <p className="footer__p">Web Design</p>
          <p className="footer__p">IT Consulting</p>
          <p className="footer__p">Brand Identity</p>
        </div>
        <div className="footer__sub-parent">
          <h1>Subscribe</h1>
          <div className="footer__subscribe">
            <input type="email" placeholder="Enter your email here" />
            <div className="footer__btn-wrapper">
              <Button text="Subscribe" color={mobile ? "white" : "black"} />
            </div>
          </div>
        </div>
      </section>

     

     
    </div>
  );
};

export default Footer;
