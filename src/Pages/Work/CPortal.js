import React from "react";
import portal from "../../assets/portalone.png";
import portalone from "../../assets/portaltwo.png";
import portalthree from "../../assets/portalthree.png";

function CPortal() {
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
          Portal
        </div>
        <div className="designation second-title" style={{}}>
          Intuitive UI/UX for
        </div>
        <div
          className="designation second-title"
          style={{ backgroundColor: "black" }}
        >
          a react library
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "80px",
          justifyContent: "center",
          height: "max-content",
          width: "100%",
          padding: "160px 0px",
          backgroundColor: "black",
        }}
      >
        <div
          className="gantt showcase"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ borderRadius: "24px" }}
            height="100%"
            width="100%"
            src={portal}
            alt=""
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              height: "160px",
              width: "100%",
              background:
                "linear-gradient(180deg,rgba(8,8,10,0) 10%,var(--token-55071dc9-92d0-4cdb-8ef9-67f5658ea748, #000000) 69%)",
            }}
          ></div>
        </div>
      </div>
      <div
        className="second-title"
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign:"center",
          color: "white",
          paddingBottom: "160px",
          fontWeight: "100",
          backdropFilter: "contrast(20)",
        }}
      >
        Project overview
      </div>
      <div
       className="calendar-intro"
        style={{
          height: "auto",
          width: "100%",
     
          color: "white",
          paddingBottom: "160px",
          fontWeight: "100",
          backdropFilter: "contrast(20)",
       
          boxSizing: "border-box",
          lineHeight: "40px",
          textAlign: "center",
        }}
      >
        I crafted an interactive React library component showcase website for
        Laminaar Aviation Infotech,
        <br />
        boosting component adoption by 25%. Using cutting-edge technologies like
        React, routers, and JWT Authentication,
        <br /> the website empowers developers with secured logins, intuitive
        navigation, live demos, and clear documentation.
        <br />
        This user-friendly experience significantly reduced support requests
        <br />
        while increasing brand awareness and contributing to client success.
        <div
         className="sub-skills"
          style={{
            height: "auto",
        
            width: "100%",
            gap: "20px",
            marginTop: "30px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              padding: "5px 20px",
              fontWeight: "bold",
              background: "grey",
              borderRadius: "24px",
              backgroundColor: "rgb(37, 37, 37)",
            }}
          >
            <span style={{ filter: "contrast(0.5)" }}>Theme Builder </span>
          </div>
          <div
            style={{
              fontSize: "16px",
              padding: "5px 20px",
              fontWeight: "bold",
              background: "grey",
              borderRadius: "24px",
              backgroundColor: "rgb(37, 37, 37)",
            }}
          >
            <span style={{ filter: "contrast(0.5)" }}>
              Custom React Library
            </span>
          </div>
          <div
            style={{
              fontSize: "16px",
              padding: "5px 20px",
              fontWeight: "bold",
              background: "grey",
              borderRadius: "24px",
              backgroundColor: "rgb(37, 37, 37)",
            }}
          >
            <span style={{ filter: "contrast(0.5)" }}>Components</span>
          </div>
          <div
            style={{
              fontSize: "16px",
              padding: "5px 20px",
              fontWeight: "bold",
              background: "grey",
              borderRadius: "24px",
              backgroundColor: "rgb(37, 37, 37)",
            }}
          >
            <span style={{ filter: "contrast(0.5)" }}>Authentication</span>
          </div>
          <div
            style={{
              fontSize: "16px",
              padding: "5px 20px",
              fontWeight: "bold",
              background: "grey",
              borderRadius: "24px",
              backgroundColor: "rgb(37, 37, 37)",
            }}
          >
            <span style={{ filter: "contrast(0.5)" }}>Authorization</span>
          </div>
        </div>
      </div>

      <div
       className="card-container"
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          padding: "0px 50px 80px 50px",
          boxSizing: "border-box",
          gap: "40px",
        }}
      >
        <div
         className="card-container-first"
          style={{
            height: "352px",
         
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
            padding: "6px",
            background: "rgb(37 37 37)",
            borderRadius: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              height: "50px",
              width: "101%",
              background:
                "linear-gradient(180deg,rgba(8,8,10,0) 10%,var(--token-55071dc9-92d0-4cdb-8ef9-67f5658ea748, #000000) 69%)",
            }}
          ></div>
          <img
            style={{ height: "100%", width: "100%", borderRadius: "24px" }}
            src={portalone}
            alt=""
          />
        </div>
        <div
         className="card-container-first"
          style={{
            height: "auto",
     
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // padding: "10px",
            boxSizing: "border-box",
            flexDirection: "column",
            color: "white",
       
            // fontWeight:"100"
          }}
        >
          <div style={{ color: "#6366f1" , fontSize:"30px" }}>Authentication</div>
          <div style={{  }}>
            <ul>
              <li>
                Users submit credentials, validated against secure storage.
              </li>
              <li>
                JWT generated and signed with secret key upon successful login.
              </li>
              <li>
                Tokens set to expire after a defined period, mitigating risk of
                leaks.
              </li>
              <li>Scalable to handle high volumes of requests efficiently.</li>
              <li>
                Protected API endpoints based on claims comparison at
                server-side.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
      className="card-container-odd"
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          padding: "0px 50px 80px 50px",
          boxSizing: "border-box",
          gap: "40px",
       
        }}
      >
        <div
         className="card-container-first"
          style={{
            height: "352px",
         
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
            padding: "6px",
            background: "rgb(37 37 37)",
            borderRadius: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              height: "50px",
              width: "101%",
              background:
                "linear-gradient(180deg,rgba(8,8,10,0) 10%,var(--token-55071dc9-92d0-4cdb-8ef9-67f5658ea748, #000000) 69%)",
            }}
          ></div>
          <img
            style={{ height: "100%", width: "100%", borderRadius: "24px" }}
            src={portalone}
            alt=""
          />
        </div>
        <div
         className="card-container-first"
          style={{
            height: "auto",
       
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // padding: "10px",
            boxSizing: "border-box",
            flexDirection: "column",
            color: "white",
         
            fontWeight: "100",
          }}
        >
          <div style={{ color: "#6366f1", fontSize:"30px" }}>User friendly design</div>
          <div style={{ }}>
            <ul>
              <li>
                User-friendly quick scrolls for tags, lists, and search results,
                enabling efficient information access and reducing cognitive
                load.
              </li>
              <li>
                Intuitive search function with clear input and relevant
                suggestions, facilitating targeted content discovery.
              </li>
              <li>Organized navigation links.</li>
              <li>
                Incorporated accessibility best practices to ensure inclusivity
                for users with diverse needs.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          color: "white",
          width: "100%",
          height: "auto",
          textAlign: "center",
          fontSize: "28px",
          padding: "160px 0px 0px 0px",
          boxSizing: "border-box",
        }}
      >
        The website is <span style={{ color: "#6366f1" }}>live </span>within
        Laminaar Aviation's production enviroment.
      </div>
    </div>
  );
}

export default CPortal;
