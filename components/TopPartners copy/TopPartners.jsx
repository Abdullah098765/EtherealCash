import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "AI Insights",
      link: "/",
      title: "AI-Powered Insights",
      description: "Leverage AI-driven bots for smarter trading decisions.",
    },
    {
      src: "/img/icon/choose_icon02.svg",
      alt: "Secure Transactions",
      link: "/",
      title: "Secure Signal Transactions",
      description: "Enjoy peace of mind with EtherealCash-powered payments.",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "Verified Providers",
      link: "/",
      title: "Verified Signal Providers",
      description: "Follow trusted providers with transparent ratings.",
    },
    {
      src: "/img/icon/choose_icon04.svg",
      alt: "Community",
      link: "/",
      title: "Vibrant Community",
      description: "Join a thriving social platform for traders and investors.",
    },
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "Portfolio Management",
      link: "/",
      title: "Optimized Portfolio Management",
      description: "Use AI tools to maximize your trading portfolio.",
    },
  ];

  const initialState = 0;
  const [count, setCount] = useState(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old === slider_items.length - 1 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slider_items.length]);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Why Choose Us</span>
              <h2 className="title">
                Why choose <span>EtherealCash</span> token
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
