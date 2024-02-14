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
          <div className="contact-subtitle" style={{ marginTop: "8px" }}>
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
        <div>
            <a
              href="https://drive.google.com/uc?export=download&id=1qKzX5vrr_XtypnYmBOdJJWGlfx5AAI2s"
              download="tushardeshmukh.pdf"
            >
              <button class="Btn">
                <svg
                  class="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span class="icon2"></span>
                <span class="tooltip">Download Resume</span>
              </button>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Contact;
