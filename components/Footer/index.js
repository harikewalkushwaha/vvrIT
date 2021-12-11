import React from "react";
import AirbonLogo from "../assets/svg/Home Page/footerlogo.svg";
import RightArrow from "../assets/svg/Home Page/Arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import BackGround from "../assets/svg/about/wave.png";
import Link from "next/link";

const Footer = styled.footer`
  background: #0f1221;
`;
const MyP = styled.p`
  color: #b9c4d5;
`;

var sectionStyle = {
  width: "100%",
  backgroundSize: "cover",
  backgroundImage: `url(${BackGround})`,
};
export default function index(props) {
  return (
    <>
      <div>
        <footer id="colophon" className="site-footer dark style_old ">
          <div className="shape shape-1">
            <img src="../assets/svg/about/wave.svg" alt="shape" />
          </div>

          <div className="shape shape-2">
            <img src="../assets/svg/about/shape-2.svg" alt="shape" />
          </div>
          <div className="shape shape-3">
            <img src="../assets/svg/about/shape-3.svg" alt="shape" />
          </div>
          <div className="footer no-footer-sticky ">
            <div className="container">
              <div className="row footer-columns footer-sidebars">
                <div className="footer-col footer-col5 col-xs-12 col-md-3">
                  <aside id="text-3" className="widget widget_text">
                    <div className="textwidget">
                      <div className="d-flex">
                        <img
                          loading="lazy"
                          className="wp-image-4261 size-full alignnone"
                          src={AirbonLogo}
                          alt=""
                          width="161"
                          height="65"
                        />
                      </div>

                      <p
                        className="tc-ns w-70 semibold-font"
                        style={{ color: "#fff" }}
                      >
                        We Make It Simple
                      </p>
                      <ul style={{ paddingLeft: "initial" }}>
                        <li>
                          <i className="fa fa-envelope"></i>{" "}
                          <Link href="mailto:admission@vvrlearning.com">
                            <a style={{ color: "rgb(172, 172, 172)" }}>
                              info@vvrdigital.com
                            </a>
                          </Link>
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>{" "}
                          <a
                            href="tel: +81 80 7406 0625"
                            style={{ color: "rgb(172, 172, 172)" }}
                          >
                            +81 80 7406 0625
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-map-marker"></i>VVR Group, VVR
                          Digital 3-30-9, Mukojima, Sumida City, Tokyo 131-0033
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>

                <div className="footer-col footer-col5 col-xs-12 col-md-2">
                  <aside id="nav_menu-2" className="widget widget_nav_menu">
                    <h3 className="widget-title">Company</h3>
                    <div className="">
                      <ul
                        id="menu-company"
                        className="menu"
                        style={{ paddingLeft: "initial" }}
                      >
                        <li
                          id="menu-item-14"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="/about">
                            <a
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              About us
                            </a>
                          </Link>
                        </li>

                        <li
                          id="menu-item-13"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          {" "}
                          <Link href="/about#ourteam">
                            <a
                              href="/about#ourteam"
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              Blog
                            </a>
                          </Link>
                        </li>

                        <li
                          id="menu-item-15"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          {" "}
                          <Link href="/about#testimonial">
                            <a
                              href="/about#testimonial"
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              Contact us
                            </a>
                          </Link>
                        </li>

                        <li
                          id="menu-item-13"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="/career">
                            <a
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              Career
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>

                <div className="footer-col footer-col5 col-xs-12 col-md-2">
                  <aside id="nav_menu-2" className="widget widget_nav_menu">
                    <h3 className="widget-title">Services</h3>
                    <div className="">
                      <ul
                        id="menu-company"
                        className="menu"
                        style={{ paddingLeft: "initial" }}
                      >
                        <li
                          id="menu-item-14"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="/courses">
                            <a
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              Web development
                            </a>
                          </Link>
                        </li>

                        <li
                          id="menu-item-13"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="/event/evnt">
                            <a
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              App development
                            </a>
                          </Link>
                        </li>

                        <li
                          id="menu-item-15"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="/about#gallery">
                            <a
                              href="/about#gallery"
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              Social media management
                            </a>
                          </Link>
                        </li>

                        <li
                          id="menu-item-13"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          {" "}
                          <Link href="/contact#faq">
                            <a
                              href="/contact#faq"
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              Content writting
                            </a>
                          </Link>
                        </li>

                        <li
                          id="menu-item-13"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="/contact#faq">
                            <a
                              href="/contact#faq"
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              UI/UX design
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>

                <div className="footer-col footer-col5 col-xs-12 col-md-2">
                  <aside id="nav_menu-2" className="widget widget_nav_menu">
                    <h3 className="widget-title">Technologies</h3>
                    <div className="">
                      <ul
                        id="menu-company"
                        className="menu"
                        style={{ paddingLeft: "initial" }}
                      >
                        <li
                          id="menu-item-14"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <a
                            href="https://vvrlearning.youcanbook.me/"
                            target="_blank"
                            className="tc-menu-inner"
                            style={{ color: "rgb(172, 172, 172)" }}
                          >
                            React js
                          </a>
                        </li>

                        <li
                          id="menu-item-13"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="https://vvrlearning.youcanbook.me/">
                            <a
                              target="_blank"
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              Next js
                            </a>
                          </Link>
                        </li>

                        <li
                          id="menu-item-15"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="mailto:admission@vvrlearning.com">
                            <a
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              Javascript
                            </a>
                          </Link>
                        </li>
                        <li
                          id="menu-item-15"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="mailto:admission@vvrlearning.com">
                            <a
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              PHP + HTML , CSS
                            </a>
                          </Link>
                        </li>
                        <li
                          id="menu-item-15"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="mailto:admission@vvrlearning.com">
                            <a
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              Flutter
                            </a>
                          </Link>
                        </li>
                        <li
                          id="menu-item-15"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default"
                        >
                          <Link href="mailto:admission@vvrlearning.com">
                            <a
                              className="tc-menu-inner"
                              style={{ color: "rgb(172, 172, 172)" }}
                            >
                              WordPress
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>

                <div className="footer-col footer-col5 col-xs-12 col-md-3">
                  <aside id="text-4" className="home5 widget widget_text">
                    <h3 className="widget-title">Subscribe</h3>
                    <div className="textwidget">
                      <p style={{ marginBottom: "0px" }}>
                        {" "}
                        Follow Us For Latest News
                      </p>
                    </div>
                    <ul id="copyright-menu" className="list-inline">
                      <a
                        href="https://www.facebook.com/VVR-Learning-110011397576687"
                        style={{ padding: "5px", color: "white" }}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={["fab", "facebook"]} size="1x" />
                        {/* <i className="fab fa-facebook"></i> */}
                      </a>
                      <a
                        href="https://www.instagram.com/vvrdigital/"
                        style={{ padding: "5px", color: "white" }}
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={["fab", "instagram"]}
                          size="1x"
                        />
                        {/* <i className="fab fa-instagram"></i> */}
                      </a>
                      <a
                        href="https://www.linkedin.com/company/the-vvr-group/about/"
                        style={{ padding: "5px", color: "white" }}
                        target="_blank"
                      >
                        {/* <i className="fab fa-linkedin"></i> */}
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" />
                      </a>

                      <a
                        href="https://www.youtube.com/channel/UCzRKhnVuWng8vvnFuTF-ODA"
                        style={{ padding: "5px", color: "white" }}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={["fab", "youtube"]} size="1x" />
                        {/* <i className="fab fa-youtube"></i> */}
                      </a>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area no-footer-sticky ">
            <hr className="hr-line mb0 footerline"></hr>
            <div className="container">
              <div className="copyright-content">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="copyright-text">
                      ©️ 2021 VVR Digital. All rights reserved.
                    </div>
                  </div>
                  <div
                    className="col-sm-6 text-right"
                    // style={{ paddingTop: "9px" }}
                  >
                    {/* Cooked with &nbsp;
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "red" }}
                      />
                      &nbsp;by VVR Digital. */}
                    <a href="#" style={{ zIndex: "999" }}>
                      {" "}
                      Privacy policy{" "}
                    </a>
                    &nbsp; | &nbsp;
                    <a href="#" style={{ zIndex: "999" }}>
                      Term & Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
