import React from "react";
import gantt from "../../assets/gantt.png";


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
          React Calendar
        </div>
        <div className="designation" style={{ fontSize: "120px" }}>
          managing meetings,
        </div>
        <div
          className="designation"
          style={{ fontSize: "120px", backgroundColor: "black" }}
        >
          events, made easy
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
                "linear-gradient(180deg,rgba(8,8,10,0) 10%,var(--token-55071dc9-92d0-4cdb-8ef9-67f5658ea748, #000000) 69%)",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "100px",
          color: "white",
          paddingBottom: "160px",
          fontWeight: "100",
          backdropFilter: "contrast(20)",
        }}
      >
        Project overview
      </div>
      <div
        style={{
          height: "auto",
          width: "100%",
          fontSize: "25px",
          color: "white",
          paddingBottom: "160px",
          fontWeight: "100",
          backdropFilter: "contrast(20)",
          padding: "0px 60px 80px 60px",
          boxSizing: "border-box",
          lineHeight: "40px",
          textAlign: "center",
        }}
      >
        Introducing a cutting-edge{" "}
        <span style={{ color: "#6366f1", fontWeight: "normal" }}>
          Gantt Chart{" "}
        </span>
        application meticulously crafted from the ground up using{" "}
        <span style={{ color: "#6366f1", fontWeight: "normal" }}>React</span>.
        <br />
        This innovative tool boasts advanced features tailored for seamless
        scalability and lightning-fast performance, <br />
        ensuring efficient project management. With a fully customizable
        interface driven by props, users have unparalleled control over their
        Gantt charts. What sets this solution apart is its reliance solely on
        internal functionalities, eschewing external packages for a lean and
        optimized experience. Leveraging SignalR for real-time updates, users
        can collaborate effortlessly and stay synchronized in dynamic
        environments.
        <div
          style={{
            height: "auto",
            display: "flex",
            width: "100%",
            gap: "20px",
            marginTop: "30px",
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
            <span style={{ filter: "contrast(0.5)" }}>
              Air Traffic Control System{" "}
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
            <span style={{ filter: "contrast(0.5)" }}>
              Airport Ground Handeling
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
            <span style={{ filter: "contrast(0.5)" }}>
              Airport Crew Duties Management
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
            <span style={{ filter: "contrast(0.5)" }}>
              Crew Training Management
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
            <span style={{ filter: "contrast(0.5)" }}>
              Flight Scheduling & Tracking
            </span>
          </div>
        </div>
      </div>

      <div
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
          style={{
            height: "352px",
            width: "50%",
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
        </div>
        <div
          style={{
            height: "352px",
            width: "50%",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // padding: "10px",
            boxSizing: "border-box",
            flexDirection: "column",
            color: "white",
            fontSize: "30px",
            // fontWeight:"100"
          }}
        >
          <div style={{ color: "#6366f1" }}>Dragging</div>
          <div style={{ fontSize: "24px" }}>
            <ul>
              <li>
                Seamless drag-and-drop functionality allows users to
                effortlessly reorganize events within the Gantt chart.
              </li>
              <li>
                Intuitive event creation/deletion feature enables users to
                remove unwanted events with ease.
              </li>
              <li>
                Backend integration ensures that data manipulations, such as
                dragging, dropping, or deleting events, are reflected accurately
                and efficiently.
              </li>
              <li>
                User can swiftly filter, sort or search data.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          padding: "0px 50px 80px 50px",
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
        </div>
        <div
          style={{
            height: "352px",
            width: "50%",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // padding: "10px",
            boxSizing: "border-box",
            flexDirection: "column",
            color: "white",
            fontSize: "30px",
            fontWeight: "100",
          }}
        >
          <div style={{ color: "#6366f1" }}>Extending</div>
          <div style={{ fontSize: "24px" }}>
            <ul>
              <li>
                Flexible event extension capability empowers users to
                dynamically adjust the duration of events within the Gantt
                chart.
              </li>
              <li>
                User can manipulate the duration by referring the timeline
                (IST/UTC) ruler in the header.
              </li>
              <li>
                Upon clicking an event bar, dynamic guidelines appear,
                facilitating alignment and comparison with the timeline ruler
                positioned above.
              </li>
              <li>
                The{" "}
                <span style={{ color: "rgb(99, 102, 241)" }}>cell render</span>{" "}
                feature allows the bars to take any shape & size as per user
                requirement.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
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
          style={{
            height: "352px",
            width: "50%",
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
        </div>
        <div
          style={{
            height: "352px",
            width: "50%",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // padding: "10px",
            boxSizing: "border-box",
            flexDirection: "column",
            color: "white",
            fontSize: "30px",
            fontWeight: "100",
          }}
        >
          <div style={{ color: "#6366f1" }}>Moving</div>
          <div style={{ fontSize: "24px" }}>
            <ul>
              <li>
                Dynamic event bar movement functionality enables users to
                reposition events within the Gantt chart effortlessly.
              </li>
              <li>
                Users can efficiently adjust event placement to reflect changes
                in project scheduling or priorities.
              </li>
              <li>
                As users zoom in on the Gantt chart, event bars expand
                proportionally to maintain clarity and visibility within the
                increased view.
              </li>
              <li>Many more innovative features in the package..</li>
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
          fontSize: "24px",
          padding: "60px 120px",
          boxSizing: "border-box",
        }}
      >
        The Gantt chart application is powered by an innovative
        <span style={{ color: "#6366f1", fontWeight: "normal" }}>
          {" "}
          DOM Virtualization{" "}
        </span>{" "}
        feature, <br /> enabling unparalleled scalability without sacrificing
        performance.
        <br /> In an impressive testament to its robustness,
        <br />
        our application has undergone rigorous testing with datasets containing
        up to
        <span style={{ color: "#6366f1", fontWeight: "normal" }}>
          {" "}
          10 million records{" "}
        </span>
        ,<br /> surpassing expectations by maintaining optimal performance
        without any throttle.
      </div>
    </div>
  );
}

export default GanttChart;
