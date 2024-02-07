import React from "react";

function About() {
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
          paddingBottom: "200px",
        }}
      >
        <div style={{ fontSize: "20px", color: "rgb(99, 102, 241)" }}>
          Tushar Deshmukh
        </div>
        <div className="designation" style={{ fontSize: "120px" }}>
          software developer
        </div>
      </div>
      <div
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 80px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            color: "white",
            textAlign: "left",
            height: "auto",
            width: "860px",
          }}
        >
          <span style={{ fontSize: "40px" }} class="waving-hand">
            👋
          </span>
          <span style={{ marginLeft: "10px" }}>Hey! I'm <span style={{color:"#6366f1"}}>Tushar</span>,</span>
          <div>a software developer based in Mumbai.</div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: "100px",
              lineHeight: "1.4",
            }}
          >
            I am a computer science grad with a passion for crafting seamless
            and captivating web experiences. Coffee fuels my code, and VS Code
            is my trusty magic wand. 🪄
            <br /> <br />
            By day, I'm a React developer at Laminaar Aviation, where I design
            interfaces that elevate their aviation solutions. ✈️ By night, I
            freelance, pushing the boundaries of web design by building unique
            and innovative websites for clients.
            <br />
            <br /> When I'm not lost in the codeverse, you'll find me exploring
            the latest tech trends or diving into the depths of history books.
            So, are you ready to embark on a digital adventure? Come explore my
            corner of the web – it's gonna be a wild ride!
          </div>
        </div>

        <div
          style={{
            fontSize: "30px",
            color: "white",

            height: "auto",
            width: "860px",
            display: "flex",
            paddingTop: "240px",
            gap: "40px",
            // alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "40px",
          }}
        >
          <div>
            <div style={{ fontSize: "20px", width: "240px", color: "#6366f1" }}>
              2018 - 2022
            </div>
            <div>
              <div style={{ fontSize: "32px" }}>Amity University Mumbai</div>
              <div style={{ color: "rgb(189, 189, 189)", fontSize: "22px" }}>
                Bachelor of Technology (Computer Science Engineering)
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "20px", width: "240px", color: "#6366f1" }}>
              Oct' 2022 - Present
            </div>
            <div>
              <div style={{ fontSize: "32px" }}>
                Laminaar Aviation Infotech India Pvt. Ltd.
              </div>
              <div style={{ color: "rgb(189, 189, 189)", fontSize: "22px" }}>
                Associate Software Engineer (React)
              </div>
            </div>
          </div>
          <div style={{ marginTop: "160px" }}>
            <div style={{ fontSize: "20px", width: "240px", color: "#6366f1" }}>
              Certificate
            </div>
            <div>
              <div style={{ fontSize: "32px" }}>Advanced React</div>
              <div style={{ color: "rgb(189, 189, 189)", fontSize: "22px" }}>
                Meta
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "20px", width: "240px", color: "#6366f1" }}>
              Certificate
            </div>
            <div>
              <div style={{ fontSize: "32px" }}>
                Building Backend Applications with NodeJS and Express
              </div>
              <div style={{ color: "rgb(189, 189, 189)", fontSize: "22px" }}>
                IBM
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "20px", width: "240px", color: "#6366f1" }}>
              Certificate
            </div>
            <div>
              <div style={{ fontSize: "32px" }}>Building Restful APIs</div>
              <div style={{ color: "rgb(189, 189, 189)", fontSize: "22px" }}>
                IBM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
