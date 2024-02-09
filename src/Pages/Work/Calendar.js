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
        <div className="designation second-title" style={{ }}>
          managing meetings,
        </div>
        <div
          className="designation second-title"
          style={{ backgroundColor: "black" }}
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
        className="second-title"
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign:'center',
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
        The{" "}
        <span style={{ color: "#6366f1", fontWeight: "normal" }}>
          React Calendar
        </span>{" "}
        offers users a comprehensive solution for managing their schedules
        effortlessly.
        <br />
        Built from scratch with meticulous attention to detail,it seamlessly
        integrates day, week, and month views,
        <br /> providing users with versatile options to plan their time
        effectively. With intuitive navigation controls, users can effortlessly
        switch between different views to gain a holistic perspective of their
        events.
        <div
          className="sub-skills"
          style={{
            height: "auto",
           
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
          <div style={{ color: "#6366f1", fontSize:"30px" }}>Month View</div>
          <div style={{  }}>
            <ul>
              <li>
                Provides users with a comprehensive overview of an entire
                month's schedule in a single view.
              </li>
              <li>
                Enables users to easily navigate between different months,
                facilitating long-term planning.
              </li>
              <li>
                Events are injected from developer's end to manage custom
                behaviors, which makes it unparallalebly customizable.
              </li>
              <li>User can swiftly filter, sort or search data.</li>
            </ul>
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
          <div style={{ color: "#6366f1" , fontSize:"30px"}}>Week View</div>
          <div style={{ }}>
            <ul>
              <li>
                Presents users with a detailed view of their schedule for the
                current week, focusing on seven consecutive days.
              </li>
              <li>
                Offers a seamless scrolling experience, allowing users to
                navigate forward or backward in time within the week view
                without interruption.
              </li>
              <li>
                The user can trigger desired events on different sections of the
                application.
              </li>
              <li>
                The cell render feature allows the bars to take any shape & size
                as per user requirement.
              </li>
            </ul>
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
        </div>
        <div
        className="card-container-first"
          style={{
         
       
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
          <div style={{ color: "#6366f1" ,fontSize:"30px"}}>Day View</div>
          <div style={{ }}>
            <ul>
              <li>
                Users can specify their holiday list and the application will smartly highlight them for ease.
              </li>
              <li>
                Users can efficiently adjust event placement to reflect changes
                in project scheduling or priorities.
              </li>
              <li>
                The date picker helps to swiftly navigate through timelines.
              </li>
              <li>Many more innovative features in the package..</li>
            </ul>
          </div>
        </div>
      </div>
      <div
  className="calendar-intro"
        style={{
          color: "white",
          width: "100%",
          height: "auto",
          textAlign: "center",

          
          boxSizing: "border-box",
        }}
      >
        The React calendar application is powered by
        <span style={{ color: "#6366f1", fontWeight: "normal" }}>
          {" "}
          renderers
        </span>
        ,<br /> enabling developers to inject their custom events from outside
        which brings unparalleled customization <br />
        without sacrificing performance.
      </div>
    </div>
  );
}

export default GanttChart;
