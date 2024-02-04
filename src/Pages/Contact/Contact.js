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
        <div style={{ fontSize: "120px" }}>Ready to create?</div>
      </div>
      <div
        style={{
          display: "flex",
          height: "max-content",
          width: "100%",
          padding: "160px 300px",
          flexDirection: "column",
          gap: "80px",
          backgroundColor:"black"
        }}
      >
        <div style={{ color: "white", height: "auto", width: "100%" }}>
          <div style={{ color: "rgb(99, 102, 241)", fontSize: "20px" }}>
            Contact
          </div>
          <div style={{ fontSize: "32px", marginTop: "8px" }}>
            tusharpravindeshmukh@gmail.com
          </div>
          <div style={{ fontSize: "32px" }}>+91-8668314767</div>
          <div style={{ fontSize: "32px" }}>+91-9764636574</div>
        </div>
        <div style={{ color: "white", height: "auto", width: "100%" }}>
          <div style={{ color: "rgb(99, 102, 241)", fontSize: "20px" }}>
            Address
          </div>
          <div style={{ fontSize: "32px", marginTop: "8px" }}>🇮🇳</div>
          <div style={{ fontSize: "32px" }}>SBI Colony</div>
          <div style={{ fontSize: "32px" }}>Mane Nagar</div>
          <div style={{ fontSize: "32px" }}>Shegaon, Mahatashtra 444203</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
