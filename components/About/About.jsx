import React from "react";

const About = () => {
  return (
    <section id="about" className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/h2_about_img.png"} alt="Mobile" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title">ABOUT Crypto ICO</span>
                <h2 className="title">
                  Bigtech Theme is the best for your ICO
                </h2>
              </div>
              <p>
              At Signal Vase, we’re revolutionizing the way traders connect, share, and profit from trading signals. Our platform empowers users to provide, review, and follow trading strategies across crypto, forex, and more. With EtherealCash (ERCH), our exclusive cryptocurrency, users can securely purchase premium signals and unlock advanced trading tools. Founded to protect traders from scams and promote transparency, Signal Vase is your trusted marketplace for trading insights.
              </p>
              <div className="about-list">
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Mouthwatering leading how
                    real formula also
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Locked-in have can mountain
                    thought
                  </li>
                </ul>
              </div>

              <a
                href={"/img/images/h2_about_img.png"}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-two"
              >
                Download Document
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img
          src={"/img/images/about_shape01.png"}
          alt="about_shape01"
          className="shape-one"
        />
        <img
          src={"/img/images/about_shape02.png"}
          alt="about_shape02"
          className="shape-two rotateme"
        />
      </div>
    </section>
  );
};

export default About;
