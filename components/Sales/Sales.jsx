import React from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Sales = () => {
  const chartInfoList = [
    "Technology Development: 30%",
    "Marketing & User Acquisition: 35%",
    "Operations & Team Building: 15%",
    "Legal & Compliance: 10%",
    "Reserve Fund: 10%",
  ];

  return (
    <section id="allocation" className="chart-area chart-bg">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            {/* Chart Section */}
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={"/img/images/chart.png"} alt="EtherealCash Chart" />
                <ul>
                  {chartInfoList.map((info, index) => (
                    <li key={index} style={{textWrap:"nowrap", margin:"5px"}}>{info}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="salesTab" role="tablist">
                  <SalesTabButton
                    title="Funding Allocation"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title="Token Distribution"
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" id="salesTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="Funding Allocation Overview"
                    description="Our funding strategy ensures optimal allocation across critical areas such as technology, marketing, and compliance to drive platform growth and sustainability."
                    link="#contact"
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title="Token Distribution Plan"
                    description="EtherealCash tokens are distributed to support ecosystem growth, incentivize participation, and ensure a robust, transparent economy."
                    link="#contact"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
