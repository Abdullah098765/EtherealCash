import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactOneForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_kejp4oi",
        "template_poom3i4",
        e.target,
        "JdzAJouwsA2LrVGXG"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setIsSending(false)
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSending(false)
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      )
  };
 
  return (
    <div className="contact-form-wrap">
      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <textarea
            name="message"
            placeholder="Enter your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="submit-btn text-center">
          <button type="submit" className="btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      <div
        className="contact-info text-white bg-transparent p-4 rounded shadow-lg"
        style={{
          WebkitBackdropFilter: "blur(10px)", // For WebKit browsers
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* <h3 class="text-center fw-bold mb-4"></h3> */}
        <div class="row gx-4 gy-3 align-items-stretch">
          <div class="col-md-6">
            <div
              class="p-4 rounded h-100 shadow-sm"
              style={{
                WebkitBackdropFilter: "blur(10px)", // For WebKit browsers
                backdropFilter: "blur(10px)",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <h4 class="fw-semibold mb-3 d-flex align-items-center">
                <i class="bi bi-envelope-fill me-2"></i> Email Us
              </h4>
              <p class="mb-2">
                <a
                  href="mailto:contact@signalvase.com"
                  class="text-white text-decoration-none"
                >
                  contact@signalvase.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@etherealcash.com"
                  class="text-white text-decoration-none"
                >
                  contact@etherealcash.com
                </a>
              </p>
            </div>
          </div>
{/* 
          <div class="col-md-6">
            <div
              class="p-4 rounded h-100 shadow-sm"
              style={{
                WebkitBackdropFilter: "blur(10px)", // For WebKit browsers
                backdropFilter: "blur(10px)",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <h4 class="fw-semibold mb-3 d-flex align-items-center">
                <i class="bi bi-whatsapp me-2"></i> WhatsApp Us
              </h4>
              <p class="mb-2">
                <a
                  href="https://wa.me/923318285048"
                  target="_blank"
                  class="text-white text-decoration-none"
                >
                  +92 331 828 5048
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/923142991434"
                  target="_blank"
                  class="text-white text-decoration-none"
                >
                  +92 314 299 1434
                </a>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactOneForm;
