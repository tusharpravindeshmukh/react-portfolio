import React from "react";
import { Link } from "react-router-dom";
import ganttmain from "../../assets/gantttow.png";

function Work() {
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
        <div style={{ fontSize: "20px", color: "rgb(99, 102, 241)" }}>Work</div>
        <div style={{ fontSize: "120px" }}>Let me show</div>
        <div style={{ fontSize: "120px" }}>you</div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "80px",
          justifyContent: "center",
          height: "max-content",
          width: "100%",
          padding: "160px 70px",
          padding: "160px 15px",
          backgroundColor: "black",
          boxSizing: "border-box",
        }}
      >
        <div class="cardx" style={{ height: "350px", width: "500px" }}>
          <div class="contentx" style={{ height: "100%", width: "100%",padding:"3px",boxSizing:"border-box" }}>
            <img
              src={ganttmain}
              style={{ borderRadius: "24px" }}
              alt=""
              height={"100%"}
              width={"100%"}
            />
            <div class="frontx">
              <h3 class="titlex" style={{height:"15px", width:"50px", background:"#12372A", position:"absolute", top:"32px", left:"200px", borderRadius:"24px",boxShadow:"12px 20px 15px -3px black"}}></h3>
              <h3 class="titlex" style={{height:"15px", width:"80px", background:"#436850", position:"absolute", top:"64px", left:"100px", borderRadius:"24px",boxShadow:"12px 20px 15px -3px black"}}></h3>
              <h3 class="titlex" style={{height:"15px", width:"50px", background:"#6D2932", position:"absolute", top:"99px", left:"320px", borderRadius:"24px",boxShadow:"12px 20px 15px -3px black"}}></h3>
              <h3 class="titlex" style={{height:"15px", width:"90px", background:"#503C3C", position:"absolute", top:"133px", left:"160px", borderRadius:"24px",boxShadow:"12px 20px 15px -3px black"}}></h3>
              <h3 class="titlex" style={{height:"15px", width:"105px", background:"#436850", position:"absolute", top:"169px", left:"210px", borderRadius:"24px",boxShadow:"12px 20px 15px -3px black"}}></h3>
              <h3 class="titlex" style={{height:"15px", width:"83px", background:"#7a5135", position:"absolute", top:"232px", left:"356px", borderRadius:"24px",boxShadow:"12px 20px 15px -3px black"}}></h3>

              <h3 class="titlex" style={{height:"15px", width:"70px", background:"#3C3633", position:"absolute", top:"200px", left:"110px", borderRadius:"24px",boxShadow:"12px 20px 15px -3px black"}}></h3>
              <h3 class="titlex" style={{height:"15px", width:"70px", background:"#436850", position:"absolute", top:"304px", left:"300px", borderRadius:"24px",boxShadow:"12px 20px 15px -3px black"}}></h3>
              <h3 class="titlex" style={{height:"15px", width:"70px", background:"#12372A", position:"absolute", top:"269px", left:"210px", borderRadius:"24px",boxShadow:"12px 20px 15px -3px black"}}></h3>



            </div>

            <div class="backx">
              <div style={{height:"100%", width:"100%", borderRadius:"24px", background:"#212121", boxShadow:"15px 15px 30px #191919,-15px -15px 30px #292929"}}>

              </div>
              
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Work;
