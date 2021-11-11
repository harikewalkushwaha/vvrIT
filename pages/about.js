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
var sectionStyle = {
  width: "100%",
  backgroundSize: "cover",
  backgroundImage: `url(${BackGround})`,
};
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
export default function about() {
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

      <CommonTopBar page={"About VVR Digital"} />

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
            <article className=" center ">
              <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                Who we are
              </h2>
              <div className="dt-ns dt--fixed-ns w-100">
                <div className=" dtc-l v-mid wow fadeInLeft">
                  <div>
                    <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                      We are a team of digitally driven individuals, working in
                      our fields of proficiency to enhance and realign your
                      business to the ever-changing trends of digital and
                      off-line marketing. We want to help businesses establish
                      themselves online, and do it in a way that provides the
                      highest possible quality at competitive rates. We are
                      extremely passionate about what we do, and hence are
                      always upgrading our skills and knowledge to constantly
                      bring value to every project we take on, while making the
                      process extremely simple and easy for you to follow.
                    </p>
                  </div>
                </div>
                <div className=" dtc-l tc  v-mid wow fadeInRight">
                  <img src="/assets/svg/about/hwr.png" className="pt5 mw-100" />
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
      {/* <div className="h3-l h6-m" /> */}

      <section className="lef-ri-pa pv5 about-banner-bg about-section2">
        <div className="pv2">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div
                  className="aboutbanner"
                  style={{ "--img": `url(${BackGround1})`, height: "450px" }}
                >
                  <div className="dt-ns dt--fixed-ns w-100 pa3">
                    <div className="sec2bgclr w-40-ns width-100">
                      <div className="pa4-ns pa3">
                        <h3 className="white quote">
                          “We have put together a team of experts in a variety
                          of different fields, so that we can take on your
                          challenges and give you simple and effective solutions
                          at reasonable rates.”
                        </h3>
                        <div
                          className="circleimg align-items-center"
                          // style={{ display: "flex", alignItems: "center" }}
                        >
                          <div
                            className="userclr-img user-img"
                            style={{ "--img": `url(${BackGround2})` }}
                          ></div>
                          <div className="pl3">
                            <p className="username">Vikas Verma</p>
                            <span className="userpos">
                              Founder VVR Group, Tokyo Japan
                            </span>
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

      <div className="bg-EFF2FF center pt5-ns">
        <section className="lef-ri-pa pb5">
          {/* <h2 className="medium-font f-40 fw4 tc clr-132 mt0 mb3  width-100 belowline">
            Who we are
          </h2> */}
          <div className="dt-ns dt--fixed-ns w-100">
            <div className=" dtc-l  wow fadeInLeft">
              <div>
                <h2 className="medium-font f-40 fw4 clr-132 mt0 mb3 w-70per width-100 aboutmission">
                  Our Mission
                </h2>
                <p className="clr-6D839D regular-font w-80per f-16px lh-copy pt2 mv0 width-100">
                  <i className="fa fa-check tickicon pr2"></i>There are an
                  abundance of businesses, but not all of them have an online
                  presence. We want to give them the modern tools required in
                  this digital age to succeed in the long run.
                </p>
                <p className="clr-6D839D regular-font w-80per f-16px lh-copy pt2 mv0 width-100">
                  <i className="fa fa-check tickicon pr2"></i>We strive to
                  always offer high quality solutions at the best and most
                  affordable rates.
                </p>
                <p className="clr-6D839D regular-font w-80per f-16px lh-copy pt2 mv0 width-100">
                  <i className="fa fa-check tickicon pr2"></i>We use our skills
                  to work according to your budgets, timelines, requirements and
                  requests.
                </p>
                <p className="clr-6D839D regular-font w-80per f-16px lh-copy pt2 mv0 width-100">
                  <i className="fa fa-check tickicon pr2"></i>No technical
                  jargon and difficult to follow solutions. We are always
                  working towards making the process simple and easy to follow.
                </p>
              </div>
            </div>
            <div className=" dtc-l tc  v-mid wow fadeInRight">
              {/* <img src="/assets/svg/about/about.svg" className=" mw-100" /> */}
              <div className="wpb_video_wrapper">
                <img
                  className=""
                  src="/assets/svg/about/7.png"
                  width="552"
                  height="320"
                  alt="image-2-min-552x320"
                  title="image-2-min-552x320"
                />
                <a href="#" className="play_video"></a>
                <div
                  className="video"
                  style={{ display: "none", width: "400px", height: "400px" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/04DRXybgLvA"
                    frameborder="0"
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    allowfullscreen=""
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
                    Research &amp; analysis
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
                    Detailed project Outline
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
                    Approval and changes
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
                    Post project support
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
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

      <section className="homebanner" style={{ "--img": `url(${BackGround})` }}>
        <div className="center pv6">
          <h1 className="f2 f2-l fw2 white semibold-font tc mt0 mt50 lh-title  ">
            Looking for a First-Class Business Plan Consultant?
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
