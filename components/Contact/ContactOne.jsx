import React from "react";
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";

const ContactOne = () => {
  const info_items = [
    // {
    //   icon: "fa-envelope",
    //   content: (
    //     <>
    //       contact@signalvase.com <br /> contact@etherealcash.com
    //     </>
    //   ),
    // },
    // {
    //   icon: "fa fa-whatsapp",
    //   content: (
    //     <>
    //       +92 3318285048
    //       <br /> +92 3142991434
    //     </>
    //   ),
    // },
    // {
    //   icon: "fa-map-marker-alt",
    //   content: (
    //     <>
    //       State/province/area: <br />
    //       Georgia 198
    //     </>
    //   ),
    // },
  ];

  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Contact Us for OTC Deals</span>
              <h2 className="title">
                Connect With Us to Purchase <span>EtherealCash</span>
              </h2>
            </div>
          </div>
        </div>

        {/* secction info */}
        {/* <div className="contact-info-wrap">
          <div className="row justify-content-center">
            {info_items.map((x, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <ContactOneInfoItem item={x} />
              </div>
            ))}
          </div>
        </div> */}

        {/* section form */}
        <ContactOneForm />
      </div>
    </section>
  );
};

export default ContactOne;
