import React from "react";
import gantt from "../../assets/gantt.png";
import dnd from "../../assets/videos/dragdrop.mp4";
import elongate from "../../assets/videos/elongate.mp4";
import movement from "../../assets/videos/movement.mp4";
function GanttChart() {
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
          Gantt Chart
        </div>
        <div className="designation" style={{ fontSize: "120px" }}>
          advanced scheduler
        </div>
        <div
          className="designation"
          style={{ fontSize: "120px", backgroundColor: "black" }}
        >
          & tracker
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
          className="gantt"
          style={{
            position: "relative",
            width: "80%",
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ borderRadius: "24px" }}
            height="100%"
            width="100%"
            src={gantt}
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
                "linear-gradient(180deg,rgba(8,8,10,0) 10%,var(--token-55071dc9-92d0-4cdb-8ef9-67f5658ea748, #000000) 85%)",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          padding: "0px 50px 40px 50px",
          boxSizing: "border-box",
          gap: "40px",
        }}
      >
        <div
          style={{
            height: "352px",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            border: "5px solid white",
            borderRadius: "5px",
          }}
        >
          <video
            style={{ objectFit: "cover" }}
            height="100%"
            width="100%"
            src={dnd}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div
          style={{
            height: "352px",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            boxSizing: "border-box",
            border: "1px solid white",
          }}
        ></div>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          padding: "0px 50px 40px 50px",
          boxSizing: "border-box",
          gap: "40px",
          flexDirection: "row-reverse",
        }}
      >
        <div
          style={{
            height: "352px",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            border: "5px solid white",
            borderRadius: "5px",
          }}
        >
          <video
            style={{ objectFit: "cover" }}
            height="100%"
            width="100%"
            src={elongate}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div
          style={{
            height: "352px",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            boxSizing: "border-box",
            border: "1px solid white",
          }}
        ></div>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          padding: "0px 50px 40px 50px",
          boxSizing: "border-box",
          gap: "40px",
        }}
      >
        <div
          style={{
            height: "352px",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            borderRadius: "5px",
          }}
        >
          <video
            style={{ objectFit: "cover" }}
            height="100%"
            width="100%"
            src={movement}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div
          style={{
            height: "352px",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            boxSizing: "border-box",
            border: "1px solid white",
          }}
        ></div>
      </div>
    </div>
  );
}

export default GanttChart;
