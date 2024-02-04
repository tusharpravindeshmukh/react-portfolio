import "./App.css";
import React from "react";
import back from "./assets/back.png";
import Default from "./Pages/Default/Default";
import Footer from "./Static/Footer";
import Work from "./Pages/Work/Work";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Resources from "./Pages/Resources/Resources";
import { Routes, Route, Link } from "react-router-dom";

function App() {
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

  React.useEffect(() => {
    const handleScroll = (event) => {
      // Adjust the scroll speed by multiplying the deltaY (change in Y) by a factor
      const scrollSpeed = 0.5; // Adjust this value to control the scroll speed
      window.scrollBy(0, event.deltaY * scrollSpeed);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      className="App wrap"
      style={{
        minHeight: "auto",
        width: "auto",
        display: "grid",
        gridTemplateRows: "1 fr 1fr 1fr",
        position: "relative",
      }}
    >
      <div
        className="header-container navbar"
        style={{
          transform: "perspective(1200px)",
          flex: "none",
          height: "auto",
          left: "0",
          position: "fixed",
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
          >
          <Link to={"/"}>
            <div
              style={{
                flex: "none",
                height: "56px",
                position: "relative",
                width: "56px",
                zIndex: "1",
                background: "yellow",
                borderRadius: "50%",
              }}
            >
            </div>
            </Link>
          </div>
          
        
          <nav
            style={{
              alignContent: "center",
              alignItems: "center",
              display: "flex",
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
              opacity: "1",
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
            <Link className="nav-items" to={"/resources"}>
            Resources
          </Link>
            </div>
            <div style={{}}>
              <Link className="nav-items" to={"/work"}>
                Work
              </Link>
            </div>
            <div style={{}}>
              <Link className="nav-items" to={"/blog"}>
                Blog
              </Link>
            </div>
            <div style={{}}>
              <Link className="nav-items" to={"/about"}>
                About
              </Link>
            </div>
          </nav>
          <Link to={"/contact"}>
          <div
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
            <div style={{ padding: "16px 40px" }}>
              Contact
            </div>
          </div>
          </Link>
        </header>
      </div>

      <div
        className="image-background"
        style={{ height: "auto", width: "100%" }}
      >
        <img
          style={{ height: "100vh", width: "100%", boxSizing: "border-box" }}
          src={back}
        />
      </div>

      <div
        className="router-box"
        style={{
          marginTop: "-425px",
          height: "auto",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* <Default /> */}
        {/* <Work/> */}
        {/* <Blog/> */}

        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resources" element={<Resources/>} />
        </Routes>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
