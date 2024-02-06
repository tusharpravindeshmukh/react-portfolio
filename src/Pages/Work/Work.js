import React from "react";
import { Link } from "react-router-dom";

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
<<<<<<< HEAD
          padding: "160px 70px",
=======
          padding: "160px 15px",
>>>>>>> 8699112bac28460cdd6bfb6fdef69a6773968d41
          backgroundColor: "black",
          boxSizing: "border-box",
        }}
      >
<<<<<<< HEAD
        <div class="card-work">
          <Link to="/work/ganttchart" onClick={() => window.scrollTo(0, 0)}>
            Gantt
          </Link>
        </div>

        <div class="card-work">
          <Link to="/work/calendar" onClick={() => window.scrollTo(0, 0)}>
            Calendar
          </Link>
        </div>

        <div class="card-work">
          <Link to="/work/portal" onClick={() => window.scrollTo(0, 0)}>
            Portal
          </Link>
        </div>

=======
        <Link to="/work/ganttchart" onClick={() => window.scrollTo(0, 0)}>
          <div class="card-work"></div>
        </Link>

        <div class="card-work"></div>

        <div class="card-work"></div>

>>>>>>> 8699112bac28460cdd6bfb6fdef69a6773968d41
        <div class="card-work"></div>
      </div>
    </div>
  );
}

export default Work;
