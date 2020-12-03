import React from "react";
// import { GlobalStyle, Wrapper } from "./App.styles";
// import "./App.css";

function App() {
  return (
    <div className="green-skin">
      {/*  */}
      <div className="Loader"></div>
      {/*  */}
      <div id="main-wrapper">
        {/*  */}
        <div className="header header-light">
          <div className="container-fluid">
            <nav id="navigation" className="navigation navigation-landscape">
              {/*  */}
              <div className="nav-header">
                <a className="nav-brand" href="##">
                  <img src="assets/img/logo.png" className="logo" alt="" />
                </a>
                <div className="nav-toggle"></div>
              </div>
              {/*  */}
              <div
                className="nav-menus-wrapper"
                style={{ transitionProperty: "none" }}
              >
                <ul className="nav-menu">
                  {/*  */}
                  <li className="active">
                    <a href="##">
                      Home<span className="submenu-indicator"></span>
                    </a>
                    <ul
                      className="nav-dropdown nav-submenu"
                      style={{ right: "auto", display: "none" }}
                    >
                      <li>
                        <a href="index.html" className="active">
                          Home Style 1
                        </a>
                      </li>
                      <li>
                        <a href="home-2.html">Home Style 2</a>
                      </li>
                      <li>
                        <a href="home-3.html">Home Style 3</a>
                      </li>
                      <li>
                        <a href="home-4.html">Home Style 4</a>
                      </li>
                      <li>
                        <a href="home-5.html">Home Style 5</a>
                      </li>
                      <li>
                        <a href="home-6.html">Home Style 6</a>
                      </li>
                      <li>
                        <a href="home-7.html">Home Style 7</a>
                      </li>
                      <li>
                        <a href="home-8.html">Home Style 8</a>
                      </li>
                    </ul>
                  </li>
                  {/*  */}
                  <li>
                    <a href="##">
                      For Candidates<span className="submenu-indicator"></span>
                    </a>
                    <ul
                      className="nav-dropdown nav-submenu"
                      style={{ right: "auto", display: "none" }}
                    >
                      <li>
                        <a href="#">
                          Search job Option
                          <span className="submenu-indicator"></span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
