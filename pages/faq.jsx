import React from "react";
import Link from "next/link";

const FAQ = () => {
  return (
    <div className="faq-page py-5" style={{ backgroundColor: "#040e18", color: "#ffffff" }}>
      <div className="container">
        <h1 className="text-center mb-4" style={{ color: "#00c4f4" }}>Frequently Asked Questions</h1>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>1. General Questions</h2>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: What is EtherealCash?</h3>
            <p>A: EtherealCash is the exclusive cryptocurrency used on the Signal Vase platform for seamless payments, trading signals, and other services.</p>
          </div>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: What is Signal Vase?</h3>
            <p>A: Signal Vase is a social media and trading marketplace where users can share and follow trading signals (crypto, forex, etc.), access AI trading tools, and make payments using EtherealCash.</p>
          </div>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: Who can use Signal Vase?</h3>
            <p>A: Anyone interested in trading or investing can use Signal Vase. However, users must be at least 18 years old or meet the age of majority in their jurisdiction.</p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>2. EtherealCash & Payments</h2>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: How do I acquire EtherealCash?</h3>
            <p>A: You can buy EtherealCash by contacting us via the contact form or email. Soon, EtherealCash will also be available for purchase on centralized and decentralized exchanges.</p>
          </div>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: Are EtherealCash transactions secure?</h3>
            <p>A: Yes, EtherealCash transactions are secured using blockchain technology, ensuring transparency and immutability.</p>
          </div>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: Can I get a refund for EtherealCash payments?</h3>
            <p>A: Refunds for EtherealCash payments are not guaranteed due to the nature of cryptocurrency transactions.</p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>3. Signal Sharing & AI Tools</h2>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: What are trading signals?</h3>
            <p>A: Trading signals are recommendations or data points shared by experienced traders to help others make informed trading decisions.</p>
          </div>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: How does the AI trading system work?</h3>
            <p>A: The AI system analyzes market trends, news, and historical data to provide intelligent trading insights. However, users are responsible for their own trading decisions.</p>
          </div>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: Can I trust the signals shared on Signal Vase?</h3>
            <p>A: Signal Vase uses a rating and review system to promote transparency and help users identify trustworthy signal providers.</p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>4. Accounts & Security</h2>
          <div className="faq-item mb-3">
            <h3 className="h6">Q: How do I create an account?</h3>
            <p>A: Visit the <a  href="https://www.signalvase.com/home?signup=true" style={{ color: "#00c4f4" }}>App</a> and follow the instructions to create your account.</p>
          </div>
         
          <div className="faq-item mb-3">
            <h3 className="h6">Q: How is my data secured?</h3>
            <p>A: We take user privacy seriously. Please review our <Link href="/privacy" style={{ color: "#00c4f4" }}>Privacy Policy</Link> to learn more.</p>
          </div>
        </section>

        <footer className="faq-footer text-center mt-4">
          <p>Have more questions? Contact us at <a href="mailto:support@signalvase.com" style={{ color: "#00c4f4" }}>support@signalvase.com</a>.</p>
          <p>Return to <Link href="/" style={{ color: "#00c4f4" }}>Homepage</Link></p>
        </footer>
      </div>
    </div>
  );
};

export default FAQ;
