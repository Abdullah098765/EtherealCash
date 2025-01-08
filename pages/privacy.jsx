import React from "react";
import Link from "next/link";

const Privacy = () => {
  return (
    <div
      className="privacy-page py-5"
      style={{ backgroundColor: "#040e18", color: "#ffffff" }}
    >
      <div className="container">
        <h1 className="text-center mb-4" style={{ color: "#00c4f4" }}>
          Privacy Policy
        </h1>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            1. Introduction
          </h2>
          <p>
            Your privacy is important to us. This Privacy Policy explains how
            Signal Vase collects, uses, and protects your personal information.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            2. Information We Collect
          </h2>
          <p>
            <strong>Personal Information:</strong> Includes your name, email
            address, and other details provided during registration.
          </p>
          <p>
            <strong>Financial Information:</strong> Details related to
            EtherealCash transactions.
          </p>
          <p>
            <strong>Usage Data:</strong> Information such as IP addresses,
            browser types, and interactions with our platform.
          </p>
          <p>
            <strong>Cookies and Tracking Technologies:</strong> We use these to
            enhance user experience and analyze website performance.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            3. How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <ul>
            <li>Operate and maintain our platform.</li>
            <li>Provide customer support and resolve issues.</li>
            <li>Send updates, newsletters, or promotional materials.</li>
            <li>Improve platform functionality and user experience.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            4. Sharing of Information
          </h2>
          <p>We may share your information:</p>
          <ul>
            <li>
              With service providers for analytics, payment processing, and
              marketing.
            </li>
            <li>To comply with legal obligations.</li>
            <li>During a merger, acquisition, or sale of assets.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            5. User Rights
          </h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, correct, or delete your personal data.</li>
            <li>Opt-out of certain data processing activities.</li>
            <li>Withdraw consent or unsubscribe from communications.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            6. Security Measures
          </h2>
          <p>
            We implement industry-standard security measures to protect your
            data, including encryption, secure servers, and regular audits.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            7. Data Retention
          </h2>
          <p>
            We retain your data for as long as necessary to fulfill the purposes
            outlined in this policy. Data will be deleted or anonymized when no
            longer needed.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            8. Third-Party Links
          </h2>
          <p>
            Our platform may include links to third-party websites. We are not
            responsible for their privacy practices or content.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            9. Cookies Policy
          </h2>
          <p>
            Cookies are used to enhance your experience. For more details,
            please refer to our Cookies Policy.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
           { "10. Children’s Privacy"}
          </h2>
          <p>
            Signal Vase is not intended for individuals under the age of 14. We
            do not knowingly collect data from minors.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            11. Changes to the Privacy Policy
          </h2>
          <p>
            We may update this policy periodically. Significant changes will be
            communicated through email or platform notifications.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4" style={{ color: "#00c4f4" }}>
            12. Contact Information
          </h2>
          <p>
            For privacy-related inquiries, contact us at
            <a
              href="mailto:support@signalvase.com"
              style={{ color: "#00c4f4" }}
            >
              {" "}
              support@signalvase.com
            </a>
            .
          </p>
        </section>

        <footer className="privacy-footer text-center mt-4">
          <p>
            Return to{" "}
            <Link href="/" style={{ color: "#00c4f4" }}>
              Homepage
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Privacy;
