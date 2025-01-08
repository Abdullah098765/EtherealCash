import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import React from "react";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Mid of Q4 2021",
      title: "Concept",
      info: [
        "EVM support for parthians",
        "SubQuery Academy",
        "Proof of indexing",
      ],
    },
    {
      roadmapTitle: "Mid of Q4 2021",
      title: "Research",
      info: [
        "SubQuery Builders/Grants Program",
        "SQT Network contract internal MVP",
        "Coordinator and client SDK",
      ],
    },

    {
      roadmapTitle: "Mid of Q4 2021",
      title: "App beta test",
      info: [
        "Public testnet launch",
        "SubQuery Network Explorer and dApp",
        "Point-in-time indexing",
      ],
    },

    {
      roadmapTitle: "Mid of Q4 2021",
      title: "Token Test",
      info: [
        "SQT token generation event",
        "Public incentivize testnet launch",
        "Data traffic insights and reporting",
      ],
    },
    {
      roadmapTitle: "Mid of Q4 2021",
      title: "Alpha Test",
      info: [
        "Launch of the SubQuery Foundation",
        "Finalise research for other Layer-1 chains",
        "Liquidity mining program",
      ],
    },
    // {
    //   roadmapTitle: "Mid of Q4 2021",
    //   title: "Benefits",
    //   info: [
    //     "Mainnet launch",
    //     "Centralized exchange launch",
    //     "Public incentivize testnet",
    //   ],
    // },
    // {
    //   roadmapTitle: "Mid of Q4 2021",
    //   title: "Operational",
    //   info: [
    //     <>
    //       SubQuery launches its <br /> own parthian
    //     </>,
    //     "SubQuery Foundation",
    //   ],
    // },
  ];

  const roadmap_items1 = [
    {
      roadmapTitle: "2025",
      title: "Foundation and Growth",
      info: [
        "Onboard 100,000 active users",
        "Complete core features including EtherealCash integration",
        "Strategic partnerships with trading platforms and AI firms",
        "List EtherealCash on major exchanges to enhance liquidity",
      ],
    },
    {
      roadmapTitle: "2026",
      title: "Scaling and Monetization",
      info: [
        "Launch AI-powered exchange",
        "Expand into emerging markets like South Asia, Africa, and South America",
        "Introduce subscription plans and premium signal offerings",
      ],
    },
    {
      roadmapTitle: "2027",
      title: "Market Leadership",
      info: [
        "Introduce advanced AI tools for predictive analysis and risk management",
        "Partner with institutional investors and hedge funds",
        "Ensure global regulatory compliance",
      ],
    },
    {
      roadmapTitle: "2028",
      title: "Diversification and Dominance",
      info: [
        "Achieve 10 million active traders globally",
        "Transition to a fully decentralized system with blockchain integration",
        "Launch AI as a Service (AIaaS) to third-party platforms",
        "IPO or acquisition readiness",
      ],
    },
  ];
  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">OUr Roadmap</span>
              <h2 className="title">
                Bigtech Strategy and <br /> Project <span>Plan</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
