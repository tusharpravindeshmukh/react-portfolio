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
        <div className="designation second-title">software developer</div>
      </div>
      <div
        className="intro-wrapper"
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          boxSizing: "border-box",
        }}
      >
        <div
          className="intro-container"
          style={{
            fontSize: "30px",
            color: "white",
            textAlign: "left",
            height: "auto",
          }}
        >
          <span style={{ fontSize: "40px" }} class="waving-hand">
            👋
          </span>
          <span style={{ marginLeft: "10px" }}>
            Hey! I'm <span style={{ color: "#6366f1" }}>Tushar</span>,
          </span>
          <div>a software developer based in Mumbai.</div>
          <div className="intro" style={{}}>
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
          className="education-section"
          style={{
            fontSize: "30px",
            color: "white",

            height: "auto",

            display: "flex",

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
              <div className="edu-title">Amity University Mumbai</div>
              <div className="sub-edu-title" style={{ color: "rgb(189, 189, 189)"}}>
                Bachelor of Technology (Computer Science Engineering)
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "20px", width: "240px", color: "#6366f1" }}>
              Oct' 2022 - Present
            </div>
            <div>
              <div className="edu-title">
                Laminaar Aviation Infotech India Pvt. Ltd.
              </div>
              <div className="sub-edu-title" style={{ color: "rgb(189, 189, 189)" }}>
                Associate Software Engineer (React)
              </div>
            </div>
          </div>
          <div className="certificate-wrapper" style={{}}>
            <div style={{ fontSize: "20px", width: "240px", color: "#6366f1" }}>
              Certificate
            </div>
            <div>
              <div className="edu-title">Advanced React</div>
              <div className="sub-edu-title" style={{ color: "rgb(189, 189, 189)"}}>
                Meta
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "20px", width: "240px", color: "#6366f1" }}>
              Certificate
            </div>
            <div>
              <div className="edu-title">
                Building Backend Applications with NodeJS and Express
              </div>
              <div className="sub-edu-title" style={{ color: "rgb(189, 189, 189)"}}>
                IBM
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "20px", width: "240px", color: "#6366f1" }}>
              Certificate
            </div>
            <div>
              <div className="edu-title">Building Restful APIs</div>
              <div className="sub-edu-title" style={{ color: "rgb(189, 189, 189)"}}>
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
