import React from "react";
import CountDownOne from "../CountDown/CountDownOne";
import Link from "next/link";
const Banner = () => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img
          src={"/img/banner/banner_shape01.png"}
          alt=""
          className="img-one"
        />
        <img
          src={"/img/banner/banner_shape02.png"}
          alt=""
          className="img-two"
        />
        <img
          src={"/img/banner/banner_shape03.png"}
          alt=""
          className="img-three"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src={"/img/icon/tokenIcon.png"} alt="" />
              <h2 className="title">
                Join <span>EtherealCashs</span> exclusive OTC phase and be part
                of the revolution in AI-driven trading.
              </h2>
            </div>
            <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                0% target raised <span>1 ERCH = $0.3</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <Link href="#contact">
                <button class="btn glow-on-hover btn-lg btn-block d-flex justify-content-center align-items-center">
                  <span class="d-none d-md-block">
                    Be the First to Join the Future of AI Trading with
                    EtherealCash!
                  </span>
                  <span class="d-block d-md-none">
                    Contact for OTC
                  </span>
                </button>
              </Link>

              {/* <CountDownOne /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
