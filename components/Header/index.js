import React, { useState, useEffect, useRef } from "react";
import RightArrow from "../assets/svg/Home Page/Arrow.svg";
import styled from "styled-components";
import AirbonLogo from "../assets/svg/Home Page/VVRdigitallogo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = styled.nav`
  height: 85px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  z-index: 10;
`;

const Menu = styled.div`
  display: flex;

  @media (max-width: 980px) {
    display: none;
  }
`;

const Item = styled.li``;

const Linka = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
const Linkm = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 981px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 1050;
  top: 85px;
  // top:85px;
  height: ${(props) => (props.open ? "90vh" : 0)};
  width: 100vw;
  transition: height 0.4s ease-in-out;
  background: transparent
    linear-gradient(to bottom, rgba(0, 46, 91, 0.75), rgba(0, 46, 91, 0.75))
    no-repeat padding-box;
  z-index: 999;
  @media (min-width: 981px) {
    display: none;
  }
`;

const OverlayMenu = styled.div`
  list-style: none;
  position: absolute;
  left: 48%;
  top: 35%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transform-origin: 0% 100%;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Header = (props) => {
  const [activeTabJustify, setactiveTabJustify] = useState();

  const targetRef = useRef(null);
  const router = useRouter();

  const [toggle, toggleNav] = useState(false);
  const [navbarBG, setnavbarBG] = useState(false);

  const [menuColor, setmenuColor] = useState(false);
  // console.log(props.scrollPos);

  toggle ? disableBodyScroll(targetRef) : enableBodyScroll(targetRef);

  useEffect(() => {
    // console.log(props.scrollPos);
    if (props.scrollPos > 100) {
      setnavbarBG(true);
    } else {
      setnavbarBG(false);
    }

    if (props.scrollPos > 100) {
      setmenuColor(true);
    } else {
      setmenuColor(false);
    }

    var element = document.getElementById("my-header-div");

    //border bottom and
    if (router.pathname === "/") {
      if (props.scrollPos > 915) {
        element.className += " bordernbox";
      } else {
        element.classList.remove("bordernbox");
      }
    } else {
      if (props.scrollPos > 365) {
        element.className += " bordernbox";
      } else {
        element.classList.remove("bordernbox");
      }
    }
  }, [props.scrollPos]);

  const hambergurClicked = () => {
    var d = document.getElementById("my-header-div");
    if (toggle === false) {
      setnavbarBG(false);
      d.className += " banner-bg";
    } else {
      if (props.scrollPos > 100) {
        setnavbarBG(true);
        d.classList.remove("banner-bg");
      } else {
        d.classList.remove("banner-bg");
      }
    }
    toggleNav(!toggle);
  };

  return (
    <>
      <div ref={targetRef}>
        <Nav
          id="my-header-div"
          style={{
            background: navbarBG ? "white" : "transparent",
          }}
          className="lef-ri-pa lef-ri-pa-mob sc-bdnylx "
        >
          <Link href="/">
            <a
              aria-current="page"
              className="sc-gtssRu ghbumr active pa0 animation-logo"
            >
              <img src={AirbonLogo} className="vvrlogo" />
              {/* <img src={AirbonLogo} fill={toggle ? "#fff" : "#1238dc"} /> */}
              {/* <img src="/assets/svg/Home Page/Airbon -01.svg" alt="logo" /> */}
              <span
                // id={navbarBG ? "logo-black" : "logo-white"}
                // className="dtc semibold-font  v-mid f-22 pl3"
                className={
                  toggle
                    ? "white dtc semibold-font  v-mid f-22 pl2"
                    : "logo-white dtc semibold-font  v-mid f-22 pl2"
                }
                style={{
                  color: menuColor ? "#000" : "#fff",
                }}
              >
                VVR Group
              </span>
            </a>
          </Link>

          <Menu
            className="sc-hKFyIo fplya-D mr-24"
            id={navbarBG ? "make-black" : "make-white"}
          >
            <Link href="/">
              <a
                className="f-17px fw4 hover-#132b50 medium-font no-underline  ghbumr"
                style={{
                  color: menuColor ? "#000" : "#fff",
                }}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className="f-17px fw4 hover-white medium-font no-underline  ghbumr"
                style={{
                  color: menuColor ? "#000" : "#fff",
                }}
                activeClassName="is-active"
              >
                About
              </a>
            </Link>

            <Link href="/business/vvrlearning">
              <a
                className="f-17px fw4 hover-white medium-font no-underline  ghbumr"
                style={{
                  color: menuColor ? "#000" : "#fff",
                }}
              >
                VVR Learning
              </a>
            </Link>
            <Link href="/vvrdigital">
              <a
                className="f-17px fw4 hover-white medium-font no-underline  ghbumr"
                style={{
                  color: menuColor ? "#000" : "#fff",
                }}
              >
                VVR Digital
              </a>
            </Link>

            <Link href="/contact">
              <a
                className="f-17px fw4 hover-white medium-font no-underline  ghbumr"
                style={{
                  color: menuColor ? "#000" : "#fff",
                }}
              >
                Contact
              </a>
            </Link>
          </Menu>
          <Menu className="sc-eCApGN fplya-D no-mob ">
            {/* <div
              className="f-16 fw4 tc min-211 grow medium-font no-underline white dib  pv3 pointer br3 bg-165df5 animation-request"
              onClick={() => props.openDrawer(false)}
            >
              <div className="dib">Get Quotes</div>
              <span className="pl2" />
              <div className="dib arrow-box v-mid">
                <div className="rightArr">
                  <img src={RightArrow} />
                </div>
              </div>
            </div> */}
            <div className="secondary-menu ">
              <div className="secondary-inner">
                <ul>
                  <a
                    href="https://www.facebook.com/VVR-Learning-110011397576687"
                    target="_blank"
                    style={{
                      padding: "5px",
                      color: "white",
                      marginRight: "5px",
                    }}
                  >
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                  </a>
                  <a
                    href="https://www.instagram.com/vvrlearning/"
                    target="_blank"
                    style={{
                      padding: "5px",
                      color: "white",
                      marginRight: "5px",
                    }}
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/the-vvr-group/about/"
                    target="_blank"
                    style={{
                      padding: "5px",
                      color: "white",
                      marginRight: "5px",
                    }}
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCzRKhnVuWng8vvnFuTF-ODA"
                    target="_blank"
                    style={{
                      padding: "5px",
                      color: "white",
                      marginRight: "5px",
                    }}
                  >
                    <FontAwesomeIcon icon={["fab", "youtube"]} />
                  </a>
                </ul>
              </div>
            </div>
          </Menu>
          <NavIcon onClick={(e) => hambergurClicked()}>
            <Line
              className={toggle ? "bg-white" : "bg-black"}
              // className={navbarBG ? "bg-black" : "bg-white"}
              open={toggle}
            />
            <Line className={toggle ? "bg-white" : "bg-black"} open={toggle} />
            <Line className={toggle ? "bg-white" : "bg-black"} open={toggle} />
          </NavIcon>
        </Nav>

        <Overlay open={toggle}>
          <OverlayMenu
            className="tc"
            style={{ display: toggle ? "block" : "none" }}
            open={toggle}
          >
            <Item>
              <Linka href="/">
                <a className="f-17px fw4 hover-white medium-font no-underline white ">
                  Home
                </a>
              </Linka>
            </Item>
            <Item>
              <Linka
                className="f-17px fw4 hover-white medium-font no-underline white "
                href="/about"
              >
                <a className="f-17px fw4 hover-white medium-font no-underline white ">
                  About
                </a>
              </Linka>
            </Item>
            <Item>
              <Linka href="/services">
                <a className="f-17px fw4 hover-white medium-font no-underline white ">
                  VVR Learning
                </a>
              </Linka>
            </Item>
            <Item>
              <Linka href="/services">
                <a className="f-17px fw4 hover-white medium-font no-underline white ">
                  VVR Digital
                </a>
              </Linka>
            </Item>
            <Item>
              <Linka href="/contact">
                <a className="f-17px fw4 hover-white medium-font no-underline white ">
                  Contact US
                </a>
              </Linka>
            </Item>

            <Item>
              <div
                className="f-16 fw4 tc min-211 grow medium-font no-underline white dib  pv3 pointer br3 bg-165df5 animation-request"
                onClick={() => props.openDrawer(true)}
              >
                <div className="dib">Get Quotes</div>
                <span className="pl2" />
                <div className="dib arrow-box v-mid">
                  <div className="rightArr">
                    <img src={RightArrow} />
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              <section className="navBarMobileSocial__mainWrapper AnimNavBarSocialItems--onboard">
                <a
                  href="#"
                  target="_blank"
                  className="navBarMobileSocial__item pointer"
                >
                  <img
                    src="https://www.codigo.co/img/icons/social-facebook-white.svg"
                    width="12"
                    height="22"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="navBarMobileSocial__item"
                >
                  <img
                    src="https://www.codigo.co/img/icons/social-twitter-white.svg"
                    width="23"
                    height="18"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="navBarMobileSocial__item"
                >
                  <img
                    src="https://www.codigo.co/img/icons/social-instagram-white.svg"
                    width="21"
                    height="19"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="navBarMobileSocial__item"
                >
                  <img
                    src="https://www.codigo.co/img/icons/social-linkedIn-white.svg"
                    width="20"
                    height="20"
                  />
                </a>
              </section>
            </Item>
          </OverlayMenu>
        </Overlay>
      </div>
    </>
  );
};

export default Header;

const styles = {
  header1: {
    background: "transparent",
  },
  header2: {
    background: "#fff",
  },
  navlink_color: {
    color: "#fff",
  },
  navlink_color2: {
    color: "#000",
  },
};
