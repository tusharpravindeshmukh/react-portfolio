import React from "react";
import { Link } from "react-router-dom";
import ganttmain from "../../assets/gantttow.png";
import portal from "../../assets/portalone.png";

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
          alignItems: "center",
          flexDirection: "row",
        }}
      >


        <Link to="/work/ganttchart">
          <div class="cardx" style={{ height: "350px", width: "500px" }} onClick={() => window.scroll({top:"0", behavior:"smooth"})}>
            <div
              class="contentx"
              style={{
                height: "100%",
                width: "100%",
                padding: "3px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={ganttmain}
                style={{ borderRadius: "24px" }}
                alt=""
                height={"100%"}
                width={"100%"}
              />
              <div class="frontx">
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "50px",
                    background: "#12372A",
                    position: "absolute",
                    top: "32px",
                    left: "200px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "80px",
                    background: "#436850",
                    position: "absolute",
                    top: "64px",
                    left: "100px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "50px",
                    background: "#6D2932",
                    position: "absolute",
                    top: "99px",
                    left: "320px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "90px",
                    background: "#503C3C",
                    position: "absolute",
                    top: "133px",
                    left: "160px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "105px",
                    background: "#436850",
                    position: "absolute",
                    top: "169px",
                    left: "210px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "83px",
                    background: "#7a5135",
                    position: "absolute",
                    top: "232px",
                    left: "356px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>

                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "70px",
                    background: "#3C3633",
                    position: "absolute",
                    top: "200px",
                    left: "110px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                {/* <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "70px",
                    background: "#436850",
                    position: "absolute",
                    top: "304px",
                    left: "300px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3> */}
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "70px",
                    background: "#12372A",
                    position: "absolute",
                    top: "269px",
                    left: "210px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
              </div>

              <div class="backx">
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "24px",
                    background: "#212121",
                    boxShadow:
                      "15px 15px 30px #191919,-15px -15px 30px #292929",
                    color: "white",
                    fontSize: "32px",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    flexDirection: "column",
                    textAlign: "left",
                    padding: "15px",
                    boxSizing: "border-box",
                    gap: "4px",
                  }}
                >
                  <hr style={{ width: "100%", color: "rgb(37, 37, 37)" }} />
                  <div style={{ margin: "0" }}>Gantt Chart</div>

                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgb(189, 189, 189)",
                      fontWeight: "100px",
                    }}
                  >
                    Advanced Scheduler & Tracker
                  </span>

                  <span
                    style={{ fontSize: "12px", color: "rgb(189, 189, 189)" }}
                  >
                    React | Redux | Web-workers | Node | MongoDB | Express |
                    HTML | CSS
                  </span>
                  <hr style={{ width: "100%", color: "rgb(37, 37, 37)" }} />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/work/calendar" >
          <div  class="cardx" style={{ height: "350px", width: "500px" }} onClick={() => window.scroll({top:"0", behavior:"smooth"})}>
            <div
              class="contentx"
              style={{
                height: "100%",
                width: "100%",
                padding: "3px",
                boxSizing: "border-box",
              }}
            >
              {/* <img
                src={ganttmain}
                style={{ borderRadius: "24px" }}
                alt=""
                height={"100%"}
                width={"100%"}
              /> */}

              {/* <div class="frontx">
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "50px",
                    background: "#12372A",
                    position: "absolute",
                    top: "32px",
                    left: "200px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "80px",
                    background: "#436850",
                    position: "absolute",
                    top: "64px",
                    left: "100px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "50px",
                    background: "#6D2932",
                    position: "absolute",
                    top: "99px",
                    left: "320px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "90px",
                    background: "#503C3C",
                    position: "absolute",
                    top: "133px",
                    left: "160px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "105px",
                    background: "#436850",
                    position: "absolute",
                    top: "169px",
                    left: "210px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "83px",
                    background: "#7a5135",
                    position: "absolute",
                    top: "232px",
                    left: "356px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>

                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "70px",
                    background: "#3C3633",
                    position: "absolute",
                    top: "200px",
                    left: "110px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "70px",
                    background: "#436850",
                    position: "absolute",
                    top: "304px",
                    left: "300px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
                <h3
                  class="titlex"
                  style={{
                    height: "15px",
                    width: "70px",
                    background: "#12372A",
                    position: "absolute",
                    top: "269px",
                    left: "210px",
                    borderRadius: "24px",
                    boxShadow: "12px 20px 15px -3px black",
                  }}
                ></h3>
              </div> */}

              <div class="backx">
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "24px",
                    background: "#212121",
                    boxShadow:
                      "15px 15px 30px #191919,-15px -15px 30px #292929",
                    color: "white",
                    fontSize: "32px",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    flexDirection: "column",
                    textAlign: "left",
                    padding: "15px",
                    boxSizing: "border-box",
                    gap: "4px",
                  }}
                >
                  <hr style={{ width: "100%", color: "rgb(37, 37, 37)" }} />
                  <div style={{ margin: "0" }}>React Calendar</div>

                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgb(189, 189, 189)",
                      fontWeight: "100px",
                    }}
                  >
                    Managing events & meetings made easy
                  </span>

                  <span
                    style={{ fontSize: "12px", color: "rgb(189, 189, 189)" }}
                  >
                    React | Redux | Web-workers | Node | MongoDB | Express |
                    HTML | CSS
                  </span>
                  <hr style={{ width: "100%", color: "rgb(37, 37, 37)" }} />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/work/portal" onClick={() => window.scroll({top:"0", behavior:"smooth"})}>
          <div class="cardx" style={{ height: "350px", width: "500px" }}>
            <div
              class="contentx"
              style={{
                height: "100%",
                width: "100%",
                padding: "3px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={portal}
                style={{ borderRadius: "24px" }}
                alt=""
                height={"100%"}
                width={"100%"}
              />
              <div class="frontx"></div>

              <div class="backx">
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "24px",
                    background: "#212121",
                    boxShadow:
                      "15px 15px 30px #191919,-15px -15px 30px #292929",
                    color: "white",
                    fontSize: "32px",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    flexDirection: "column",
                    textAlign: "left",
                    padding: "15px",
                    boxSizing: "border-box",
                    gap: "4px",
                  }}
                >
                  <hr style={{ width: "100%", color: "rgb(37, 37, 37)" }} />
                  <div style={{ margin: "0" }}>Portal</div>

                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgb(189, 189, 189)",
                      fontWeight: "100px",
                    }}
                  >
                    Website to showcase controls
                  </span>

                  <span
                    style={{ fontSize: "12px", color: "rgb(189, 189, 189)" }}
                  >
                    Authentication | JWT | React | Routers | Redux | HTML | CSS
                  </span>
                  <hr style={{ width: "100%", color: "rgb(37, 37, 37)" }} />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/work" onClick={() => window.scroll({top:"0", behavior:"smooth"})}>
          <div class="cardx" style={{ height: "350px", width: "500px" }}>
            <div
              class="contentx"
              style={{
                height: "100%",
                width: "100%",
                padding: "3px",
                boxSizing: "border-box",
              }}
            >
              <div class="frontx">
                <div class="main_wrapper">
                  <div class="main">
                    <div class="antenna">
                      <div class="antenna_shadow"></div>
                      <div class="a1"></div>
                      <div class="a1d"></div>
                      <div class="a2"></div>
                      <div class="a2d"></div>
                      <div class="a_base"></div>
                    </div>
                    <div class="tv">
                      <div class="cruve">
                        <svg
                          viewBox="0 0 189.929 189.929"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          class="curve_svg"
                        >
                          <path
                            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                          ></path>
                        </svg>
                      </div>
                      <div class="display_div">
                        <div class="screen_out">
                          <div class="screen_out1">
                            <div class="screen">
                              <span class="notfound_text"> NOT FOUND</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="lines">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                      </div>
                      <div class="buttons_div">
                        <div class="b1">
                          <div></div>
                        </div>
                        <div class="b2"></div>
                        <div class="speakers">
                          <div class="g1">
                            <div class="g11"></div>
                            <div class="g12"></div>
                            <div class="g13"></div>
                          </div>
                          <div class="g"></div>
                          <div class="g"></div>
                        </div>
                      </div>
                    </div>
                    <div class="bottom">
                      <div class="base1"></div>
                      <div class="base2"></div>
                      <div class="base3"></div>
                    </div>
                  </div>
                  <div class="text_404">
                    <div class="text_4041">4</div>
                    <div class="text_4042">0</div>
                    <div class="text_4043">4</div>
                  </div>
                </div>
              </div>

              <div class="backx">
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "24px",
                    background: "#212121",
                    boxShadow:
                      "15px 15px 30px #191919,-15px -15px 30px #292929",
                    color: "white",
                    fontSize: "32px",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    flexDirection: "column",
                    textAlign: "left",
                    padding: "15px",
                    boxSizing: "border-box",
                    gap: "4px",
                  }}
                >
                  <hr style={{ width: "100%", color: "rgb(37, 37, 37)" }} />
                  <div style={{ margin: "0" }}>Connect Sphere</div>

                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgb(189, 189, 189)",
                      fontWeight: "100px",
                    }}
                  >
                    Discussion platform in progress..
                  </span>

                  <span
                    style={{ fontSize: "12px", color: "rgb(189, 189, 189)" }}
                  >
                    MongoDB | React | Node | Express | HTML | CSS | JavaScript |
                    Redux | Authentication Authorization | Deployment
                  </span>
                  <hr style={{ width: "100%", color: "rgb(37, 37, 37)" }} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Work;
