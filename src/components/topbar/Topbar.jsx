import React from "react";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">ALKHID_SOCIAL</div>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <svg
            className="searchIcon"
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 512 512"
            color="green"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            // type="text"
            placeholder="search for post,fried and video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 448 512"
              fill="white"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <span className="topbarIconBadge">
              <sup>2</sup>
            </span>
          </div>
          <div className="topbarIconItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 576 512"
              fill="white"
            >
              <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z" />
            </svg>{" "}
            <span className="topbarIconBadge">
              <sup>2</sup>
            </span>
          </div>
          <div className="topbarIconItem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 448 512"
              fill="white"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
            </svg>
            <span className="topbarIconBadge">
              <sup>2</sup>
            </span>
          </div>
        </div>
        <img src="/assets/person/6.jpeg" alt="" className="topbarImage" />
      </div>
    </div>
  );
};

export default Topbar;
