import React from "react";

function Work() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        width: "100%",
        background:"transparent"
      }}
    >
      <div
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
      <div style={{ display:"flex", flexWrap:"wrap", gap:"80px", justifyContent:"center", height:"max-content", width:"100%", padding:"160px 0px",backgroundColor:"black"}}>
        <div class="card-work">
        
        </div>

        <div class="card-work">
    
        </div>

        <div class="card-work">
          
        </div>

        <div class="card-work">
          
        </div>
      </div>
    </div>
  );
}

export default Work;
