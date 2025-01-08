import React from "react";
import Link from "next/link";

const Terms = () => {
  return (
    <div className="terms-page py-5" style={{ backgroundColor: "#040e18", color: "#ffffff" }}>
      <div className="container">
        <h1 className="text-center mb-4" style={{ color: "#00c4f4" }}>Terms of Service</h1>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>1. Introduction</h2>
          <p>
            Welcome to Signal Vase! By accessing or using our platform, you agree
            to these Terms of Service. These terms govern your use of our
            services, including trading signals, AI tools, and EtherealCash
            transactions.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>2. Acceptance of Terms</h2>
          <p>
            By creating an account or using our services, you accept these terms
            and agree to abide by them. Signal Vase reserves the right to update
            these terms at any time, with changes effective upon notice via
            email or platform announcement.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>3. Eligibility</h2>
          <p>
            To use Signal Vase, you must be at least 14 years old or the age of
            majority in your jurisdiction. You are responsible for complying
            with local laws and regulations.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>4. Platform Use</h2>
          <p>
            You agree to use Signal Vase only for lawful purposes. Prohibited
            activities include fraudulent trading signals, scams, and activities
            that violate the rights of others.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>5. Paid Services and Cryptocurrency (EtherealCash)</h2>
          <p>
            Payments for signals and services are made using EtherealCash. Due
            to the nature of cryptocurrency, refunds are not guaranteed. Signal
            Vase is not liable for losses incurred due to market volatility or
            trading risks.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>6. Content and Signal Sharing</h2>
          <p>
            Users retain ownership of their signals but grant Signal Vase a
            license to display and distribute them. Users are responsible for
            the accuracy and reliability of the signals they share.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>7. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials. Signal Vase reserves the right to suspend or
            terminate accounts violating these terms.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>8. Privacy and Data</h2>
          <p>
            Signal Vase respects your privacy. Please review our
            <Link href="/privacy"> Privacy Policy</Link> to understand how we
            handle your data.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>9. AI Tools and Automation</h2>
          <p>
            Our AI tools provide trading insights but are not guaranteed to be
            accurate. Users assume full responsibility for trading decisions
            based on AI-generated signals.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>10. Community Guidelines</h2>
          <p>
            All users must engage respectfully with the Signal Vase community.
            Harassment, abusive language, and spamming are strictly prohibited.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>11. Intellectual Property</h2>
          <p>
            Signal Vase owns the platform, branding, and related content.
            Unauthorized use of our intellectual property is prohibited.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>12. Disclaimers and Limitation of Liability</h2>
          <p>
            Signal Vase provides no guarantees regarding trading success. We are
            not liable for any losses incurred during trading or cryptocurrency
            transactions.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>13. Termination of Use</h2>
          <p>
            Signal Vase reserves the right to terminate user access for
            violations of these terms or applicable laws.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>14. Dispute Resolution</h2>
          <p>
            Disputes will be resolved through arbitration under law. Users agree to binding arbitration as the sole
            method of dispute resolution.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>15. Contact Information</h2>
          <p>
            For questions or concerns regarding these terms, contact us at
            <a href="mailto:support@signalvase.com" style={{ color: "#00c4f4" }}> support@signalvase.com</a>.
          </p>
        </section>

        <footer className="terms-footer text-center mt-4">
          <p>
            Return to <Link href="/" style={{ color: "#00c4f4" }}>Homepage</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Terms;
