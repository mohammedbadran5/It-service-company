import "./contact.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import contacts from "../../assets/js/contact";
import Icon from "../../components/icon";
import Button from "../../components/button";

const Contact = () => {
  return (
    <div className="contact">
      <Header bg="white" />

      {/* CONTACTS DETAIL SECTION STARTS */}
      <section className="contacts">
        <article className="contact__info">
          <h1>Let’s talk</h1>
          <p>
          We partner with innovators, business leaders, and remarkable individuals to drive success and create lasting impact.

          </p>
          <div className="contact__hLine"></div>
          <div className="contact__contacts">
            {contacts.map((item, index) => (
              <div key={index} className="contact__aContact">
                <Icon size={50} icon={item.icon} bg="black" />
                <div className="contact__aContactInfo">
                  <h2>{item.title}</h2>
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact__hLine"></div>
          <div className="contact__icons">
            <img src="assets/facebook.svg" alt="social media icon" />
            <img src="assets/instagram.svg" alt="social media icon" />
            <img src="assets/linkedin.svg" alt="social media icon" />
          </div>
        </article>
        <article className="contact__inputs">
          <div className="contact__twoInputs">
            <Input class_name="contact__twoInputs--width" name={"First name"} />
            <Input class_name="contact__twoInputs--width" name={"Last name"} />
          </div>
          <div className="contact__twoInputs">
            <Input class_name="contact__twoInputs--width" name={"Email"} />
            <Input class_name="contact__twoInputs--width" name={"Phone"} />
          </div>
          <Input name={"Message"} />
          <div className="contacts__btnWrapper">
            <Button className="btn" text="Submit Now" color="black" />
          </div>
        </article>
      </section>
      {/* CONTACTS DETAIL SECTION ENDS */}

      <section className="map">
        <img src="assets/map.png" alt="map" />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

const Input = ({ name, class_name = "" }) => {
  const type =
    name === "Email" ? "email" : name === "Phone" ? "number" : "text";

  return (
    <div className={`contact__input ${class_name}`}>
      <label htmlFor={name}>{name}</label>
      <input type={type} />
    </div>
  );
};
