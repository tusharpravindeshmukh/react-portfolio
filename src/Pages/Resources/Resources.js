import React from "react";

function Resources() {
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
        <div style={{ fontSize: "20px", color: "rgb(99, 102, 241)" }}>
          Resources
        </div>
        <div style={{ fontSize: "120px" }}>Technologies I am proficient in</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "center",
          height: "max-content",
          width: "100%",
          padding: "160px 80px",
          backgroundColor: "black",

          boxSizing: "border-box",
        }}
      >
        <div class="e-card playing">
          <div class="image"></div>

          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>

        <div class="e-card playing">
          <div class="image"></div>

          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>

        <div class="e-card playing">
          <div class="image"></div>

          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>

        <div class="e-card playing">
          <div class="image"></div>

          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
