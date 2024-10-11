import "./about.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  addvantages,
  leftTicks,
  rightTicks,
  team_members,
} from "../../assets/js/about-data";
import React from "react";
import EnoughTalk from "../../components/enough-talk";

const About = () => {
  return (
    <div className="about">
      <Header bg="white" />

      {/* HERO SECTION START */}
      <section className="aboutUsHero">
        <div className="aboutUsHero__upper-part">
          <article className="aboutUsHero__text">
            <p>Pleasure and so read the was hope.</p>
            <h1>
              Ready to take <br /> <span>your business</span> <br /> to the next
              level?
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="aboutUsHero__testimonial">
              <img
                src="assets/ceo-img.jpg"
                alt="person face"
                width={100}
                style={{ borderRadius:500 }}
              
              />
              <div className="aboutUsHero__image-related-text">
                <p>Rated 4.9/5 stars</p>
                <div className="aboutUsHero__image-related-rating">
                  <img src="assets/star.svg" alt="star icon" />
                  <img src="assets/star.svg" alt="star icon" />
                  <img src="assets/star.svg" alt="star icon" />
                  <img src="assets/star.svg" alt="star icon" />
                  <img src="assets/star.svg" alt="star icon" />
                </div>
              </div>
            </div>
          </article>
          <article className="aboutUsHero__photos">
          
            <img
              className="tChild"
              src="assets/about-page-top-layer-img.png"
              alt="team memebers"
            />
          </article>
        </div>

        <div className="aboutUsHero__lower-part">
          {addvantages.map((item, index) => (
            <div key={index} className="aService">
              <h1>{item.number}</h1>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* MISSION SECTION START */}
      <section className="mission">
        <article className="mission__left-part">
          <h2>Our Mission</h2>
          <h1>Boost your business with IT solutions.</h1>
          <p>
          Our mission is to empower your business with innovative IT solutions, driving growth and success in a digital world.
          </p>
          <div className="mission__ticks">
            <div className="ticks__left-part">
              {leftTicks.map((tick, index) => (
                <div key={index} className="aTick">
                  <img
                    src="assets/tick.svg"
                    className="aTick"
                    alt="a tick icon"
                  />
                  <p>{tick}</p>
                </div>
              ))}
            </div>
            <div className="ticks__right-part">
              {rightTicks.map((tick, index) => (
                <div key={index} className="aTick">
                  <img
                    src="assets/tick.svg"
                    className="aTick"
                    alt="a tick icon"
                  />
                  <p>{tick}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="mission__right-part">
          <div className="mission__right-img-block">
            <img
              src="assets/home-page-top-layer-img.png"
              alt="right"
              className="mission-right-img"
            />
          </div>
          <div className="mission__left-img-block">
            <div className="mission_team-members">
              <p>Team memember</p>
              <div className="team-member-imgs">
                <img src="assets/about-page-face1.png" alt="about page face" />
                <img src="assets/about-page-face2.png" alt="about page face" />
                <img src="assets/about-page-face3.png" alt="about page face" />
                <img src="assets/about-page-face4.png" alt="about page face" />
                <img src="assets/about-page-face5.png" alt="about page face" />
                <img src="assets/about-page-face6.png" alt="about page face" />
              </div>
            </div>
            <img
              className="bigImg"
              src="assets/about-page-img5.png"
              alt="about page"
            />
          </div>
        </article>
      </section>
      {/* MISSION SECTION END */}

      {/* TEAM-MEMBERS SECTION START */}
      <section className="team">
        <h1>Our team</h1>
        <div className="team__team-members">
          {team_members.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
        <EnoughTalk />
      </section>
      {/* TEAM-MEMBERS SECTION END */}

      <Footer />
    </div>
  );
};

export default About;

function TeamMember({ member }) {
  return (
    <article className="team__aMember">
      <div className="team__icons">
        <div className="team__icon">
          <img src="assets/facebook2.png" alt="social media icon" />
        </div>
        <div className="team__icon">
          <img src="assets/instagram2.png" alt="social media icon" />
        </div>
        <div className="team__icon">
          <img src="assets/linkedin2.png" alt="social media icon" />
        </div>
      </div>
      <img src={`/assets/${member.img}`} alt={member.name} />
      <h2>{member.name}</h2>
      <p>{member.position}</p>
    </article>
  );
}
