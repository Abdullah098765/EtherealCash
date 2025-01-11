import React from "react";
import Link from "next/link";

const WhitePaper = () => {
  return (
    <section className="document-area pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 order-2 order-lg-0">
            <div
              className="document-img text-center wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/document_img.png"} alt="" />
            </div>
          </div>

          <div className="col-lg-5 col-md-7">
            <div
              className="document-content mt-50 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title mb-35">
                <span className="sub-title">Whitepaper</span>
                <h2 className="title">
                  Read Our <span>Documents</span>
                </h2>
              </div>

              <ul className="document-list">
                <li>
                  <Link href="/whitepaper">White Paper</Link>
                </li>
                <li>
                  <Link href="/pitchdeck">Pitch Deck</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy & Policy</Link>
                </li>
                {/* <li>
                  <Link href="/terms-of-coin-sale">Terms Of Coin Sale</Link>
                </li> */}
              </ul>

              {/* <Link href="/" className="btn">
                Download Doc
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
