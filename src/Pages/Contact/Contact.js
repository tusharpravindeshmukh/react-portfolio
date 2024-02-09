import React from "react";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        width: "100%",
        background: "transparent",
      }}
    >
      <div
        className="titles"
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="second-title" style={{}}>
          Ready to create?
        </div>
      </div>
      <div className="contact-wrapper">
        <div style={{ color: "white", height: "auto", width: "100%" }}>
          <div
            className="contact-title"
            style={{ color: "rgb(99, 102, 241)", fontSize: "20px" }}
          >
            Contact
          </div>
          <div
            className="contact-subtitle"
            style={{ marginTop: "8px" }}
          >
            tusharpravindeshmukh@gmail.com <br />
            +91-9764636574
          </div>
        </div>
        <div style={{ color: "white", height: "auto", width: "100%" }}>
          <div style={{ color: "rgb(99, 102, 241)", fontSize: "20px" }}>
            Address
          </div>
          <div className="contact-subtitle" style={{ marginTop: "8px" }}>
            🇮🇳 <br /> SBI Colony <br />
            Mane Nagar <br />
            Shegaon, Mahatashtra 444203
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
