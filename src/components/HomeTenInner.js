"use client";
import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowAltCircleRight,
  FaSearch,
} from "react-icons/fa";

import Link from "next/link";

const HomeTenInner = () => {
  const pdfFilePath = "/myResume/MuzammilMuradResumeFrontEnd.pdf";
  return (
    <>
      <div style={{ background: "#021638" }}>
        {/* search popup start*/}
        <div className="td-search-popup" id="td-search-popup">
          <form action="/" className="search-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search....."
              />
            </div>
            <button type="submit" className="submit-btn">
              <FaSearch />
            </button>
          </form>
        </div>
        {/* search popup end*/}
        <div className="body-overlay" id="body-overlay" />
        {/* page title start */}
        <div
          id="banner"
          className="banner-area banner-area_single banner-area-left-style mt-0 bg-relative banner-area-1 banner-area-8 pd-bottom-100 bg-cover"
          style={{ backgroundImage: 'url("./assets/img/home-10/12.png")' }}
        >
          <div className="banner-left">
            <div className="logo">
              <img src="assets/img/home-10/logo.png" alt="img" />
            </div>
            <ul>
              <li>
                <a href="#banner">
                  <img src="assets/img/home-10/1.png" alt="img" />
                </a>
              </li>
              {/* <li>
                <a href="#about">
                  <img src="assets/img/home-10/2.png" alt="img" />
                </a>
              </li> */}
              <li>
                <a href="#service">
                  <img src="assets/img/home-10/3.png" alt="img" />
                </a>
              </li>
              <li>
                <a href="#innovating">
                  <img src="assets/img/home-10/4.png" alt="img" />
                </a>
              </li>
              <li>
                <a href="#skill">
                  <img src="assets/img/home-10/5.png" alt="img" />
                </a>
              </li>
              {/* <li>
                <a href="#pricing">
                  <img src="assets/img/home-10/6.png" alt="img" />
                </a>
              </li> */}
              {/* <li>
                <a href="#testimonial">
                  <img src="assets/img/home-10/7.png" alt="img" />
                </a>
              </li> */}
              <li>
                <a href="#contact">
                  <img src="assets/img/home-10/8.png" alt="img" />
                </a>
              </li>
            </ul>
          </div>
          <div className="container pt-xl-5 pb-xl-5">
            <div className="row">
              <div className="col-lg-6 order-lg-2 text-center">
                <div
                  className="position-relative mt-lg-0 wow animated fadeInRight"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <img
                    className="profile-image-1"
                    src="assets/img/YELLOW_IMG.jpg"
                    alt="img"
                  />
                  <img
                    className="animate-img top_image_bounce"
                    src="assets/img/home-10/10.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 align-self-center">
                <div className="banner-inner pe-xl-5">
                  <h2
                    className="mb-2 title text-white wow animated fadeInLeft"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    Hi ! I’m Murad{" "}
                  </h2>
                  <h3
                    className="mb-3 mb-lg-4 text-white wow animated fadeInLeft mb-0"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    Web Developer
                  </h3>
                  <p
                    className="content text-white pe-xl-5 wow animated fadeInLeft"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.5s"
                  >
                    As a passionate Web Developer, I specialize in creating
                    responsive and user-friendly web applications. My expertise
                    lies in developing reusable components, ensuring efficient
                    and maintainable codebases. I excel at integrating APIs to
                    deliver seamless functionality and dynamic user experiences.
                    With a focus on performance and scalability, I strive to
                    craft websites that look great and perform flawlessly across
                    all devices.
                  </p>
                  <a
                    className="me-lg-2 me-1 btn btn-base_6 wow animated fadeInLeft"
                    href={pdfFilePath}
                    download="MuzammilMuradResumWebDeveloper.pdf"
                  >
                    Download Resume <FaArrowAltCircleRight className="mt-4" />
                  </a>
                  {/* <Link
                    href="#"
                    className="btn btn-gray wow animated fadeInLeft  mt-4 mt-md-0"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                    onClick={() => setOpen(true)}
                  >
                    <FaPlay className="mt-4" /> Watch Video
                  </Link> */}
                  <div
                    className="media wow animated fadeInLeft mb-0 mt-xl-5 mt-4 pt-xl-5"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.5s"
                  >
                    <div className="media-left me-3">
                      <img
                        className="main-img"
                        src="assets/img/home-10/11.png"
                        alt="img"
                      />
                    </div>
                    <div className="media-body">
                      <h2 className="text-white mb-0">3+</h2>
                      <p className="text-white">Years Of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}
        {/* about area start */}
        <div id="about" className="about-area bg-black-ico pd-top-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-thumb-inner pe-xl-5 me-xl-5 wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <img
                    className="profile-image-1"
                    src="assets/img/YELLOW_IMG.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div
                className="col-lg-6 wow animated fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <div className="section-title">
                  <h6 className="sub-title bg-none p-0 mb-3 color-base_6_6">
                    About Me
                  </h6>
                  <h2 className="title text-white">
                    Front End <br /> Web Developer
                  </h2>
                  <p className="content mb-4 mb-xl-5 text-white">
                    I am Murad, having 3+ years of professional experience of
                    developing web applications and UI's for websites and
                    handling clients. I am dedicated to provide quality of code
                    and optimize application within timeline.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-about-inner-2">
                        <div className="thumb mb-3">
                          <img src="assets/img/home-10/13.png" alt="img" />
                        </div>
                        <div className="details">
                          <h5 className="text-white">My Ambition</h5>
                          <p className="text-white">
                            As a Frontend Developer, my ambition is to create
                            seamless and visually appealing user interfaces that
                            enhance user experiences. I strive to stay updated
                            with the latest technologies and best practices to
                            build efficient, scalable, and accessible web
                            applications. My goal is to continuously improve my
                            skills in creating reusable components, optimizing
                            performance, and integrating cutting-edge designs. I
                            am passionate about bridging creativity and
                            functionality to deliver exceptional digital
                            experiences.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-about-inner-2">
                        <div className="thumb mb-3">
                          <img src="assets/img/home-10/14.png" alt="img" />
                        </div>
                        <div className="details">
                          <h5 className="text-white">My Purpose</h5>
                          <p className="text-white">
                            The purpose of my work as a Frontend Developer is to
                            bring ideas to life by crafting interactive,
                            visually engaging, and user-centric web
                            applications. I focus on creating responsive
                            designs, ensuring seamless functionality across
                            devices, and delivering an intuitive user
                            experience. Through clean code, reusable components,
                            and efficient API integrations, I aim to build
                            scalable solutions that bridge creativity with
                            functionality. My portfolio showcases my dedication
                            to combining technical expertise with innovative
                            design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about area end */}
        {/* inovating area start */}
        <div id="innovating" className="inovating-area pd-top-90">
          <div className="container">
            <div className="border-bottom-2 pb-4 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="text-white">
                    Building Engaging Interfaces for Seamless Digital
                    Experiences
                  </h2>
                </div>
                <div className="col-lg-6 align-self-center">
                  <nav className="inovating-tab text-lg-end mt-4 mt-lg-0">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Experience
                      </button>
                      <button
                        className="nav-link"
                        id="nav-project-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-project"
                        type="button"
                        role="tab"
                        aria-controls="nav-project"
                        aria-selected="false"
                      >
                        Projects
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Education
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="media mb-4">
                      <div className="media-left color-base_6 pe-3">
                        <FaAngleDoubleRight />
                      </div>
                      <div className="media-body">
                        <p className="text-white">Intware Technology</p>
                        <h6 className="text-white">Front End Web Developer</h6>
                        <p className="text-white">Nov 2022 - Present</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media mb-4">
                      <div className="media-left color-base_6 pe-3">
                        <FaAngleDoubleRight />
                      </div>
                      <div className="media-body">
                        <p className="text-white">Redbytes Software</p>
                        <h6 className="text-white">Front End Web Developer</h6>
                        <p className="text-white">May 2022 - Oct 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media mb-4">
                      <div className="media-left color-base_6 pe-3">
                        <FaAngleDoubleRight />
                      </div>
                      <div className="media-body">
                        <p className="text-white">Redbytes Software</p>
                        <h6 className="text-white">Intership Trainee</h6>
                        <p className="text-white">Nov 2021 - Apr 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-project"
                role="tabpanel"
                aria-labelledby="nav-project-tab"
              >
                <div className="row gap-5">
                  <div
                    className="col-12"
                    style={{ borderBottom: "1px solid white" }}
                  >
                    <div className="media mb-4">
                      <div className="media-left color-base_6 pe-3">
                        <FaAngleDoubleRight />
                      </div>
                      <div className="media-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <p className="text-white"> Project Name : ONP</p>
                          </div>
                          <div className="col-lg-3 col-md-6 ">
                            <a
                              className="text-info"
                              href="https://onpsim-pmpi-web-dev.azurewebsites.net/login"
                              target="_blank"
                            >
                              Link
                            </a>
                          </div>
                        </div>
                        <div>
                          <p className="text-white">Description :</p>
                          <p className="text-white">
                            Developed a comprehensive web application for port
                            management, focusing on tracking and managing data
                            related to fish species, fishermen, ships.
                          </p>
                        </div>
                        <div>
                          <p className="text-white">Key Features :</p>
                          <ul className="text-white">
                            <li>
                              Fishermen and ship registration system with secure
                              login and role-based access.
                            </li>
                            <li>
                              Ship tracking and maintenance records with alert
                              notifications for inspections and renewals.
                            </li>
                            <li>
                              Reporting tools for generating export data and
                              compliance reports.
                            </li>
                            <li>
                              Responsive design for seamless usability across
                              devices. Technologies Used: React.js, Bootstrap,
                              Redux/Redux Saga, Material-UI, Axios, CSS Grid,
                              Css Flexbox, Custom Tables.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12"
                    style={{ borderBottom: "1px solid white" }}
                  >
                    <div className="media mb-4">
                      <div className="media-left color-base_6 pe-3">
                        <FaAngleDoubleRight />
                      </div>
                      <div className="media-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <p className="text-white">
                              {" "}
                              Project Name : Priston Fintech
                            </p>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <a
                              className="text-info"
                              href="https://accountingbackoffice.ui.redbytes.in/userlist"
                              target="_blank"
                            >
                              Link
                            </a>
                          </div>
                        </div>
                        <div>
                          <p className="text-white">Description :</p>
                          <p className="text-white">
                            Designed an intuitive and responsive user interface
                            for an accounting web application aimed at
                            streamlining financial management for businesses.
                          </p>
                        </div>
                        <div>
                          <p className="text-white">Key Features :</p>
                          <ul className="text-white">
                            <li>
                              Dashboard to visualize financial summaries and key
                              metrics.
                            </li>
                            <li>
                              Interactive tables for managing transactions,
                              invoices, and expense tracking.
                            </li>
                            <li>
                              Multi-step forms for generating financial reports
                              and budgets.
                            </li>
                            <li>
                              Responsive design for seamless usability across
                              devices. Technologies Used: React.js, Material-UI,
                              Chart.js, CSS Flexbox,redux, Axios (for mock data
                              fetching). Your Role: Developed the entire
                              frontend using React.js, integrated Chart.js for
                              financial data visualization, and implemented
                              Material-UI components for a professional design.
                              Outcome: Delivered a clean and user-friendly
                              interface, enabling efficient financial operations
                              with positive feedback from stakeholders.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12"
                    style={{ borderBottom: "1px solid white" }}
                  >
                    <div className="media mb-4">
                      <div className="media-left color-base_6 pe-3">
                        <FaAngleDoubleRight />
                      </div>
                      <div className="media-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <p className="text-white">
                              Project Name : Starkenn
                            </p>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <a
                              className="text-info"
                              href="https://admin-starkenn.ui.redbytes.in/"
                              target="_blank"
                            >
                              Link
                            </a>
                          </div>
                        </div>
                        <div>
                          <p className="text-white">Description :</p>
                          <p className="text-white">
                            Designed a responsive web interface for a vehicle
                            tracking application to monitor and manage fleet
                            operations in real time.
                          </p>
                        </div>
                        <div>
                          <p className="text-white">Key Features :</p>
                          <ul className="text-white">
                            <li>
                              Interactive map view displaying vehicle locations
                              and routes using live GPS data.
                            </li>
                            <li>
                              Dashboard with key metrics such as distance
                              traveled, fuel consumption, and vehicle health.
                            </li>
                            <li>
                              Notifications for route deviations, maintenance
                              reminders, and alerts.
                            </li>
                            <li>
                              Admin panel for managing vehicle and driver
                              details. Technologies Used: React.js, Bootstrap,
                              Leaflet.js/Google Maps API, Material-UI,
                              Axios,redux, CSS Grid. Your Role: Designed and
                              implemented the user interface using React.js,
                              Material-UI, and Bootstrap for a responsive and
                              consistent layout, integrated map components with
                              GPS data, and optimized for mobile-friendly usage.
                              Outcome: Delivered a feature-rich UI that enhanced
                              operational efficiency, receiving positive
                              feedback from users for its clarity and usability.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12"
                    style={{ borderBottom: "1px solid white" }}
                  >
                    <div className="media mb-4">
                      <div className="media-left color-base_6 pe-3">
                        <FaAngleDoubleRight />
                      </div>
                      <div className="media-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 ">
                            <p className="text-white">
                              Project Name : My Universe
                            </p>
                          </div>
                          <div className="col-lg-3 col-md-6 ">
                            <a
                              className="text-info"
                              href="https://my-univrs.ui.redbytes.in/dashboard"
                              target="_blank"
                            >
                              Link
                            </a>
                          </div>
                        </div>
                        <div>
                          <p className="text-white">Description :</p>
                          <p className="text-white">
                            Developed a user-friendly web application for
                            university management,hostel room,events, providing
                            seamless access to academic resources and
                            administrative tools for students, faculty, and
                            administrators.
                          </p>
                        </div>
                        <div>
                          <p className="text-white">Key Features :</p>
                          <ul className="text-white">
                            <li>
                              Secure login and authentication system with
                              role-based access for students, faculty, and
                              admins.
                            </li>
                            <li>
                              Faculty tools for managing courses, uploading
                              grades, and sharing resources.
                            </li>
                            <li>
                              Event calendar and notification system for
                              academic and extracurricular activities.
                            </li>
                            <li>
                              Technologies Used: React.js, Bootstrap, formik,
                              Firebase/Auth0 for authentication, Material-UI,
                              Axios, CSS Flexbox ,redux.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12"
                    style={{ borderBottom: "1px solid white" }}
                  >
                    <div className="media mb-4">
                      <div className="media-left color-base_6 pe-3">
                        <FaAngleDoubleRight />
                      </div>
                      <div className="media-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 ">
                            <p className="text-white">
                              Project Name : Steel Express
                            </p>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <a
                              className="text-info"
                              href="https://steel-express.ui.redbytes.in/Login"
                              target="_blank"
                            >
                              Link
                            </a>
                          </div>
                        </div>
                        <div>
                          <p className="text-white">Description :</p>
                          <p className="text-white">
                            Developed a web application tailored for a steel
                            company to manage inventory, orders, and client
                            communications efficiently.
                          </p>
                        </div>
                        <div>
                          <p className="text-white">Key Features :</p>
                          <ul className="text-white">
                            <li>
                              Product catalog showcasing steel grades,
                              dimensions, and availability with an interactive
                              React Slider for visual product navigation.
                            </li>
                            <li>
                              Real-time inventory management for tracking stock
                              levels and restocking alerts.
                            </li>
                            <li>
                              Order placement and tracking system with automated
                              status updates.
                            </li>
                            <li>
                              Client portal for invoices, purchase history, and
                              customized pricing.
                            </li>
                            <li>
                              Technologies Used: React.js, React Slider,
                              Bootstrap, Material-UI, Axios, CSS Grid ,
                              formik,redux
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="media mb-4">
                      <div className="media-left color-base_6 pe-3">
                        <FaAngleDoubleRight />
                      </div>
                      <div className="media-body">
                        <p className="text-white">B - TECH</p>

                        <p className="text-white">
                          DBAT University / 2019 - 2022
                        </p>
                        <p>
                          Matoshri Pratishthan College Of Engineering, Nanded
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* inovating area end */}
        {/* service area start */}
        <div id="service" className="service-area bg-relative pd-top-110 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-title style-white">
                  <h6 className="sub-title bg-none p-0 mb-3 color-base_6">
                    service
                  </h6>
                  <h2 className="title">Service Offer From Me</h2>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="single-service-inner bg-gray_2 border-radius-0">
                      <div className="thumb">
                        <img src="assets/img/home-10/16.png" alt="img" />
                      </div>
                      <div className="same-height-cards">
                        <h5 className="text-white">UI Development</h5>
                        <p className="text-white mb-0">
                          As a passionate UI Developer, I specialize in crafting
                          visually engaging and user-friendly interfaces. With a
                          keen eye for design and attention to detail, I focus
                          on delivering responsive, accessible, and intuitive
                          web applications. My expertise lies in turning ideas
                          into seamless user experiences using modern tools and
                          best practices. Dedicated to bridging creativity with
                          functionality, I ensure every project enhances user
                          satisfaction and engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-service-inner bg-gray_2 border-radius-0">
                      <div className="thumb">
                        <img src="assets/img/home-10/18.png" alt="img" />
                      </div>
                      <div className="same-height-cards">
                        <h5 className="text-white">API Integration</h5>
                        <p className="text-white mb-0">
                          API integration plays a crucial role in my portfolio,
                          demonstrating my ability to connect web applications
                          with external services for seamless data exchange and
                          functionality. I specialize in implementing RESTful
                          and GraphQL APIs, ensuring smooth communication
                          between frontend and backend systems. By integrating
                          third-party APIs, I deliver dynamic features such as
                          real-time updates, user authentication, and
                          data-driven experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="single-service-inner bg-gray_2 border-radius-0">
                      <div className="thumb">
                        <img src="assets/img/home-10/19.png" alt="img" />
                      </div>
                      <div className="same-height-cards">
                        <h5 className="text-white">CI / CD deployement</h5>
                        <p className="text-white mb-0">
                          CI/CD deployment highlights my expertise in automating
                          the software delivery process. I utilize tools like
                          GitHub Actions, Jenkins, or CircleCI to streamline
                          building, testing, and deploying applications with
                          speed and reliability. By integrating continuous
                          integration pipelines, I ensure that code changes are
                          validated early, reducing errors. My continuous
                          deployment setups enable seamless delivery of updates
                          to production, fostering agility and maintaining high
                          application availability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* service area end */}
        {/* about area start */}
        <div
          id="skill"
          className="about-area about-area_single_page  pd-top-120 pd-bottom-90"
        >
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 align-self-center wow animated fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <div className="section-title mt-5 mt-lg-0 mb-0">
                  <h6 className="sub-title bg-none p-0 mb-3 color-base_6">
                    My skill
                  </h6>
                  <h2 className="title text-white mb-4">
                    My Path to Skill <br /> Mastery
                  </h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">HTML</h6>
                        <div className="skill">
                          <div
                            style={{ width: "95%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">95</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">React Js</h6>
                        <div className="skill">
                          <div
                            style={{ width: "80%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">90</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Css</h6>
                        <div className="skill">
                          <div
                            style={{ width: "90%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">90</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Next Js</h6>
                        <div className="skill">
                          <div
                            style={{ width: "70%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">70</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Java Script</h6>
                        <div className="skill">
                          <div
                            style={{ width: "70%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">70</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Bootstrap</h6>
                        <div className="skill">
                          <div
                            style={{ width: "90%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">90</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Material UI</h6>
                        <div className="skill">
                          <div
                            style={{ width: "90%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">90</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Git Lab / GitHub</h6>
                        <div className="skill">
                          <div
                            style={{ width: "80%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">80</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Npm / Yarn</h6>
                        <div className="skill">
                          <div
                            style={{ width: "90%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">90</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Jira Tool</h6>
                        <div className="skill">
                          <div
                            style={{ width: "70%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">70</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Figma</h6>
                        <div className="skill">
                          <div
                            style={{ width: "80%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">80</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Xd design</h6>
                        <div className="skill">
                          <div
                            style={{ width: "80%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">80</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Xd design</h6>
                        <div className="skill">
                          <div
                            style={{ width: "80%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">80</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-progressbar bg-transparent">
                        <h6 className="text-white">Axios</h6>
                        <div className="skill">
                          <div
                            style={{ width: "90%" }}
                            className="skill-bar skill1 wow slideInLeft animated"
                          ></div>
                          <p className="skill-count1">
                            <span className="counter">90</span> %
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about area end */}
        {/* gallery area start */}
        {/* <div className="gallery-area gallery-area_single_page  bg-relative">
          <div className="container">
            <div className="section-title style-white text-center">
              <h6 className="sub-title bg-none p-0 mb-3 color-base_6">
                Portfolio
              </h6>
              <h2 className="title">Meet My Projects</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-case-study-inner style-4">
                  <div className="thumb  img-fit-container ">
                    <img src="assets/img/home-10/21.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <Link href="/project-details">Tecnology Farms</Link>
                    </h5>
                    <Link className="cat" href="#">
                      Las vegas
                    </Link>
                    <Link className="right-arrow" href="#">
                      <FaAngleDoubleRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-case-study-inner style-4">
                  <div className="thumb  img-fit-container ">
                    <img src="assets/img/home-10/22.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <Link href="/project-details">Tecnology Farms</Link>
                    </h5>
                    <Link className="cat" href="#">
                      Las vegas
                    </Link>
                    <Link className="right-arrow" href="#">
                      <FaAngleDoubleRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-case-study-inner style-4">
                  <div className="thumb  img-fit-container ">
                    <img src="assets/img/home-10/23.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <Link href="/project-details">Tecnology Farms</Link>
                    </h5>
                    <Link className="cat" href="#">
                      Las vegas
                    </Link>
                    <Link className="right-arrow" href="#">
                      <FaAngleDoubleRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-case-study-inner style-4">
                  <div className="thumb  img-fit-container ">
                    <img src="assets/img/home-10/24.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <Link href="/project-details">Tecnology Farms</Link>
                    </h5>
                    <Link className="cat" href="#">
                      Las vegas
                    </Link>
                    <Link className="right-arrow" href="#">
                      <FaAngleDoubleRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-case-study-inner style-4">
                  <div className="thumb  img-fit-container ">
                    <img src="assets/img/home-10/25.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <Link href="/project-details">Tecnology Farms</Link>
                    </h5>
                    <Link className="cat" href="#">
                      Las vegas
                    </Link>
                    <Link className="right-arrow" href="#">
                      <FaAngleDoubleRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-case-study-inner style-4">
                  <div className="thumb  img-fit-container ">
                    <img src="assets/img/home-10/26.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <Link href="/project-details">Tecnology Farms</Link>
                    </h5>
                    <Link className="cat" href="#">
                      Las vegas
                    </Link>
                    <Link className="right-arrow" href="#">
                      <FaAngleDoubleRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* gallery area end */}
        {/* pricing-area start */}
        {/* <div
          id="pricing"
          className="pricing-area pricing-area_single_page pd-top-90 pd-bottom-90"
        >
          <div className="container">
            <div className="section-title text-center style-white">
              <h6 className="sub-title bg-transparent color-base_6 p-0">
                My Pricing Plan
              </h6>
              <h2 className="title">Best Pricing Plan for You</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-pricing-inner style-2 bg-gray_2 border-radius-30">
                  <h5 className="mb-2 text-white">Logo Design</h5>
                  <h2 className="mb-4 text-white">$19</h2>
                  <ul>
                    <li className="text-white">
                      <FaRegCheckCircle /> 1 Minimalist logo
                    </li>
                    <li className="text-white">
                      <FaRegCheckCircle /> Unique design
                    </li>
                    <li className="text-white">
                      <FaRegCheckCircle /> Logo transparency
                    </li>
                    <li className="text-white">
                      <FaRegCheckCircle /> Printable file
                    </li>
                  </ul>
                  <Link className="btn btn-base_6 border-radius w-100" href="#">
                    Choose Plan
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-pricing-inner style-2 bg-gray_2 border-radius-30 price-active">
                  <h5 className="mb-2 text-white">Web Design</h5>
                  <h2 className="mb-4 text-white">$29</h2>
                  <ul>
                    <li className="text-white">
                      <FaRegCheckCircle /> 10 Figma design page
                    </li>
                    <li className="text-white">
                      <FaRegCheckCircle /> Well organized layer
                    </li>
                    <li className="text-white">
                      <FaRegCheckCircle /> Bootstrap 5 grid system
                    </li>
                    <li className="text-white">
                      <FaRegCheckCircle /> Easily customizable
                    </li>
                  </ul>
                  <Link className="btn btn-base border-radius w-100" href="#">
                    Choose Plan
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-pricing-inner style-2 bg-gray_2 border-radius-30">
                  <h5 className="mb-2 text-white">Web Development</h5>
                  <h2 className="mb-4 text-white">$39</h2>
                  <ul>
                    <li className="text-white">
                      <FaRegCheckCircle /> 10 Dynamic page
                    </li>
                    <li className="text-white">
                      <FaRegCheckCircle /> Easily customizable
                    </li>
                    <li className="text-white">
                      <FaRegCheckCircle /> Bootstrap 5 template
                    </li>
                    <li className="text-white">
                      <FaRegCheckCircle /> Responsive design
                    </li>
                  </ul>
                  <Link className="btn btn-base_6 border-radius w-100" href="#">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* pricing-area start */}
        {/* testimonial-area start */}
        {/* <div
          id="testimonial"
          className="testimonial-area testimonial-area_single_page bg-gray_2 position-relative pd-top-100 pd-bottom-100 me-xl-5 ms-xl-5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-title style-white">
                  <h6 className="sub-title bg-transparent color-base_6 p-0">
                    Testimonials
                  </h6>
                  <h2 className="title">Amazing Feedbacks!</h2>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-testimonial-inner style-4">
                      <div className="thumb">
                        <img src="assets/img/home-10/28.png" alt="img" />
                      </div>
                      <p className="text-white">
                        Contrary popular belief, Lorem in simply random text. It
                        has roots a piece of classical Latin
                      </p>
                      <div className="ratting-inner mt-3 mb-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <h6 className="text-white">Devon Lane</h6>
                      <p className="designation mb-0 text-white">
                        Marketing Coordinator
                      </p>
                      <div className="icon mb-2">
                        <img src="assets/img/home-10/27.png" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-testimonial-inner style-4">
                      <div className="thumb">
                        <img src="assets/img/home-10/29.png" alt="img" />
                      </div>
                      <p className="text-white">
                        Contrary popular belief, Lorem in simply random text. It
                        has roots a piece of classical Latin
                      </p>
                      <div className="ratting-inner mt-3 mb-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <h6 className="text-white">Devon Lane</h6>
                      <p className="designation mb-0 text-white">
                        Marketing Coordinator
                      </p>
                      <div className="icon mb-2">
                        <img src="assets/img/home-10/27.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="client-slider owl-carousel">
                <Marquee gradient={false}>
                  <div className="thumb">
                    <img src="assets/img/home-10/32.png" alt="img" />
                  </div>
                  <div className="thumb">
                    <img src="assets/img/home-10/33.png" alt="img" />
                  </div>
                  <div className="thumb">
                    <img src="assets/img/home-10/34.png" alt="img" />
                  </div>
                  <div className="thumb">
                    <img src="assets/img/home-10/35.png" alt="img" />
                  </div>
                  <div className="thumb">
                    <img src="assets/img/home-10/32.png" alt="img" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div> */}
        {/* testimonial-area start */}
        {/* blog-area start */}
        {/* <div className="blog-area blog-area_single_page pd-top-110 pd-bottom-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center style-white">
                  <h6 className="sub-title p-0 color-base_6 bg-transparent">
                    My Blog
                  </h6>
                  <h2 className="title">My Latest Written Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-list bg-gray_2">
                  <div className="thumb m-3 mb-0">
                    <img
                      className="border-radius-5"
                      src="assets/img/home-10/36.png"
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <ul className="blog-meta ps-0">
                      <li className="text-white">
                        <FaRegUser /> By Admin
                      </li>
                    </ul>
                    <h5 className="mb-3 text-white">
                      <Link href="/blog-details">
                        Desining Better Links for your upcomming Business
                      </Link>
                    </h5>
                    <Link
                      className="readmore-text text-white"
                      href="/blog-details"
                    >
                      Read More <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-list bg-gray_2">
                  <div className="thumb m-3 mb-0">
                    <img
                      className="border-radius-5"
                      src="assets/img/home-10/37.png"
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <ul className="blog-meta ps-0">
                      <li className="text-white">
                        <FaRegUser /> By Admin
                      </li>
                    </ul>
                    <h5 className="mb-3 text-white">
                      <Link href="/blog-details">
                        Desining Better Links for your upcomming Business
                      </Link>
                    </h5>
                    <Link
                      className="readmore-text text-white"
                      href="/blog-details"
                    >
                      Read More <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-list bg-gray_2">
                  <div className="thumb m-3 mb-0">
                    <img
                      className="border-radius-5"
                      src="assets/img/home-10/38.png"
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <ul className="blog-meta ps-0">
                      <li className="text-white">
                        <FaRegUser /> By Admin
                      </li>
                    </ul>
                    <h5 className="mb-3 text-white">
                      <Link href="/blog-details">
                        Desining Better Links for your upcomming Business
                      </Link>
                    </h5>
                    <Link
                      className="readmore-text text-white"
                      href="/blog-details"
                    >
                      Read More <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* blog-area start */}
        {/* contact-area start */}
        <div
          id="contact"
          className="contact-area contact-area_single_page pd-bottom-90"
        >
          <div className="container">
            <div className="bg-gray_2 pd-top-90 pd-bottom-100 pe-xl-5 pe-4 ps-xl-5 ps-4">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                  <div className="section-title text-center style-white">
                    <h6 className="sub-title color-base_6 p-0 bg-transparent">
                      Contact me Today
                    </h6>
                    <h2 className="title">
                      Reach Out to Me with Your Inquiry Now
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="border-2 p-xl-4 p-3">
                    <div className="media mb-3 border-bottom-2 pb-4 mb-4">
                      <div className="media-left me-3">
                        <img src="assets/img/home-10/39.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h6 className="mb-0 text-white">Email</h6>
                        <p className="mb-0 fw-400 text-white">
                          muraddevelopersince2021@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="media mb-3 border-bottom-2 pb-4 mb-4">
                      <div className="media-left me-3">
                        <img src="assets/img/home-10/40.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h6 className="mb-0 text-white">Contacts</h6>
                        <p className="mb-0 fw-400 text-white">
                          (+ 91 ) - 7758803838
                        </p>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left me-3">
                        <img src="assets/img/home-10/41.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h6 className="mb-0 text-white">Location</h6>
                        <p className="mb-0 fw-400 text-white">
                          Nanded, Maharashtra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact-area start */}
        {/* footer area start */}
        <footer className="footer-area bg-cover mt-0">
          <div className="footer-bottom" style={{ background: "#021638" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  {/* <p>© agiletech 2024 | All Rights Reserved</p> */}
                </div>
                <div className="col-md-6 text-lg-end">
                  <Link href="#">Contact Me</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer area end */}
      </div>
    </>
  );
};

export default HomeTenInner;
