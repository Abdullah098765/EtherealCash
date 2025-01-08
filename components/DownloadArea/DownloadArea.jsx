import React from "react";

const DownloadArea = () => {
  return (
    <section className="download-area pt-150 pb-140">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
            <div
              className="download-img text-center wow fadeInRight"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/download_img.png"} alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div
              className="download-content wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-20">
                <span className="sub-title">Download ICO App</span>
                <h2 className="title">
                  You can treding, control, buy and sell from your mobile
                </h2>
              </div>
              <p>
              At Signal Vase, we’re revolutionizing the way traders connect, share, and profit from trading signals. Our platform empowers users to provide, review, and follow trading strategies across crypto, forex, and more. With EtherealCash (ERCH), our exclusive cryptocurrency, users can securely purchase premium signals and unlock advanced trading tools. Founded to protect traders from scams and promote transparency, Signal Vase is your trusted marketplace for trading insights.
              </p>
              <div className="download-btn">
                <a href="#">
                  <img src={"/img/images/download_btn01.png"} alt="" />
                </a>
                <a href="#">
                  <img src={"/img/images/download_btn02.png"} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadArea;
