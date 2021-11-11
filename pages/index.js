import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import Head from "next/head";
import Link from "next/link";

import RightArrow from "../components/assets/svg/Home Page/Arrow.svg";
import LeftArrow from "../components/assets/svg/Home Page/leftarrow.png";
import ReactLogoArrow from "../components/assets/svg/Home Page/Arrow.svg";
// import StarRatingComponent from "react-star-rating-component";
import { data } from "../data/cust_stories";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import BackGround from "../public/assets/img/1.png";
import BackGround2 from "../public/assets/img/3.png";
import Typewriter from "typewriter-effect";

import {
  webdevelopment,
  marketing,
  uidesign,
  outsourcing,
} from "../data/services";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const MyTop = styled.div`
  background: transparent
    linear-gradient(180deg, #3056d3 0%, #3056d3 72%, #3056d3 100%) 0% 0%
    no-repeat padding-box;
`;

var sectionStyle = {
  width: "100%",
  backgroundSize: "cover",
  backgroundImage: `url(${BackGround})`,
};

export default function index() {
  const nextRef = useRef();
  const prevRef = useRef();

  const [sliderAction, setsliderAction] = useState(null);

  const doSlicderAction = (kaunsa) => {
    setsliderAction(kaunsa);
    nextRef.current.getAlert(kaunsa);
  };

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

  const ref = useRef(null);

  const executeScroll = () => {
    ref.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  useEffect(() => {
    if (ref.current) {
      executeScroll();
    }
  }, [ref.current]);

  return (
    <div>
      <Head>
        <title>VVR Digital</title>
      </Head>
      <MyTop>
        <div className="" style={{ height: "85px" }} />

        <div className="banner-main">
          <div className="tc-l banner-hg mob-distab lef-ri-pa ">
            <div className="hero-content mob-bannercon pt6-l center w-100">
              {/* <div className="pattern-bg absolute left-0 ">
                <AirbonLogo className="mw-100" />
              </div> */}

              <div className="items-container1">
                <div className="he-max-w center">
                  <h5 className=" white pb3"> We Make It Simple</h5>
                  <h1 className=" f3 f1-l fw2 white semibold-font mb0 mt0 lh-title ">
                    <Typewriter
                      options={{
                        strings: [" Welcome to VVR Digital"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                </div>
                <div className="width-50a center pt3 ">
                  <span className="fw1 f-1em white regular-font o-80 mt3 mb4 lh-copy ">
                    Looking to start a new business or boost an existing one?
                    Here at VVR Digital, we’ve got all the right tools to help
                    you out. Not only can we enable a thriving online presence,
                    but we also provide end-to-end business support.
                  </span>
                </div>
                <div className="pt4">
                  <a href="/contact" className="link">
                    <div className="f-16 no-underline grow dib v-mid bg-white clr-302E43 br3 pl3 pr2 pv3 mb3  medium-font f-20">
                      <div className="dib"> Contact Us</div>
                      <span className="pl2" />
                      <div className="dib arrow-box v-mid">
                        <div className="rightArr">
                          <img src={RightArrow} />
                        </div>
                      </div>
                    </div>
                  </a>
                  <span className="dib v-mid ph3 white-70 mb3"></span>
                  <a href="#">
                    <div className="f6 hide-mobile no-underline grow dib bg-302E43 v-mid white ba b--302E43 ph4 br3 pv3 mb3 medium-font f-16px">
                      Book Consultation
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className=" hide-mobile">
              <div className="pt2 tablet-img img-ressd">
                
                <img className="mw-100" src="assets/img/Tablet@2x-min.png" />
              </div>
            </div> */}
          </div>
        </div>
      </MyTop>
      {/* <div className="h5-l h6-m" /> */}

      {/* <section className="lef-ri-pa  pb5-l pb4-ms pb4 yo-below">
        <main className="pb5-l pt0-l pv4-lm">
          <div className="w-100 tc-m">
            <div className="dib black tc-m fl-l">
              <h2 className="semibold-font margin-auto-l f-46 mob-tilte our-fe">
                Our Feature
              </h2>
            </div>
            <div className="dib  fr">
              {" "}
              <div className="f-16 fw4 hide-mobile tc w14em grow medium-font no-underline white dib  pv3  br3 bg-165df5">
                <div className="dib"> Explore All Fetures</div>
                <span className="pl2" />
                <div className="dib arrow-box v-mid">
                  <div className="rightArr">
                    <RightArrow />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </main>

        <div className="pt5-l pb3">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div className="dtc-ns v-mid wow fadeInLeft">
                  <div>
                    <h2 className="medium-font tc-m f-40 ser-mh fw4 clr-132 mt0 mb3">
                      Secure and Easy{" "}
                    </h2>
                    <p className="clr-6D839D width-100 tc-m regular-font f-18px w-70per lh-copy mv0">
                      Send and receive fully encrypted files from internal teams
                      and external collaborators.
                    </p>
                    <div className="w-100 image-center h-mid hide-desktop pt5 pb3">
                      <img
                        className="mw-100 "
                        src="/assets/svg/Home Page/Graphics.svg"
                        alt="next"
                      />
                    </div>
                    <div className="pt4-l tc-m ">
                      <div className="f-14px margin-auto fw4 tc w4 grow medium-font no-underline white dib  pv3  pointer br3 bg-165df5">
                        Know More
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" hide-mobile dtc-ns v-mid tc wow fadeInRight">
                  <img
                    className="mw-100 "
                    src="/assets/svg/Home Page/Graphics.svg"
                    alt="next"
                  />
                </div>
              </div>
            </article>
          </section>
        </div>

        <div className="pv3-l pv4">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div className="hide-mobile dtc-ns v-mid wow fadeInLeft">
                  <img
                    className="mw-100 hide-mobile"
                    src="/assets/svg/Home Page/Group 91.svg"
                    alt="next"
                  />
                </div>
                <div className=" dtc-ns v-mid  wow fadeInRight">
                  <div>
                    <h2 className="medium-font f-40 ser-mh tc-m fw4 clr-132 mt0 margin-auto mb3 width-100 w-70per">
                      Access your data from anywhere, at any time, on any device{" "}
                    </h2>
                    <p className="clr-6D839D margin-auto tc-m regular-font f-18px w-70per width-100  lh-copy mv0">
                      Stay productive on the go and enjoy military-grade data
                      security wherever you are. Airbon is available across all
                      devices and on all browsers.
                    </p>
                    <div className="w-100 image-center h-mid hide-desktop pt5 pb3">
                      <img
                        className="mw-100 "
                        src="/assets/svg/Home Page/Group 91.svg"
                        alt="next"
                      />
                    </div>

                    <div className="pt4-l tc-m  margin-auto w-70per ">
                      <div className="f-14px margin-auto fw4 tc w4 grow medium-font no-underline white dib pointer pv3   br3 bg-165df5">
                        Know More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>

        <div className="pv3-l pv4">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div className=" dtc-ns v-mid wow fadeInLeft">
                  <div>
                    <h2 className="medium-font tc-m f-40 ser-mh fw4 clr-132 mt0 mb3 width-100 w-70per">
                      Highest standard of data security in the cloud
                    </h2>
                    <p className="clr-6D839D regular-font tc-m f-18px w-70per width-100 lh-copy mv0">
                      Our zero-knowledge encryption algorithms safeguards your
                      confidential data from unauthorized access and breaches.
                    </p>

                    <div className="w-100 image-center h-mid hide-desktop pt5 pb3">
                      <img
                        className="mw-100"
                        src="/assets/svg/Home Page/Graphics-1.svg"
                        alt="next"
                      />
                    </div>

                    <div className="pt4-l tc-m  ">
                      <div className="f-14px margin-auto fw4 tc w4 grow medium-font no-underline white dib pointer pv3   br3 bg-165df5">
                        Know More
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hide-mobile dtc-ns v-mid tc  wow fadeInRight">
                  <img
                    className="mw-100"
                    src="/assets/svg/Home Page/Graphics-1.svg"
                    alt="next"
                  />
                </div>
              </div>
            </article>
          </section>
        </div>

        <div className="pv3-l pv4">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div className="hide-mobile dtc-ns v-mid wow fadeInLeft">
                  <img
                    className="mw-100"
                    src="/assets/svg/Home Page/Graphics-2.svg"
                    alt="next"
                  />
                </div>
                <div className=" dtc-ns v-mid  wow fadeInRight">
                  <div>
                    <h2 className="medium-font f-40 ser-mh tc-m fw4 clr-132 mt0 margin-auto mb3 width-100 w-70per">
                      Large File Transfer
                    </h2>
                    <p className="clr-6D839D margin-auto tc-m regular-font f-18px w-70per width-100  lh-copy mv0">
                      Send large files to teams across the globe with fast file
                      transfer and streaming protocol
                    </p>
                    <div className="w-100 image-center h-mid hide-desktop pt5 pb3 ">
                      <img
                        className="mw-100"
                        src="/assets/svg/Home Page/Graphics-2.svg"
                        alt="next"
                      />
                    </div>

                    <div className="pt4-l tc-m  margin-auto w-70per ">
                      <div className="f-14px margin-auto fw4 tc w4 grow medium-font no-underline white dib  pv3 pointer  br3 bg-165df5">
                        Know More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section> */}
      <div className="bg-EFF2FF center pt5-ns">
        <section className="lef-ri-pa pv2">
          <h2 className="medium-font f-40 fw4 tc clr-132 mt0 mb3  width-100 belowline">
            Who we are
          </h2>
          <div className="dt-ns dt--fixed-ns w-100">
            <div className=" dtc-l v-mid wow fadeInLeft">
              <div>
                <h2 className="medium-font f-40 fw4 clr-132 mt0 mb3 w-70per width-100">
                  At VVR Digital,
                </h2>
                <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
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
              </div>
            </div>
            <div className=" dtc-l tc  v-mid wow fadeInRight">
              <img
                src="/assets/svg/about/aboutgif.gif"
                className="pt5 mw-100"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="bg-EFF2FF center pt5-ns pb5-ns">
        <section className="lef-ri-pa pv2">
          <h2 className="medium-font f-40 fw4 tc clr-132 mt0 mb3  width-100 belowline">
            What VVR Brings to You
          </h2>

          {/* MAIN ROW */}
          <div className="dt-ns dt--fixed-ns w-100 pt4">
            {/* MAIN LEFT COL */}

            <div className=" dtc-l v-mid wow ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div className=" dtc-l v-mid wow fadeInLeft ph2">
                  <div className="d-flex">
                    <img src="/assets/svg/Home Page/5.png" fill="blue" />
                    <h5 className="clr-132 pt3 pl2">No advance payment</h5>
                  </div>
                  <p className="f6 lh-copy pt2 ph5">
                    We’re here because we want to offer value. So, we won’t take
                    an advance payment before we begin! Only pay us once you are
                    sure of our capabilities and happy with our plan of action.
                  </p>
                </div>

                <div className=" dtc-l  v-mid wow fadeInRight  ph2">
                  <div className="d-flex">
                    <img src="/assets/svg/Home Page/6.png" fill="blue" />
                    <h5 className="clr-132 pt2 pl2">Affordable</h5>
                  </div>
                  <p className="f6 lh-copy  ph5">
                    We want to make success affordable. Hence, we come to you
                    with prices far more modest than our competitors.
                  </p>
                </div>
              </div>
              <div className="dt-ns dt--fixed-ns w-100 pv2">
                <div className=" dtc-l v-mid wow fadeInLeft ph2">
                  <div className="d-flex">
                    <img src="/assets/svg/Home Page/1.png" fill="blue" />
                    <h5 className="clr-132 pt3 pl2">Next-Gen technology</h5>
                  </div>
                  <p className="f6 lh-copy pt2 ph5">
                    The digital world is constantly evolving, and we are
                    evolving with it. We use the best and most relevant
                    technology that will last you a long time, so you don’t have
                    to keep updating it.
                  </p>
                </div>

                <div className=" dtc-l  v-mid wow fadeInRight ph2">
                  <div className="d-flex">
                    <img src="/assets/svg/Home Page/7.png" fill="blue" />
                    <h5 className="clr-132 pl2 pt3">Dedicated project team</h5>
                  </div>
                  <p className="f6 lh-copy pt2 ph5">
                    Businesses that choose to work with us, each have a
                    dedicated team working with them. No distractions, no
                    delays, just focused, creative and efficient work. Our teams
                    do not take on multiple projects at a time. They set a
                    timelines and take projects one at a time, to ensure the
                    best quality work. .
                  </p>
                </div>
              </div>
              <div className="dt-ns dt--fixed-ns w-100 pv2">
                <div className=" dtc-l v-mid wow fadeInLeft ph2">
                  <div className="d-flex">
                    <img src="/assets/svg/Home Page/3.png" fill="blue" />
                    <h5 className="clr-132 pt3 pl2">Post project support</h5>
                  </div>
                  <p className="f6 lh-copy pt2 ph5">
                    We want to watch each one of our projects succeed and
                    flourish. To make sure everything is as planned, we offer
                    consistent support for 4 weeks (or more) after the
                    completion of the project, so you can have complete faith
                    that we’ve got your back!
                  </p>
                </div>

                <div className=" dtc-l  v-mid wow fadeInRight ph2">
                  <div className="d-flex">
                    <img src="/assets/svg/Home Page/8.png" fill="blue" />
                    <h5 className="clr-132 pl2 pt2">
                      Specialised team for startup
                    </h5>
                  </div>
                  <p className="f6 lh-copy pt2 ph5">
                    It takes a varied skill-set to nurture a project right from
                    inception. And we want to always do our best, so we have put
                    together a team of start-up experts to help build and grow
                    your start-up. So no need to hire an army of freelancers or
                    full time employees, we’ve got you covered right from
                    website building, marketing and admin work, to technical and
                    moral support.
                  </p>
                </div>
              </div>
            </div>
            {/* MAIN RIGHT COL */}
            {/* <div className=" dtc-l v-mid wow fadeInRight">
              
              <section name="faq" id="faq">
                <div className="">
                 
                  <div className="accordianalin">
                    <div className="accordioncourse accordianmargin">
                      <div>
                        <input type="checkbox" name="panel" id="panel-1" />
                        <label
                          className="clr-132"
                          for="panel-1"
                          style={{ marginBottom: "0px" }}
                        >
                          Free consultation
                        </label>
                        <div className="accordioncourse__content accordioncourse__content--med">
                          <p className="accordioncourse__header">
                            Podcasting operational change management inside of
                            workflows to establish a framework. Taking seamless
                            key performance indicators offline to maximise the
                            long tail
                          </p>
                        </div>
                      </div>

                      <div>
                        <input type="checkbox" name="panel" id="panel-2" />
                        <label for="panel-2" style={{ marginBottom: "0px" }}>
                          Comprehensive project management
                        </label>
                        <div className="accordioncourse__content accordioncourse__content--med">
                          <p className="accordioncourse__header">
                            Keeping your eye on the ball while performing a deep
                            dive on the start-up mentality to derive convergence
                            on cross-platform integration
                          </p>
                        </div>
                      </div>

                     
                      <div>
                        <input type="checkbox" name="panel" id="panel-3" />
                        <label for="panel-3" style={{ marginBottom: "0px" }}>
                          online presence
                        </label>
                        <div className="accordioncourse__content accordioncourse__content--med">
                          <p className="accordioncourse__header">
                            We help entrepreneurs get ready to raise capital.
                            Please note that we cannot help our clients raise
                            capital. This usually consists of some or all of our
                            services. This is a service that is heavily
                            regulated.
                          </p>
                        </div>
                      </div>

                      <div>
                        <input type="checkbox" name="panel" id="panel-3" />
                        <label for="panel-3" style={{ marginBottom: "0px" }}>
                          We work hard, together
                        </label>
                        <div className="accordioncourse__content accordioncourse__content--med">
                          <p className="accordioncourse__header">
                            Harness the combined expertise of a team of
                            specialists in strategy, user experience, creative
                            design, web development, SEO and marketing for your
                            next digital project. We are committed to delivering
                            human-centric solutions that exceed your
                            expectations.
                          </p>
                        </div>
                      </div>

                      <div>
                        <input type="checkbox" name="panel" id="panel-3" />
                        <label for="panel-3" style={{ marginBottom: "0px" }}>
                          100% Client Satisfaction Guarantee
                        </label>
                        <div className="accordioncourse__content accordioncourse__content--med">
                          <p className="accordioncourse__header">
                            We want you to be completely satisfied with our
                            services. We will do whatever it takes to make you
                            happy. No hassles, no problems.
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </section>
            </div> */}
          </div>
        </section>
      </div>
      {/* <div>
        <section className="">
          <div className="container pt3 pb3">
            <h2 className="medium-font f-40 fw4 tc clr-132 mt0 mb3  width-100 belowline">
              Our Process
            </h2>
            <div className="">
              <ul className="s-uip__list">
                <li className="s-uip__item">
                  <div className="s-uip__item-wrap">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 120 120"
                      className="s-uip__border"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="59.5"
                        stroke-dasharray="0 4.5"
                        stroke-dashoffset="20"
                        stroke-linecap="round"
                        fill="transparent"
                        className="s-uip__path"
                      ></circle>
                    </svg>{" "}
                    <div className="s-uip__title h4">
                      Research &amp; Strategy
                    </div>
                  </div>
                </li>
                <li className="s-uip__item">
                  <div className="s-uip__item-wrap">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 120 120"
                      className="s-uip__border"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="59.5"
                        stroke-dasharray="0 4.5"
                        stroke-dashoffset="20"
                        stroke-linecap="round"
                        fill="transparent"
                        className="s-uip__path"
                      ></circle>
                    </svg>{" "}
                    <div className="s-uip__title h4 white">
                      Wireframing &amp; Prototyping
                    </div>
                  </div>
                </li>
                <li className="s-uip__item">
                  <div className="s-uip__item-wrap">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 120 120"
                      className="s-uip__border"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="59.5"
                        stroke-dasharray="0 4.5"
                        stroke-dashoffset="20"
                        stroke-linecap="round"
                        fill="transparent"
                        className="s-uip__path"
                      ></circle>
                    </svg>{" "}
                    <div className="s-uip__title h4">Visual Design</div>
                  </div>
                </li>
                <li className="s-uip__item">
                  <div className="s-uip__item-wrap">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 120 120"
                      className="s-uip__border"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="59.5"
                        stroke-dasharray="0 4.5"
                        stroke-dashoffset="20"
                        stroke-linecap="round"
                        fill="transparent"
                        className="s-uip__path"
                      ></circle>
                    </svg>{" "}
                    <div className="s-uip__title h4">UI Development</div>
                  </div>
                </li>
                <li className="s-uip__item">
                  <div className="s-uip__item-wrap">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 120 120"
                      className="s-uip__border"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="59.5"
                        stroke-dasharray="0 4.5"
                        stroke-dashoffset="20"
                        stroke-linecap="round"
                        fill="transparent"
                        className="s-uip__path"
                      ></circle>
                    </svg>{" "}
                    <div className="s-uip__title h4">Usability Testing</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div> */}
      <section className="homebanner" style={{ "--img": `url(${BackGround})` }}>
        {/* <div className="center pv6">
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
        </div> */}
        <div className="container pt3 pb3 pv5">
          <h2 className="medium-font f-40 fw4 tc white mt0 mb3  width-100 belowline">
            Our Process
          </h2>
          <div className="">
            <ul className="s-uip__list">
              <li className="s-uip__item">
                <div className="s-uip__item-wrap">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 120 120"
                    className="s-uip__border"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="59.5"
                      stroke-dasharray="0 4.5"
                      stroke-dashoffset="20"
                      stroke-linecap="round"
                      fill="transparent"
                      className="s-uip__path"
                    ></circle>
                  </svg>{" "}
                  <div className="s-uip__title h4 white">
                    Research & Analysis
                  </div>
                </div>
              </li>
              <li className="s-uip__item">
                <div className="s-uip__item-wrap">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 120 120"
                    className="s-uip__border"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="59.5"
                      stroke-dasharray="0 4.5"
                      stroke-dashoffset="20"
                      stroke-linecap="round"
                      fill="transparent"
                      className="s-uip__path"
                    ></circle>
                  </svg>{" "}
                  <div className="s-uip__title h4 white">
                    Detailed project outline
                  </div>
                </div>
              </li>
              <li className="s-uip__item">
                <div className="s-uip__item-wrap">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 120 120"
                    className="s-uip__border"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="59.5"
                      stroke-dasharray="0 4.5"
                      stroke-dashoffset="20"
                      stroke-linecap="round"
                      fill="transparent"
                      className="s-uip__path"
                    ></circle>
                  </svg>{" "}
                  <div className="s-uip__title h4 white">
                    Approval and changes{" "}
                  </div>
                </div>
              </li>
              <li className="s-uip__item">
                <div className="s-uip__item-wrap">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 120 120"
                    className="s-uip__border"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="59.5"
                      stroke-dasharray="0 4.5"
                      stroke-dashoffset="20"
                      stroke-linecap="round"
                      fill="transparent"
                      className="s-uip__path"
                    ></circle>
                  </svg>{" "}
                  <div className="s-uip__title h4 white">Implementation</div>
                </div>
              </li>
              <li className="s-uip__item">
                <div className="s-uip__item-wrap">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 120 120"
                    className="s-uip__border"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="59.5"
                      stroke-dasharray="0 4.5"
                      stroke-dashoffset="20"
                      stroke-linecap="round"
                      fill="transparent"
                      className="s-uip__path"
                    ></circle>
                  </svg>{" "}
                  <div className="s-uip__title h4 white">
                    Post Project Support
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="bg-EFF2FF center pv5-ns pv4">
        <h2 className="medium-font f-40 fw4 tc clr-132 mt0 mb3  width-100 belowline">
          Our Services
        </h2>
        <section className="lef-ri-pa  no-padding-1">
          <div>
            <div className="tabs-main">
              <div className="tabs  center mt4">
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

                <div className="tabs__content">
                  <div>
                    <div className="tabs__content__info">
                      <ul className="cardsGrid">
                        {showCards.map((item) => (
                          <li className="cards_item" key={item.id}>
                            <article className=" center bg-white br3  pv4  wow fadeInDown">
                              <div className="tc">
                                <Link href={`/${item.link}`}>
                                  <a>
                                    <img
                                      className="pb2 height-70"
                                      src={`/assets/svg/Features/${item.icon}`}
                                      alt="next"
                                    />
                                  </a>
                                </Link>
                                {/* <webdevelopmentImg1 className="pb2" /> */}
                                {/* <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" /> */}
                                <h1 className="f-20px medium-font mb2">
                                  <Link href={`/${item.link}`}>
                                    {item.title}
                                  </Link>
                                </h1>
                                <p className="clr-6D839D w-70per margin-auto regular-font f-14px  lh-copy mv0">
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
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        className="homebanner"
        style={{ "--img": `url(${BackGround2})` }}
      >
        <div className="center pv6">
          <h1 className="f2 f2-l fw2 white semibold-font tc mt0 mt50 lh-title  ">
            Looking For Simple Solutions To All Your Business Needs?
          </h1>
          <div className="tc">
            <a href="" className="link">
              <div className="f-16 no-underline grow dib v-mid bg-white clr-302E43 br3 pl3 pr2 pv3 mb3  medium-font f-20">
                <div className="dib"> Get Quotes</div>
                <span className="pl2" />
                <div className="dib arrow-box v-mid">
                  <div className="rightArr">
                    {/* <img src={RightArrow} /> */}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <div className="bg-EFF2FF center pt5-ns">
        <section className="lef-ri-pa pv2">
          <h2 className="medium-font f-40 fw4 tc clr-132 mt0 mb3  width-100 belowline">
            Featured Works
          </h2>
          <div className="dt-ns dt--fixed-ns w-100">
            <div className=" dtc-l v-mid wow fadeInLeft">
              <div className="pt4 pr2">
                <img
                  className=" mw-100 br3"
                  src="https://consulting.stylemixthemes.com/zurich/wp-content/uploads/sites/22/2016/01/img1-550x525.jpg"
                  width="550"
                  height="525"
                  alt="Consulting WordPress theme"
                  title="Consulting WordPress theme"
                />
              </div>
            </div>
            <div className=" dtc-l tc wow fadeInRight">
              <div className="pt4 mainsection">
                <img
                  className=" mw-100 br3"
                  src="https://consulting.stylemixthemes.com/zurich/wp-content/uploads/sites/22/2016/01/img2-545x255.jpg"
                  height="255"
                  width="550"
                  alt="Consulting WordPress theme"
                  title="Consulting WordPress theme"
                />
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
              {/* <div className="pt4">
                <img src="/assets/img/bg1.jpg" className=" mw-100 br3" />
              </div> */}
              <div className="dt-ns dt--fixed-ns w-100">
                <div className=" dtc-l wow fadeInLeft">
                  <div className="pt3">
                    <img
                      className="mw-100 br3"
                      src="https://consulting.stylemixthemes.com/zurich/wp-content/uploads/sites/22/2016/01/img3-265x255.jpg"
                      width="262"
                      height="255"
                      alt="Consulting WordPress theme"
                      title="Consulting WordPress theme"
                    />
                  </div>
                </div>
                <div className=" dtc-l tc   wow fadeInRight">
                  <div className="pt3 pl2">
                    <img
                      className="mw-100 br3"
                      src="https://consulting.stylemixthemes.com/zurich/wp-content/uploads/sites/22/2016/01/img4-265x255.jpg"
                      width="265"
                      height="255"
                      alt="Consulting WordPress theme"
                      title="Consulting WordPress theme"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-EFF2FF center pv5-ns pv4">
        <section className="lef-ri-pa pv2">
          <div className="cf  pt2">
            <div className="fl yomob-1  w-25-l w-50-ns ">
              <article className=" center  br3  h6 pv3-l pv4-ns pb2 card-hei-ns">
                <div className="justify">
                  {/* <img className="mw-100" src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" /> */}
                  <h1 className="mt0 mb0 f-40 fw3 semibold-font width-100 tc-xs-1 w-70per">
                    Client Testimonials
                  </h1>
                  {/* <hr className="mw3 bb bw1 b--black-10" /> */}
                </div>
                <p className="lh-copy pb1 f-17px measure tc-xs-1 width-100 w-80per justify clr-6D839D regular-font">
                  Send large files to teams across the globe with fast file
                  transfer and streaming protocol
                </p>

                <div className="tc-xs-1">
                  <div
                    className="f6 link dim arrs-w dib white  border-clr  "
                    href="#0"
                    onClick={() => doSlicderAction("prev")}
                  >
                    {" "}
                    <span className=" v-vid clie-a v-mid  left-pointed">
                      {" "}
                      <img
                        src={LeftArrow}
                        className="pt3"
                        fill="#165df5"
                        width="15"
                      />
                    </span>
                  </div>{" "}
                  &nbsp;
                  <div
                    className="f6 link dim arrs-w dib white  bg-165df5 "
                    onClick={() => doSlicderAction("next")}
                  >
                    {" "}
                    <span className=" v-vid  clie-a v-mid">
                      {" "}
                      <img src={RightArrow} className="pt3" />
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              //autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5s ease"
              transitionDuration={500}
              arrows={false}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              //deviceType={this.props.deviceType}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup action={nextRef} />}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {data.map((story) => (
                <div
                  key={story.id}
                  className="fl w-100-mob w-25-l w-50  pa2  customewidth wow fadeInDown"
                >
                  <div className="tc card-clie ph-1-l w-100 ">
                    <div className="img-container1 bg-165df5">
                      <img src={story.icon} className="mw-100" title="media" />
                    </div>
                    <div className="pt4">
                      <h1 className="f5 tc fw3 regular-font clr-132 pt4">
                        {story.title}
                      </h1>
                      <p className="tc pl4 pr4 f-18px clr-132 medium-font">
                        {story.description}
                      </p>
                      <div className="tc pb3">
                        {" "}
                        <Link href={story.link}>
                          <a className="fw1 tc medium-font f-16 pr1">
                            Read More
                          </a>
                        </Link>
                        <span className=" v-vid clie-a  right-pointed pl2">
                          {" "}
                          <img src={RightArrow} fill="#165df5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
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
      {/* // remember to give it position:absolute */}
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      />
      <button onClick={() => next()} />
    </div>
  );
};
