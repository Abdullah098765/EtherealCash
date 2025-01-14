import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img
                src={"/img/images/about_img01.png"}
                alt="EtherealCash logo"
              />
              <img
                src={"/img/images/about_img02.png"}
                alt="Bol"
                className="img-two"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                  The World’s <span>First AI-Driven Exchange</span>, Trading
                  Signals Marketplace, and Social Media Platform for Traders and
                  Investors
                </h2>
              </div>
              <p className="w-full" style={{ width: "100%" }}>
                {`At Signal Vase, we’re revolutionizing the way traders connect,
                share, and profit from trading signals. Harnessing the power of
                AI, our platform offers intelligent signal recommendations,
                automated trading insights, and advanced market analysis,
                empowering users to make data-driven decisions. Users can
                provide, review, and follow trading strategies across crypto,
                forex, and more. With EtherealCash (ERCH), our exclusive
                cryptocurrency, users can securely purchase premium signals and
                unlock AI-powered trading tools. Founded to protect traders from
                scams and promote transparency, Signal Vase combines social
                connectivity with cutting-edge AI to create a trusted
                marketplace for trading insights.`}
              </p>
              <Link href="/#contact" className="btn">
                Purchase Tokens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
