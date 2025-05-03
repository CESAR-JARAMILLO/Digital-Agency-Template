const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>

        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">Digital Solutions Agency</h1>
            <h2 className="hero__subtitle">
              Outsmart the competition with expert digital solutions that drive
              growth.
            </h2>
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
            <h2 className="hero__form-title">Grow Your Business</h2>
            <p className="hero__form-description">
              by taking this first easy step
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
                Get Your Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
