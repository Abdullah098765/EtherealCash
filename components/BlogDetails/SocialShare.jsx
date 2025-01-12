import { useRouter } from "next/router";

const SocialShare = () => {
  const router = useRouter();
  const currentURL = typeof window !== "undefined" ? window.location.href : "";

  const socialLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentURL)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentURL)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=Check out this blog!`,
    email: `mailto:?subject=Check out this blog!&body=I found this interesting blog: ${encodeURIComponent(currentURL)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(currentURL)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(currentURL)}&text=Check out this blog!`
  };

  return (
    <div className="blog-details-social d-flex justify-content-center align-items-center w-100">
      <ul className="list-unstyled d-flex">
        <li className="social-title me-3">Share</li>
        <li className="me-3">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="me-3">
          <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest"></i>
          </a>
        </li>
        <li className="me-3">
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li className="me-3">
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="me-3">
          <a href={socialLinks.email} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="me-3">
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
        <li className="me-3">
          <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;
