import React from "react";

const CompaniesShowcase = () => {
  // Structured data for companies
  const companies = [
    {
      category: "AI & Machine Learning",
      items: [
        {
          name: "Google AI",
          logo: "/img/google-ai.svg",
          description: "Advanced AI tools for data processing.",
        },
        {
          name: "Ethereum",
          logo: "/img/ethereum.svg",
          description: "Smart contract platform for ERCH.",
        },
     
        {
          name: "Microsoft Azure",
          logo: "/img/microsoft-azure.svg",
          description: "Cloud and AI platform.",
        },
      ],
    },
    {
      category: "Blockchain & Cryptocurrency",
      items: [
        {
          name: "OpenAI",
          logo: "/img/openai.png",
          description: "AI for trading insights and analysis.",
        },
        {
          name: "Polygon",
          logo: "/img/polygon.png",
          description: "Low-cost blockchain for faster transactions.",
        },
        {
          name: "Google Cloud",
          logo: "/img/google-cloud.svg",
          description: "Cloud computing and data storage.",
        },
       
      ],
    },
    {
      category: "Cloud Infrastructure & Hosting",
      items: [
      
        {
          name: "Chainlink",
          logo: "/img/chainlink.svg",
          description: "Decentralized oracle for blockchain data.",
        },
       
        {
          name: "AWS SageMaker",
          logo: "/img/sagemaker.svg",
          description: "Train and deploy ML models.",
        },
        {
          name: "AWS",
          logo: "/img/aws.svg",
          description: "Cloud services for hosting and AI tools.",
        },
      ],
    },

    // Add other categories here
  ];

  return (
    <section  id="partners" className="companies-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <h2 >Technologies & Partners</h2>
              <p>We rely on world-class technologies to build Signal Vase.</p>
            </div>
          </div>
        </div>
        {companies.map((category, index) => (
          <div key={index} className="company-category pb-50">
            {/* <h3 className="category-title">{category.category}</h3> */}
            <div className="row">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="col-lg-4 col-md-6 col-sm-12 text-center mb-4"
                >
                  <div
                    className="company-item button"
                    style={{
                      border: "2px solid #00c4f4",
                      borderRadius: "8px",
                      padding: "20px",
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(0, 196, 244, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="company-logo"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <h4
                      className="company-name mt-3"
                      style={{ color: "#00c4f4" }}
                    >
                      {item.name}
                    </h4>
                    <p
                      className="company-description"
                      style={{ color: "#fff" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesShowcase;
