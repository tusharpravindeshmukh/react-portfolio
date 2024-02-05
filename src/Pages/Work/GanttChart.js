import React from "react";
// import gantt from "../../assets/gantt.png";

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
          {/* <img height="100%" width="100%" src={gantt} alt="" /> */}
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
    </div>
  );
}

export default GanttChart;
