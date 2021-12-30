import Head from "next/head";
import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import CommonTopBar from "../components/commons/commonTopBar";
import BackGround from "../public/assets/svg/about/6.png";
import BackGround1 from "../public/assets/svg/about/4.png";
import BackGround2 from "../public/assets/svg/about/VikasProfile.png";
import RightArrow from "../components/assets/svg/Home Page/Arrow.svg";
import LeftArrow from "../components/assets/svg/Home Page/leftarrow.png";
import { data } from "../data/cust_stories";
import ReactLogoArrow from "../components/assets/svg/Home Page/Arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

import video1 from "../public/assets/video/Japvideovvr.mp4";
import Model from "../components/videoModal";

import {
  webdevelopment,
  marketing,
  uidesign,
  outsourcing,
} from "../data/services";

var sectionStyle = {
  width: "100%",
  backgroundSize: "cover",
  backgroundImage: `url(${BackGround})`,
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 960 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 959, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function about() {
  const [activeTab, setActiveTab] = useState("webdevelopment");
  const [showCards, setshowCards] = useState(webdevelopment);
  useEffect(() => {
    // console.log(webdevelopment);
    var d = document.getElementById("webdevelopment");
    d.className += " active-tab";
  }, []);

  const onChangeTab = (val) => {
    var d = document.getElementById(val);
    //remove class
    var active = document.getElementById(activeTab);
    const element = document.querySelector("#" + activeTab);
    if (element.classList.contains("active-tab")) {
      element.classList.remove("active-tab");
    }

    d.className += " active-tab";
    setActiveTab(val);

    switch (val) {
      case "webdevelopment":
        setshowCards(webdevelopment);
        break;
      case "file_access":
        setshowCards(marketing);
        break;
      case "collaboration":
        setshowCards(uidesign);
        break;
      case "security":
        setshowCards(outsourcing);
        break;
      default:
        setshowCards(webdevelopment);
        break;
    }
  };

  const nextRef = useRef();
  const prevRef = useRef();

  const [sliderAction, setsliderAction] = useState(null);

  const doSlicderAction = (kaunsa) => {
    setsliderAction(kaunsa);
    nextRef.current.getAlert(kaunsa);
  };
  return (
    <div>
      <Head>
        <title>VVR Digital - About us</title>
      </Head>

      <CommonTopBar page={"About Us"} />

      {/* <div className="center mw8-ns mw-100 about-left-right ">
        <p className=" f2-l f3-ns f4 fw4 tc-ns airbon-txt   regular-font pv4">
          Airbon is an end-to-end encrypted, zero-knowledge content
          collaboration platform designed to safeguard the digital valuables of
          organizations with the highest classification in the cloud
        </p>
      </div> */}
      <section className="lef-ri-pa pv5 about-banner-bg about-section2">
        <div className="pv2">
          <section className="">
            <article className="center">
              {/* <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                Who we are
              </h2> */}
              <div className="dt-ns dt--fixed-ns w-100">
                <h2 className="medium-font f-40 fw4 clr-132 mt0 mb4 tc width-100 belowline">
                  About VVR Group
                </h2>
                <p className="black regular-font tc f-18px lh-copy mv0 width-100">
                  We are a team of digitally driven individuals, working in our
                  fields of proficiency to enhance and realign your business to
                  the ever-changing trends of digital and off-line marketing. We
                  want to help businesses establish themselves online, and do it
                  in a way that provides the highest possible quality at
                  competitive rates. We are extremely passionate about what we
                  do, and hence are always upgrading our skills and knowledge to
                  constantly bring value to every project we take on, while
                  making the process extremely simple and easy for you to
                  follow.
                </p>
                {/* <div className=" dtc-l v-mid wow fadeInLeft">
                  <div className="sec2bgclr  width-100">
                    <div className="pa4-ns pa3">
                      <img
                        src="/assets/svg/about/Aboutus.png"
                        className="pt1 pl4 mw-100"
                      />
                    </div>
                  </div>
                </div> */}
                {/* <div className=" dtc-l tc   wow fadeInRight">
                 
                </div> */}
                <section
                  className="section video-popupabout ptabout ob is-visible mt4"
                  data-observe=""
                  data-visible=""
                >
                  <div className="wrap video-popup__wrap">
                    <div
                      className="video-popup__video ob is-visible"
                      data-observe=""
                      data-visible=""
                    >
                      <div className="video-popup__video-btn">
                        <div className="video-popup__video-tag">
                          <video
                            autoplay="autoplay"
                            loop="loop"
                            muted="muted"
                            playsinline=""
                          >
                            <source src={video1} type="video/mp4" />
                          </video>
                        </div>
                        <div className="video-popup__u-overlay"></div>
                        <div className="video-popup__u-title">
                          <Model />
                        </div>
                        {/* <div className="video-popup__video-action">
                        <div className="video-popup__video-play">
                          <div className="video-popup__u-play">
                            <svg
                              width="12"
                              height="14"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className=""
                            >
                              <path
                                d="M11.475 6.136a1 1 0 010 1.73l-9.709 5.637a1 1 0 01-1.502-.865V1.364A1 1 0 011.766.499l9.71 5.637z"
                                fill="#4c1864"
                              ></path>
                            </svg>
                          </div>
                          <span>Watch video</span>
                        </div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </section>
        </div>
      </section>
      {/* <div className="h3-l h6-m" /> */}

      <section className=" pb5 about-banner-bg about-section2">
        <div className="pv2">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <h2 className="medium-font f-40 fw4 clr-132 mt0 mb4 tc width-100 belowline">
                  What VVR Group Stands For
                </h2>
                <div
                  className="aboutbanner"
                  // style={{ "--img": `url(${BackGround1})` }}
                >
                  <div className="dt-ns  dt--fixed-ns w-100 ">
                    {/* <h2 className="medium-font f-40 fw4 tc white mt0 mb3 pt5 width-100 "></h2> */}
                    <div className="container mb5 ">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mshado">
                            <div className="">
                              <img
                                src="https://www.rafamemmel.com/templates/corpboot/template/assets/img/mission.jpg"
                                alt="Mission"
                                className="img-responsive mb15 "
                              />
                            </div>
                            <div className="pa3">
                              <h3
                                className="clr-132 wow fadeInUp tc"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                Mission
                              </h3>
                              <p className="black tc ">
                                Mauris accumsan vitae mi id laoreet. Nam
                                suscipit lacus dictum diam tincidunt, eget
                                tristique justo porta. Mauris congue dolor at
                                enim semper mattis, quis ornare tellus volutpat
                                sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mshado">
                            {" "}
                            <div>
                              <img
                                src="	https://www.rafamemmel.com/templates/corpboot/template/assets/img/vision.jpg"
                                alt="Vision"
                                className="img-responsive mb15 "
                              />
                            </div>
                            <div className="pa3">
                              <h3
                                className=" clr-132 wow fadeInUp tc"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                Vision
                              </h3>
                              <p className="black tc">
                                Mauris accumsan vitae mi id laoreet. Nam
                                suscipit lacus dictum diam tincidunt, eget
                                tristique justo porta. Mauris congue dolor at
                                enim semper mattis, quis ornare tellus volutpat
                                sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mshado">
                            {" "}
                            <div>
                              <img
                                src="	https://www.rafamemmel.com/templates/corpboot/template/assets/img/values.jpg"
                                alt="Mission"
                                className="img-responsive mb15 "
                              />
                            </div>
                            <div className="pa3">
                              <h3
                                className="clr-132 wow fadeInUp tc"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                Values
                              </h3>
                              <p className="black tc">
                                Mauris accumsan vitae mi id laoreet. Nam
                                suscipit lacus dictum diam tincidunt, eget
                                tristique justo porta. Mauris congue dolor at
                                enim semper mattis, quis ornare tellus volutpat
                                sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>

      {/* <section className=" pv5 about-banner-bg about-section2">
        <div className="pv2">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div
                  className="aboutbanner"
                  style={{ "--img": `url(${BackGround1})`, height: "450px" }}
                >
                  <div className="dt-ns  dt--fixed-ns w-100 ">
                    <h2 className="medium-font f-40 fw4 tc white mt0 mb3 pt5 width-100 belowline">
                      Our Mission
                    </h2>
                    <div className="container ">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="tc white pt3">
                            Able an hope of body. Any nay shyness article
                            matters own removal nothing his forming. Gay own
                            additions education satisfied the perpetual. If he
                            cause manor happy. Without farther she exposed saw
                            man led. Along on happy could cease green oh.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section> */}
      {/* 
      <section>
        <div className="container">
          <div className=" row">
            <div className="col-md-6">
              <div className="tabs-main">
                <div className="tabs  center ">
                  <div className="tabs__menu mob-as flex mb4 br3 border-tabs bg-FAF9FE brd-crl margin-auto width-500">
                    <label
                      id="webdevelopment"
                      onClick={(e) => onChangeTab(e.target.id)}
                      className=" clr-132 tabs__menu-item w-25  regular-font yo-mbo f-16px tc  pt3 pb3 bg-animate  pointer "
                    >
                      Web Development
                    </label>
                    <label
                      id="file_access"
                      onClick={(e) => onChangeTab(e.target.id)}
                      className=" clr-132 tabs__menu-item w-25 regular-font yo-mbo f-16px  tc pt3 pb3 bg-animate  pointer"
                    >
                      Marketing
                    </label>
                    <label
                      id="collaboration"
                      onClick={(e) => onChangeTab(e.target.id)}
                      className=" clr-132 tabs__menu-item w-25 regular-font yo-mbo f-16px  tc pt3 pb3 bg-animate mob-coll pointer"
                    >
                      UI/UX Design
                    </label>
                    <label
                      id="security"
                      onClick={(e) => onChangeTab(e.target.id)}
                      className=" clr-132 tabs__menu-item w-25 regular-font yo-mbo f-16px  tc pt3 pb3 bg-animate  pointer"
                    >
                      Out Sourcing
                    </label>
                  </div>
                  <ul className="cardsGrid">
                    {showCards.map((item) => (
                      <li className="cards_item" key={item.id}>
                        <article className=" center wow fadeInDown">
                          <div className="">
                            <h1 className="f-20px medium-font mb2">
                              <Link href={`/${item.link}`}>{item.title}</Link>
                            </h1>
                            <p className="clr-6D839D  margin-auto regular-font f-14px  lh-copy mv0">
                              <Link href={`/${item.link}`}>
                                <a>{item.descriptio}</a>
                              </Link>
                            </p>
                          </div>
                        </article>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tabs__content">
                <div>
                  <div className="tabs__content__info">
                    <ul className="cardsGrid">
                      {showCards.map((item) => (
                        <li className="cards_item" key={item.id}>
                          <article className=" center bg-EFF2FF br3    wow fadeInDown">
                            <img
                              className=""
                              src="https://www.rafamemmel.com/templates/corpboot/template/assets/img/history3.jpg"
                              alt="next"
                            />

                       </article>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="lef-ri-pa pb5">
        <div className="dt-ns dt--fixed-ns w-100">
          <div className=" dtc-l  wow fadeInLeft">
            <div className="tabs-main">
              <div className="tabs  center ">
                <div className="tabs__menu mob-as  flex mb4 br3 border-tabs bg-FAF9FE brd-crl margin-auto width-500">
                  <label
                    id="webdevelopment"
                    onClick={(e) => onChangeTab(e.target.id)}
                    className=" clr-132 tabs__menu-item w-25  regular-font yo-mbo f-16px tc  pt3 pb3 bg-animate  pointer "
                  >
                    2000-2005
                  </label>
                  <label
                    id="file_access"
                    onClick={(e) => onChangeTab(e.target.id)}
                    className=" clr-132 tabs__menu-item w-25 regular-font yo-mbo f-16px  tc pt3 pb3 bg-animate  pointer"
                  >
                    2000-2010
                  </label>
                  <label
                    id="collaboration"
                    onClick={(e) => onChangeTab(e.target.id)}
                    className=" clr-132 tabs__menu-item w-25 regular-font yo-mbo f-16px  tc pt3 pb3 bg-animate mob-coll pointer"
                  >
                    2015-2020
                  </label>
                  <label
                    id="security"
                    onClick={(e) => onChangeTab(e.target.id)}
                    className=" clr-132 tabs__menu-item w-25 regular-font yo-mbo f-16px  tc pt3 pb3 bg-animate  pointer"
                  >
                    2020-2025
                  </label>
                </div>
              </div>
            </div>

            <ul className="cardsGrid ">
              {showCards.map((item) => (
                <li className="cards_item" key={item.id}>
                  <article className=" center wow fadeInDown">
                    <div className="">
                      {/* <webdevelopmentImg1 className="pb2" /> */}
                      {/* <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" /> */}
                      <h1 className="f-20px medium-font mb2">
                        <Link href={`/${item.link}`}>{item.title}</Link>
                      </h1>
                      <p className="clr-6D839D  margin-auto regular-font f-14px  lh-copy mv0">
                        <Link href={`/${item.link}`}>
                          <a>{item.descriptio}</a>
                        </Link>
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
          <div className=" dtc-l v-mid wow fadeInRight">
            {" "}
            <div className="tabs__content">
              <div>
                <div className="tabs__content__info">
                  <ul className="cardsGrid">
                    {showCards.map((item) => (
                      <li className="cards_item" key={item.id}>
                        <article className=" center bg-EFF2FF br3    wow fadeInDown">
                          <img className="" src={`${item.icon}`} alt="next" />

                          {/* <webdevelopmentImg1 className="pb2" /> */}
                          {/* <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" /> */}
                        </article>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" center pt5-ns">
        <section className="lef-ri-pa pb5">
          {/* <h2 className="medium-font f-40 fw4 tc clr-132 mt0 mb3  width-100 belowline">
            Who we are
          </h2> */}
          <div className="dt-ns dt--fixed-ns w-100">
            <div className=" dtc-l  wow fadeInLeft">
              <div>
                <h2 className="medium-font f-40 fw4 clr-132 mt0 mb3 tc width-100 belowline">
                  Our Management Team
                </h2>
                <div className="row pt3">
                  <div
                    className="col-sm-6 col-md-3 wow fadeInLeft"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1000ms",
                      animationDelay: "300ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <figure className="item-img-wrap">
                      <img
                        src="https://www.rafamemmel.com/templates/corpboot/template/assets/img/staff1.jpg"
                        className="img-responsive"
                        alt="team"
                      />
                      <div className="item-img-overlay">
                        <div className="team-social">
                          <p>
                            <strong className="color4 text-uppercase">
                              You can win if you want
                            </strong>
                            <br /> Sed posuere malesuada ante, a gravida ipsum
                            congue id.
                          </p>
                        </div>
                      </div>
                    </figure>
                    <div className="team-name">
                      <h4 className="h-underline2">John Doe</h4>
                      <h5>Business manager</h5>
                    </div>
                    <div className="visible-xs-block visible-sm-block pt20"></div>
                  </div>
                  <div
                    className="col-sm-6 col-md-3 wow fadeInLeft"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1000ms",
                      animationDelay: "300ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <figure className="item-img-wrap">
                      <img
                        src="https://www.rafamemmel.com/templates/corpboot/template/assets/img/staff1.jpg"
                        className="img-responsive"
                        alt="team"
                      />
                      <div className="item-img-overlay">
                        <div className="team-social">
                          <p>
                            <strong className="color4 text-uppercase">
                              You can win if you want
                            </strong>
                            <br /> Sed posuere malesuada ante, a gravida ipsum
                            congue id.
                          </p>
                        </div>
                      </div>
                    </figure>
                    <div className="team-name">
                      <h4 className="h-underline2">John Doe</h4>
                      <h5>Business manager</h5>
                    </div>
                    <div className="visible-xs-block visible-sm-block pt20"></div>
                  </div>
                  <div
                    className="col-sm-6 col-md-3 wow fadeInRight"
                    data-wow-duration="1000ms"
                    data-wow-delay="200ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1000ms",
                      animationDelay: "200ms",
                      animationName: "fadeInRight",
                    }}
                  >
                    <figure className="item-img-wrap">
                      <img
                        src="https://www.rafamemmel.com/templates/corpboot/template/assets/img/staff1.jpg"
                        className="img-responsive"
                        alt="team"
                      />
                      <div className="item-img-overlay">
                        <div className="team-social">
                          <p>
                            <strong className="color4 text-uppercase">
                              You can win if you want
                            </strong>
                            <br /> Sed posuere malesuada ante, a gravida ipsum
                            congue id.
                          </p>
                        </div>
                      </div>
                    </figure>
                    <div className="team-name">
                      <h4 className="h-underline2">John Doe</h4>
                      <h5>Business manager</h5>
                    </div>
                    <div className="visible-xs-block visible-sm-block pt20"></div>
                  </div>
                  <div
                    className="col-sm-6 col-md-3 wow fadeInRight"
                    data-wow-duration="1000ms"
                    data-wow-delay="200ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1000ms",
                      animationDelay: "200ms",
                      animationName: "fadeInRight",
                    }}
                  >
                    <figure className="item-img-wrap">
                      <img
                        src="https://www.rafamemmel.com/templates/corpboot/template/assets/img/staff1.jpg"
                        className="img-responsive"
                        alt="team"
                      />
                      <div className="item-img-overlay">
                        <div className="team-social">
                          <p>
                            <strong className="color4 text-uppercase">
                              You can win if you want
                            </strong>
                            <br />
                            Sed posuere malesuada ante, a gravida ipsum congue
                            id.
                          </p>
                        </div>
                      </div>
                    </figure>
                    <div className="team-name">
                      <h4 className="h-underline2">John Doe</h4>
                      <h5>Business manager</h5>
                    </div>
                    <div className="visible-xs-block visible-sm-block pt20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" center pt5-ns">
        <section className="lef-ri-pa pb5">
          <div className="dt-ns dt--fixed-ns w-100">
            <div class="svg-map__wrap">
              <img src="/assets/svg/about/map.svg" />
              <ul class="svg-map__dots">
                <li
                  class="svg-map__dot"
                  style={{ top: "24%", left: "50%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "40%", left: "14%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "35%", left: "55%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "26%", left: "28%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "33%", left: "50%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "31%", left: "51%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "49%", left: "62%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style="top: 28%; left: 54%;"
                  style={{ top: "28%", left: "54%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style="top: 36%; left: 50%;"
                  style={{ top: "36%", left: "50%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "42%", left: "14%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "23%", left: "54%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "39%", left: "26%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "33%", left: "48%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "29%", left: "47%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "64%", left: "77%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "33%", left: "53%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "79%", left: "54%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style="top: 35%; left: 57%;"
                  style={{ top: "35%", left: "57%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "33%", left: "56%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "38%", left: "27%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "40%", left: "13%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "30%", left: "26%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style="top: 46%; left: 81%;"
                  style={{ top: "46%", left: "81%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "32%", left: "53%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "32%", left: "12%" }}
                ></li>
                <li
                  class="svg-map__dot"
                  style={{ top: "50%", left: "63%" }}
                ></li>
                {/* <li class="svg-map__dot" style="top: 49%; left: 79%;"></li>
                <li class="svg-map__dot" style="top: 80%; left: 89%;"></li>
                <li class="svg-map__dot" style="top: 36%; left: 49%;"></li>
                <li class="svg-map__dot" style="top: 32%; left: 50%;"></li>
                <li class="svg-map__dot" style="top: 33%; left: 13%;"></li>
                <li class="svg-map__dot" style="top: 37%; left: 27%;"></li>
                <li class="svg-map__dot" style="top: 42%; left: 57%;"></li>
                <li class="svg-map__dot" style="top: 37%; left: 28%;"></li>
                <li class="svg-map__dot" style="top: 35%; left: 58%;"></li>
                <li class="svg-map__dot" style="top: 44%; left: 57%;"></li>
                <li class="svg-map__dot" style="top: 29%; left: 24%;"></li>
                <li class="svg-map__dot" style="top: 29%; left: 27%;"></li>
                <li class="svg-map__dot" style="top: 35%; left: 29%;"></li>
                <li class="svg-map__dot" style="top: 50%; left: 62%;"></li>
                <li class="svg-map__dot" style="top: 48%; left: 80%;"></li>
                <li class="svg-map__dot" style="top: 25%; left: 52%;"></li> */}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="s-indi ob is-visible" data-observe="" data-visible="">
          <div className="wrap">
            <div className="s-indi__wrap">
              <ul className="s-indi__letters">
                <li className="s-indi__letter js-finish finish">
                  <span className="s-indi__value">
                    <b
                      data-speed="1"
                      data-callback="AnimateIndicator"
                      className="ob is-visible"
                      data-observe=""
                      data-visible=""
                    >
                      3
                    </b>
                    <span className="s-indi__plus">+</span>
                  </span>{" "}
                  <span className="s-indi__title">Our buisness</span>
                </li>
                <li className="s-indi__letter js-finish finish">
                  <span className="s-indi__value">
                    <b
                      data-speed="150"
                      data-callback="AnimateIndicator"
                      className="ob is-visible"
                      data-observe=""
                      data-visible=""
                    >
                      2
                    </b>
                  </span>{" "}
                  <span className="s-indi__title">years in business</span>
                </li>
                <li className="s-indi__letter js-finish finish">
                  <span className="s-indi__value">
                    <b
                      data-speed="60"
                      data-callback="AnimateIndicator"
                      className="ob is-visible"
                      data-observe=""
                      data-visible=""
                    >
                      20
                    </b>
                    <span className="s-indi__plus">+</span>
                  </span>{" "}
                  <span className="s-indi__title">supported countries</span>
                </li>
                <li className="s-indi__letter js-finish finish">
                  <span className="s-indi__value">
                    <b
                      data-speed="20"
                      data-callback="AnimateIndicator"
                      className="ob is-visible"
                      data-observe=""
                      data-visible=""
                    >
                      20
                    </b>
                    <span className="s-indi__plus">+</span>
                  </span>{" "}
                  <span className="s-indi__title">team members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="aboutbanner"
        style={{ "--img": `url(${BackGround})` }}
      >
        <div className="center pv6">
          <h1 className="f2 f2-l fw2 white semibold-font tc mt0 mt50 lh-title  ">
            Looking for a New Startup or existing buisness to grow ? - start
            with a free consultation
          </h1>
          <div className="tc">
            <a href="" className="link">
              <div className="f-16 no-underline grow dib v-mid bg-white clr-302E43 br3 pl3 pr2 pv3 mb3  medium-font f-20">
                <div className="dib"> Get Quotes</div>
                <span className="pl2" />
                <div className="dib arrow-box v-mid">
                  <div className="rightArr">
                    <img src={RightArrow} />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section
        className=" pv5 about-banner-bg about-section2"
        name="Mobile-development"
        id="Mobile-development"
      >
        <div className="pv2 mb5">
          <section className="">
            <article className=" center ">
              {/* <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                Mobile app development
              </h2> */}
              <div className="dt-ns dt--fixed-ns w-100">
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlay={true}
                  autoPlaySpeed={100}
                  slidesPerView={1}
                  //centerMode={true}
                  slidesToSlide={true}
                  currentSlide={true}
                  keyBoardControl={true}
                  customTransition="all .5s ease"
                  transitionDuration={5000}
                  arrows={false}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  //deviceType={this.props.deviceType}
                  renderButtonGroupOutside={true}
                  customButtonGroup={<ButtonGroup action={nextRef} />}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  <img src="/assets/gallery/1.png" alt="" />

                  <img src="/assets/gallery/2.png" alt="" />

                  <img src="/assets/gallery/3.png" alt="" />

                  <img src="/assets/gallery/4.png" alt="" />

                  <img src="/assets/gallery/5.png" alt="" />
                </Carousel>
              </div>
            </article>
          </section>
        </div>
      </section>
    </div>
  );
}
const ButtonGroup = ({
  action,
  sliderAction,
  next,
  previous,
  goToSlide,
  ...rest
}) => {
  useImperativeHandle(action, () => ({
    getAlert(value) {
      if (value === "prev") {
        previous();
      } else if (value === "next") {
        next();
      }
    },
  }));

  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group dn">
      {" "}
      // remember to give it position:absolute
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      />
      <button onClick={() => next()} />
    </div>
  );
};
