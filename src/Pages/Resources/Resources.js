import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import figma from "../../assets/figma.png";
import photoshop from "../../assets/photoshop.png";
import javascript from "../../assets/javascript.png";
import git from "../../assets/pngegg (1).png"
import bootstrap from "../../assets/bootstrap.png"
import jquery from "../../assets/jquery.png"

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
        <div style={{ fontSize: "20px", color: "rgb(99, 102, 241)" }}>
          Resources
        </div>
        <div style={{ fontSize: "120px" }}>technologies</div>
        <div style={{ fontSize: "120px" }}>I am proficient in</div>
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
          <div
            style={{
              color: "white",
              fontSize: "24px",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <svg
                  style={{ height: "60px", width: "80px", fill: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
                </svg>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                MongoDB
              </div>
            </div>
          </div>
        </div>

        <div class="e-card playing">
          <div class="image"></div>

          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div
            style={{
              color: "white",
              fontSize: "24px",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style={{ height: "60px", width: "80px", fill: "white" }}
                >
                  <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
                </svg>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                Express
              </div>
            </div>
          </div>
        </div>

        <div class="e-card playing">
          <div class="image"></div>

          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div
            style={{
              color: "white",
              fontSize: "24px",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <svg
                  style={{ fill: "white", height: "60px", width: "80px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                </svg>{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                React
              </div>
            </div>
          </div>
        </div>

        <div class="e-card playing">
          <div class="image"></div>

          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div
            style={{
              color: "white",
              fontSize: "24px",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <svg
                  style={{ height: "60px", width: "80px", fill: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4 .1l14.8 8.8c.5 .3 1.3 .3 1.8 0L375 408c.5-.3 .9-.9 .9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6 .3-.9 1-.9 1.6v66.7c0 .6 .4 1.2 .9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9 .7-1.7 1.7-1.7h7.3c.9 0 1.7 .7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6 .2 .8 .8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5 .3-.4 .5-.8 .4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7 .7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7 .1 1.8 1.2 2.1 2.8 .1 1 .3 2.7 .6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3 .4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3 .7 2.5 1.8 3.2 1.1 .7 2.5 .7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6 .3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1 .7 2.6 .7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6 .3-.9 .9-.9 1.6v24.3c0 .7 .4 1.3 .9 1.6l21 12.1c.6 .3 1.3 .3 1.8 0l21-12.1c.6-.3 .9-.9 .9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3 .7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1 .7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4 .3-.7 .7-.7 1.2v13.6c0 .5 .3 1 .7 1.2l11.8 6.8c.4 .3 1 .3 1.4 0L584 235c.4-.3 .7-.7 .7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7 .1-.5 .2-1.1 .2-1.7zm-74.3-124.9l-.8 .5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z" />
                </svg>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                Node
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="skills-section"
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px 40px",
          justifyContent: "center",
        }}
      >
        <div
          className="skills"
          style={{
            width: "85%",
            background: "none",
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "32px",
            filter:"contrast(20)"
          }}
        >
          Technologies & tools
        </div>
        <div
          className="skills"
          style={{
            justifyContent: "normal",
            alignItems: "center",
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <div>
            <img style={{ height: "64px", width: "64px" }} src={javascript} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "fr 1fr" }}>
            <div style={{ fontSize: "24px", filter: "contrast(19)" }}>
              JavaScript
            </div>
            <div style={{ fontSize: "18px", filter: "contrast(10%)" }}>
              For scripting.
            </div>
          </div>
        </div>
        



        <div
          className="skills"
          style={{
            justifyContent: "normal",
            alignItems: "center",
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <div>
            <img style={{ height: "64px", width: "64px" }} src={html} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "fr 1fr" }}>
            <div style={{ fontSize: "24px", filter: "contrast(19)" }}>
              HTML5
            </div>
            <div style={{ fontSize: "18px", filter: "contrast(10%)" }}>
              Structuring web pages
            </div>
          </div>
        </div>




        <div
          className="skills"
          style={{
            justifyContent: "normal",
            alignItems: "center",
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <div>
            <img style={{ height: "64px", width: "64px" }} src={css} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "fr 1fr" }}>
            <div style={{ fontSize: "24px", filter: "contrast(19)" }}>
              CSS3
            </div>
            <div style={{ fontSize: "18px", filter: "contrast(10%)" }}>
              Style and layout
            </div>
          </div>
        </div>







        <div
          className="skills"
          style={{
            justifyContent: "normal",
            alignItems: "center",
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <div>
            <img style={{ height: "64px", width: "64px" }} src={git} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "fr 1fr" }}>
            <div style={{ fontSize: "24px", filter: "contrast(19)" }}>
              Git
            </div>
            <div style={{ fontSize: "18px", filter: "contrast(10%)" }}>
              Version control, collaboration
            </div>
          </div>
        </div>







        <div
          className="skills"
          style={{
            justifyContent: "normal",
            alignItems: "center",
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <div>
            <img style={{ height: "64px", width: "64px" }} src={figma} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "fr 1fr" }}>
            <div style={{ fontSize: "24px", filter: "contrast(19)" }}>
              Figma
            </div>
            <div style={{ fontSize: "18px", filter: "contrast(10%)" }}>
              Designing, wireframing
            </div>
          </div>
        </div>









        <div
          className="skills"
          style={{
            justifyContent: "normal",
            alignItems: "center",
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <div>
            <img style={{ height: "64px", width: "64px" }} src={photoshop} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "fr 1fr" }}>
            <div style={{ fontSize: "24px", filter: "contrast(19)" }}>
              Photoshop
            </div>
            <div style={{ fontSize: "18px", filter: "contrast(10%)" }}>
              Graphic editing, designing
            </div>
          </div>
        </div>




        <div
          className="skills"
          style={{
            justifyContent: "normal",
            alignItems: "center",
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <div>
            <img style={{ height: "64px", width: "64px" }} src={bootstrap} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "fr 1fr" }}>
            <div style={{ fontSize: "24px", filter: "contrast(19)" }}>
              Bootstrap
            </div>
            <div style={{ fontSize: "18px", filter: "contrast(10%)" }}>
              Styling, templates
            </div>
          </div>
        </div>



        <div
          className="skills"
          style={{
            justifyContent: "normal",
            alignItems: "center",
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <div>
            <img style={{ height: "64px", width: "64px" }} src={jquery} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "fr 1fr" }}>
            <div style={{ fontSize: "24px", filter: "contrast(19)" }}>
              jQuery
            </div>
            <div style={{ fontSize: "18px", filter: "contrast(10%)" }}>
              Javascript library
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default Resources;
