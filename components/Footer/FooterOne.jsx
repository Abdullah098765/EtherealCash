import { scrollToTop } from "@/lib/helpers";
import Link from "next/link";
import React from "react";

const  FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link href="/" className="f-logo">
                    <img src={"/img/logo/logo.png"} alt="Signal Vase Logo" />
                  </Link>
                  <div className="footer-content">
                    <p>
                      Revolutionizing trading with AI-powered insights,
                      transparency and seamless payment systems. Signal Vase
                      ensures every signal counts and builds trust in the
                      trading community.
                    </p>
                    <ul className="footer-social">
                      <li>
                        <a target="_" href="https://x.com/signalvase">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_" href="https://t.me/signal_vase">
                          <i className="fab fa-telegram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_"
                          href="https://www.linkedin.com/company/signalvase"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="fw-title">Quick Links</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="/#about">About Us</Link>
                      </li>
                      <li>
                        <a
                          target="_"
                          href="https://polygonscan.com/token/0xe53b2a27dd87ced67f5b1ba4da9754505ac4cf60"
                        >
                          Token Explorer
                        </a>
                      </li>
                      <li>
                        <Link href="/#contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="fw-title">Community</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="/#partners">Partners</Link>
                      </li>
                      {/* <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                    
                      <li>
                        <Link href="/careers">Careers</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="fw-title">Subscribe to Updates</h4>
                  <div className="footer-newsletter">
                    <p>
                      Stay updated with the latest trading insights, platform
                      updates, and exclusive opportunities from Signal Vase.
                    </p>
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2025. All Rights Reserved | Signal Vase
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-sm-block">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="/terms">Terms of Service</Link>
                    </li>
                    <li>
                      <Link href="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/write-for-us">Write For Us</Link>
                      </li>
                    <li>
                      <a
                        target="_"
                        href="https://www.signalvase.com/home?signup=true"
                      >
                        App Access
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
