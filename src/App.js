import "./App.css";
import React from "react";
import back from "./assets/back.png";
import Default from "./Pages/Default/Default";
import Footer from "./Static/Footer";
import Work from "./Pages/Work/Work";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Resources from "./Pages/Resources/Resources";
import { Routes, Route, Link } from "react-router-dom";
import GanttChart from "./Pages/Work/GanttChart";
import Calendar from "./Pages/Work/Calendar";
import CPortal from "./Pages/Work/CPortal";

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height="32px"
      fill="white"
      width="32px"
    >
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

function App() {
  const [menu, setMenu] = React.useState(false);

  React.useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.querySelector(".navbar");

      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-100px"; // Assuming your navbar height is 80px
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div
      className="App wrap"
      style={{
        minHeight: "auto",
        width: "auto",
        display: "grid",
        gridTemplateRows: "1 fr 1fr 1fr",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "160px",
        background: "black",
      }}
    >
      <div
        className="header-container navbar"
        style={{
          flex: "none",
          height: "auto",
          left: "0",
          right: "0",
          top: "0",
          zIndex: "10",
          boxSizing: "border-box",
        }}
      >
        <header
          className="header"
          style={{
            opacity: "1",
            width: "100%",
            background: "rgba(0,0,0,0)",
            padding: "24px 24px 0px 24px",
            position: "relative",
            height: "min-content",
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="profile-picture"
            style={{
              alignContent: "center",
              alignItems: "center",
              bottom: "12px",
              display: "flex",
              flex: "none",
              flexDirection: "row",
              flexWrap: "nowrap",
              gap: "0px",
              height: "min-content",
              justifyContent: "center",
              left: "40px",
              overflow: "visible",
              padding: "0",
              position: "absolute",
              width: "min-content",
            }}
            onClick={() => setMenu(false)}
          >
            <Link to={"/react-portfolio"}>
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                  flex: "none",
                  height: "56px",
                  position: "relative",
                  width: "56px",
                  zIndex: "1",
                  background: "yellow",
                  borderRadius: "50%",
                  alignItems:"center",
                  justifyContent:"center",
                  display:"flex",
                  fontSize:"40px",
                  fontFamily:"fangsong",
                  color:"black"
                }}
              >T</div>
            </Link>
          </div>

          <nav
            className="main-navbar"
            style={{
              alignContent: "center",
              alignItems: "center",

              flex: "none",
              flexDirection: "row",
              flexWrap: "nowrap",
              gap: "8px",
              height: "auto",
              justifyContent: "center",
              overflow: "visible",
              padding: "16px",
              position: "relative",
              width: "auto",
              borderRadius: "80px",
              backgroundColor: "rgb(37 37 37 / 80%)",

              borderColor: "rgb(255 255 255 / 10%)",
              borderStyle: "solid",
              borderTopWidth: "1px",
              borderBottomWidth: "0px",
              borderRightWidth: "0px",
              borderLeftWidth: "0px",
              boxSizing: "border-box",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{}}>
              <Link
                className="nav-items"
                to={"/resources"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Resources
              </Link>
            </div>
            <div style={{}}>
              <Link
                className="nav-items"
                to={"/work"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Work
              </Link>
            </div>
            {/* <div style={{}}>
              <Link className="nav-items" to={"/blog"}>
                Blog
              </Link>
            </div> */}
            <div style={{}}>
              <Link
                className="nav-items"
                to={"/about"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                About
              </Link>
            </div>
          </nav>
          <Link to={"/contact"}>
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="contact-button"
              style={{
                bottom: "12px",
                flex: "none",
                height: "56px",
                position: "absolute",
                right: "40px",
                width: "auto",
                border: "1px solid white",
                borderRadius: "80px",
              }}
            >
              <div style={{ padding: "16px 40px" }}>Contact</div>
            </div>
          </Link>

          <div
            className="hamburger"
            style={{
              bottom: "12px",

              height: "56px",
              position: "absolute",
              right: "40px",
              width: "56px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              background: "rgb(30 30 30)",
              cursor: "pointer",
            }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </div>
        </header>
        {menu && (
          <div
            className="hamburger-menu"
            style={{
              height: "auto",
              width: "100%",
              // padding: "50px",
              color: "white",

              flexDirection: "column",
              gap: "40px",
              background: "black",
              justifyContent: "flex-end",
              textAlign: "right",
              boxSizing: "border-box",
              paddingRight: "24px",
              marginTop: "60px",
            }}
          >
            <Link to="/resources" style={{ textDecoration: "none" }}>
              <div
                onClick={() => setMenu(false)}
                style={{
                  fontSize: "40px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Resources
              </div>
            </Link>
            <Link to="/work" style={{ textDecoration: "none" }}>
              <div
                onClick={() => setMenu(false)}
                style={{
                  fontSize: "40px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Work
              </div>
            </Link>
            {/* <Link to="/blog" style={{ textDecoration: "none" }}>
              <div
                onClick={() => setMenu(false)}
                style={{
                  fontSize: "40px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Blog
              </div>
            </Link> */}
            <Link to="/about" style={{ textDecoration: "none" }}>
              <div
                onClick={() => setMenu(false)}
                style={{
                  fontSize: "40px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                About
              </div>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <div
                onClick={() => setMenu(false)}
                style={{
                  fontSize: "40px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Contact
              </div>
            </Link>
          </div>
        )}
      </div>

      <div
        className="image-background"
        style={{
          height: "auto",
          width: "100%",
          position: "absolute",
          zIndex: "2",
        }}
      >
        <img
          style={{ height: "100vh", width: "100%", boxSizing: "border-box" }}
          src={back}
        />
      </div>

      <div
        className="router-box"
      >
        <Routes>
          <Route path="/react-portfolio" element={<Default />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/work/ganttchart" element={<GanttChart />} />
          <Route path="/work/calendar" element={<Calendar />} />
          <Route path="/work/portal" element={<CPortal />} />
        </Routes>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
