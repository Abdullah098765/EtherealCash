import React, { useState, useEffect } from "react";
import cn from "classnames";
import $ from "jquery";
import { useRouter } from "next/router";
import Link from "next/link";

let flag = true;

const HeaderTwo = () => {
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: "active-height",
    header: "sticky-menu",
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: "", header: "" })
        : setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    if (flag === true) {
      //SubMenu Dropdown Toggle
      if ($(".menu-area li.menu-item-has-children ul").length) {
        $(".menu-area .navigation li.menu-item-has-children").append(
          '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
        );
      }

      //Mobile Nav Hide Show
      if ($(".mobile-menu").length) {
        var mobileMenuContent = $(".menu-area .main-menu").html();
        $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

        //Dropdown Button
        $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
          "click",
          function () {
            $(this).toggleClass("open");
            $(this).prev("ul").slideToggle(500);
          }
        );
        //Menu Toggle Btn
        $(".mobile-nav-toggler").on("click", function () {
          $("body").addClass("mobile-menu-visible");
        });

        //Menu Toggle Btn
        $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
          $("body").removeClass("mobile-menu-visible");
        });
      }
    }

    flag = false;
  }, []);

  // scroll to element by id
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // active link switching
  const [hash, setHash] = useState("");
  const { asPath, pathname } = useRouter();

  useEffect(() => {
    setHash(asPath.split("#")[1]);
  }, [asPath]);

  const isActiveLink = (id) => {
    return id == "#" + hash ? "active" : "";
  };

  return (
    <header id="header">
      <div
        id="sticky-header"
        className={cn(
          "menu-area menu-style-two transparent-header",
          stickyClass.header
        )}
      >
        <div className="container custom-container-three">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars"></i>
              </div>

              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link href="/">
                      <img src={"/img/logo/logo.png"} alt="" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li
                        className={cn(
                          (!hash || hash == "header") && "active",
                          " menu-item-has-children"
                        )}
                      >
                        <Link
                          href="/"
                          className="section-link"
                          onClick={() => handleClickScroll("header")}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={cn(hash == "about" && "active")}>
                        <a
                          href="https://etherealcash.com/#about"
                          className="section-link"
                          onClick={() => handleClickScroll("about")}
                        >
                          About us
                        </a>
                      </li>
                      {/* <li className={isActiveLink("#roadmap")}>
                        <Link
                          href="https://etherealcash.com/#allocation"
                          className="section-link"
                          // onClick={() => handleClickScroll("roadmap")}
                        >
                          Roadmap
                        </Link>
                      </li> */}
                      <li className={isActiveLink("#faq")}>
                        <Link
                          href="https://etherealcash.com/faq"
                          className="section-link"
                          onClick={() => handleClickScroll("faq")}
                        >
                          Faq
                        </Link>
                      </li>
                      <li className={"menu-item-has-children"}>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li className={isActiveLink("#contact")}>
                        <Link
                          href="https://etherealcash.com/#contact"
                          className="section-link"
                          onClick={() => handleClickScroll("contact")}
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="header-lang">
                        {/* <span className="selected-lang">ENG</span> */}
                        {/* <ul className="lang-list">
                          <li>
                            <Link href="#">IND</Link>
                          </li>
                          <li>
                            <Link href="#">BNG</Link>
                          </li>
                          <li>
                            <Link href="#">TUR</Link>
                          </li>
                          <li>
                            <Link href="#">CIN</Link>
                          </li>
                        </ul> */}
                      </li>
                      <li className="header-btn">
                        <Link
                          href="https://etherealcash.com/#contact"
                          className="btn"
                        >
                          Buy Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="nav-logo">
                    <Link href="/">
                      <img src={"/img/logo/logo.png"} alt="" title="" />
                    </Link>
                  </div>
                  <div className="menu-outer">
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                  </div>

                  <div className={"social-links"}>
                    <ul className="clearfix">
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
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop"></div>
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
