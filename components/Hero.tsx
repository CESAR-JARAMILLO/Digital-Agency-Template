const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__subheading">Welcome to Our Agency</p>
          <h1 className="hero__title">
            Boost Your Business with Expert Solutions
          </h1>
          <p className="hero__description">
            We build high-performing digital experiences that grow your brand
            and increase revenue.
          </p>
          <ul className="hero__bullets">
            <li>Custom websites that drive traffic</li>
            <li>Email automation that converts</li>
            <li>Ongoing support and optimization</li>
          </ul>
        </div>

        <div className="hero__form-wrapper">
          <h2 className="hero__form-title">Work With Us</h2>
          <p className="hero__form-description">
            Fill out the form and we’ll get back to you within 24 hours.
          </p>
          <form className="hero__form">
            <input
              type="text"
              placeholder="Full Name"
              className="hero__input"
            />
            <input type="email" placeholder="Email" className="hero__input" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="hero__input"
            />
            <button type="submit" className="hero__submit">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
