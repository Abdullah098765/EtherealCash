import React from "react";

const WriteForUs = () => {
  return (
    <div className="row justify-content-center w-100" style={{ backgroundColor: "#030b15", color: "#ffffff", minHeight: "100vh", padding: "2rem 0" }}>
      <div className="col-lg-8 col-md-10 w-100">
        <div className="card shadow" style={{ backgroundColor: "#030b15", border: "1px solid #00c4f4", borderRadius:"5px" }}>
          <div className="card-body">
            <h1 className="text-center mb-4" style={{ color: "#00c4f4" }}>Write for Us</h1>
            <p className="lead">
              Are you passionate about trading, cryptocurrency, or investing? Do you have insights, strategies, or tips that could benefit a
              community of traders and investors? We’re looking for guest contributors to share valuable content with our audience.
            </p>

            <h2 className="h4 mt-4" style={{ color: "#00c4f4" }}>Why Write for Us?</h2>
            <ul className="list-group list-group-flush" style={{ backgroundColor: "#030b15" }}>
              <li className="list-group-item" style={{ backgroundColor: "#030b15", color: "#ffffff" }}>
                Showcase your expertise in the trading and crypto community.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#030b15", color: "#ffffff" }}>
                Gain exposure to a targeted audience of traders and investors.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#030b15", color: "#ffffff" }}>
                Build your portfolio with published articles.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#030b15", color: "#ffffff" }}>
                Get backlinks to your website or social profiles.
              </li>
            </ul>

            <h2 className="h4 mt-4" style={{ color: "#00c4f4" }}>Topics We Cover</h2>
            <p>
              We welcome articles on a variety of topics, including but not limited to:
            </p>
            <ul>
              <li>Trading strategies (crypto, forex, stocks, etc.)</li>
              <li>Cryptocurrency news and analysis</li>
              <li>Blockchain technology</li>
              <li>Technical and fundamental analysis</li>
              <li>AI in trading</li>
              <li>Market trends and predictions</li>
              <li>Personal trading experiences and lessons</li>
            </ul>

            <h2 className="h4 mt-4" style={{ color: "#00c4f4" }}>Submission Guidelines</h2>
            <ul>
              <li>Articles must be original and unpublished.</li>
              <li>Word count: 5 00–2,000 words.</li>
              <li>Use a professional, informative, and engaging tone.</li>
              <li>Include subheadings, bullet points, and short paragraphs for readability.</li>
              <li>Provide copyright-free images or relevant charts (if applicable).</li>
              <li>Include up to 2 relevant backlinks.</li>
            </ul>

            <h2 className="h4 mt-4" style={{ color: "#00c4f4" }}>How to Submit</h2>
            <p>
              Email your article to <a href="mailto:contact@etherealcash.com" style={{ color: "#00c4f4" }}>contact@etherealcash.com</a> with the subject line
              “Guest Post Submission: [Proposed Title].” Attach your article as a Word document and include a short author bio (50–100 words) with
              links to your website or social profiles.
            </p>

            <h2 className="h4 mt-4" style={{ color: "#00c4f4" }}>Contact Us</h2>
            <p>
              Have questions? Feel free to reach out at <a href="mailto:contact@etherealcash.com" style={{ color: "#00c4f4" }}>contact@etherealcash.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteForUs;
