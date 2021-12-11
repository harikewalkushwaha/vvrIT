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
import BackGround from "../public/assets/img/10.png";
import BackGround2 from "../public/assets/img/3.png";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import {
  webdevelopment,
  marketing,
  uidesign,
  outsourcing,
} from "../data/services";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 960 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 959, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MyTop = styled.div`
  background: transparent
    linear-gradient(180deg, #002e5b 0%, #002e5b 72%, #002e5b 100%) 0% 0%
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

  // const [activeTab, setActiveTab] = useState("webdevelopment");
  // const [showCards, setshowCards] = useState(webdevelopment);
  // useEffect(() => {
  //    console.log(webdevelopment);
  //   var d = document.getElementById("webdevelopment");
  //   d.className += " active-tab";
  // }, []);

  // const onChangeTab = (val) => {
  //   var d = document.getElementById(val);
  //   //remove class
  //   var active = document.getElementById(activeTab);
  //   const element = document.querySelector("#" + activeTab);
  //   if (element.classList.contains("active-tab")) {
  //     element.classList.remove("active-tab");
  //   }

  //   d.className += " active-tab";
  //   setActiveTab(val);

  //   switch (val) {
  //     case "webdevelopment":
  //       setshowCards(webdevelopment);
  //       break;
  //     case "file_access":
  //       setshowCards(marketing);
  //       break;
  //     case "collaboration":
  //       setshowCards(uidesign);
  //       break;
  //     case "security":
  //       setshowCards(outsourcing);
  //       break;
  //     default:
  //       setshowCards(webdevelopment);
  //       break;
  //   }
  // };

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
        <title>VVR Group</title>
      </Head>
      <section>
        <MyTop>
          <div className="" style={{ height: "85px" }}></div>

          <div
            className="banner-main"
            id="bannershap"
            // style={{ "--img": `url(${BackGround})` }}
          >
            <div className="shape shape-4">
              <img src="/assets/img/12.svg" alt="shape" />
            </div>
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
                          strings: [" Welcome to VVR Group"],
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
                      you out. Not only can we enable a thriving online
                      presence, but we also provide end-to-end business support.
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
            </div>
          </div>
        </MyTop>
      </section>

      <div className=" center pt5-ns pb5-ns">
        <section className="lef-ri-pa pv2">
          {/* <h2 className="medium-font f-40 fw4 tc clr-132 mt0 mb3  width-100 belowline">
            Our Story
          </h2> */}
          <div className="dt-ns dt--fixed-ns w-100">
            <div className=" dtc-l v-mid wow fadeInLeft">
              <div>
                <h2 className="medium-font f-40 fw4 fw4 clr-132 mt0 mb3 w-70per width-100  aboutmission">
                  WE ARE A <br />
                  CREATIVE <br />
                  DESIGN STUDIO ,
                </h2>
                <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                  We are a team of digitally driven individuals, working in our
                  fields of proficiency to enhance and realign your business to
                  the ever-changing trends of digital and off-line marketing. We
                  want to help businesses establish themselves online, and do it
                  in a way that provides the highest possible quality at
                  competitive rates.
                </p>
              </div>
            </div>
            <div className=" dtc-l tc  wow fadeInRight">
              <img src="/assets/svg/about/story.jpg" className=" mw-100" />
            </div>
          </div>
        </section>
      </div>

      <div
        className="bg-002E5B center pt5-ns pb5-ns "
        // style={{ "--img": `url(${BackGround})` business}}
      >
        <section className="lef-ri-pa pv2">
          <h2 className="medium-font f-40 fw4 tc white mt0 mb3  width-100 belowline">
            Our Businesses
          </h2>

          {/* MAIN ROW */}
          <div className="dt-ns dt--fixed-ns w-100 pt4">
            <div className="row">
              <h5 className="tc white mt0">
                VVR Digital are managing following business
              </h5>
              <div className="col-md-4">
                {" "}
                <div className="ht-box-images style-05">
                  <div className="image-box-wrap">
                    <div className="box-image">
                      <div className="default-image">
                        <img
                          className="img-fulid"
                          src="/assets/svg/Features/vvrlogowhite.png"
                          alt=""
                        />
                      </div>
                      <div className="hover-images">
                        <img
                          className="img-fulid"
                          src="/assets/svg/Features/vvrlearning_icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="heading">VVR Learning</h5>
                      <div className="txt1">
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </div>
                      <div className="box-images-arrow">
                        <a href="#">
                          <span className="button-text">Know More</span>
                          <i className="far fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ht-box-images style-05">
                  <div className="image-box-wrap">
                    <div className="box-image">
                      <div className="default-image">
                        <img
                          className="img-fulid"
                          src="/assets/svg/Features/vvrdigital_icon.png"
                          alt=""
                        />
                      </div>
                      <div className="hover-images">
                        <img
                          className="img-fulid"
                          src="/assets/svg/Features/vvrdigital_icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="heading">VVR Digital </h5>
                      <div className="txt1">
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </div>
                      <div className="box-images-arrow">
                        <a href="#">
                          <span className="button-text">Know More</span>
                          <i className="far fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ht-box-images style-05">
                  <div className="image-box-wrap">
                    <div className="box-image">
                      <div className="default-image">
                        <img
                          className="img-fulid"
                          src="/assets/svg/Features/vvr_upcoming.png"
                          alt=""
                        />
                      </div>
                      <div className="hover-images">
                        <img
                          className="img-fulid"
                          src="/assets/svg/Features/vvr_upcoming.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="heading">VVR Hotels</h5>
                      <div className="txt1">
                        We provide the most responsive and functional IT design
                        for companies and businesses worldwide.
                      </div>
                      <div className="box-images-arrow">
                        <a href="#">
                          <span className="button-text">Know More</span>
                          <i className="far fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* MAIN LEFT COL */}

            {/* <div className=" dtc-l v-mid wow ">
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
            </div> */}
          </div>
        </section>
      </div>

      <section
        className="lef-ri-pa pv5 about-banner-bg about-section2"
        name="Mobile-development"
        id="Mobile-development"
      >
        <div className="pv2">
          <section className="">
            <article className=" center ">
              {/* <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                Mobile app development
              </h2> */}
              <div className="dt-ns dt--fixed-ns w-100">
                <div className=" dtc-l v-mid wow fadeInLeft">
                  <div>
                    <img
                      src="/assets/svg/services/webdev/about.png"
                      className="pt3 mw-100"
                    />
                  </div>
                </div>
                <div className=" dtc-l   v-mid wow fadeInRight">
                  <h2 className="medium-font f-40 fw4 fw4 pl4 clr-132 mt0 mb3 w-70per width-100  aboutmission">
                    Whats makes us different?
                  </h2>
                  <div className="mb4">
                    <p className="clr-6D839D regular-font tl pl4  f-18px lh-copy mv0 width-100">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores.
                    </p>
                  </div>
                  <div>
                    <p className="pl4">
                      {" "}
                      <hr></hr>
                    </p>
                  </div>
                  <div class="flex justify-center">
                    <div class=" w-25  mr2">
                      <div>
                        <p className="num-proect">
                          <CountUp duration={5} end={4} />
                        </p>
                        <h2 className="project-title">Our Business</h2>
                      </div>
                    </div>
                    <div class=" w-25  mr2">
                      <div>
                        <p className="num-proect">
                          <CountUp duration={5} end={25} />
                        </p>
                        <h2 className="project-title">Team member</h2>
                      </div>
                    </div>
                    <div class=" w-25  mr2">
                      <p className="num-proect">
                        <CountUp duration={5} end={2} />
                      </p>
                      <h2 className="project-title">Years in Business</h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>

      <section
        className=" pv5 about-banner-bg about-section2"
        name="Mobile-development"
        id="Mobile-development"
      >
        <div className="pv2">
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

      <section className="business" style={{ "--img": `url(${BackGround2})` }}>
        <div className="center pv6">
          <h1 className="f2 f2-l fw2 white semibold-font tc mt0 mt50 lh-title  ">
            Looking For Simple Solutions To All Your Business Needs?
          </h1>
          <div className="tc">
            <a href="" className="link">
              <div className="f-16 no-underline grow dib v-mid bg-white clr-302E43 br3 pl3 pr2 pv3 mb3  medium-font f-20">
                <div className="dib">Get Enquiries</div>
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

      <div className=" center pv5-ns pv4">
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
              autoPlay={true}
              autoPlaySpeed={5000}
              slidesPerView={1}
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
