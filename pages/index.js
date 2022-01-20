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
import BackGround2 from "../public/assets/img/bannergif.gif";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Hana from "../public/assets/testimonials/Hana.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import "animate.css/animate.min.css";
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
const responsive2 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 960 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 959, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MyTop = styled.div``;

var sectionStyle = {
  width: "100%",
  backgroundSize: "cover",
  backgroundImage: `url(${BackGround})`,
};

const BannerContent = styled.div`
  margin: 0;
  top: 42%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 50px;
  margin-bottom: 1.5rem !important;
`;
const Subheading = styled.p`
  font-size: 1rem;
  margin-bottom: 0;
`;
const Read = styled.p`
  color: #f5911e;
`;

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
        <MyTop
          className="aboutbanner"
          style={{ "--img": `url(${BackGround2})` }}
        >
          <div className="" style={{ height: "85px" }}></div>

          <div
            className="banner-main"
            id="bannershap"
            // style={{ "--img": `url(${BackGround})` }}
          >
            {/* <div className="shape shape-4">
              <img src="/assets/img/12.svg" alt="shape" />
            </div> */}
            <div className="tc-l banner-hg mob-distab lef-ri-pa pt5">
              <div className="hero-content mob-bannercon pt6-l center w-100">
                {/* <div className="pattern-bg absolute left-0 ">
                <AirbonLogo className="mw-100" />
              </div> */}

                <div className="items-container1">
                  <div className="app-container center ph3-ns ">
                    <BannerContent className="">
                      <Title className="white tj">
                        <Typewriter
                          options={{
                            strings: [" Welcome to VVR Group"],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </Title>
                      <ScrollAnimation animateIn="animate__fadeInLeft animate__delay-3s	3s">
                        <Subheading className="fw1 f-1em white regular-font o-80 mt3 mb4 lh-copy tj ">
                          VVR Group is an ambitious and dynamic
                          multidisciplinary startup, based in Tokyo, Japan.
                          <br /> Our primary focus lies in building successful
                          businesses based on our varying skill sets.
                          <br />
                          As of today, we work in the fields of Online Learning,
                          Digital Marketing, Web Development and Hospitality.
                          <br />
                          Our Businesses include, VVR Learning, VVR Digital and
                          VVR Life
                        </Subheading>
                      </ScrollAnimation>
                    </BannerContent>
                    <div className=" absolute">
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
                  {/* <div className="he-max-w ">
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
                  </div> */}
                  {/* <div className="width-50a center pt3 ">
                    <span className="fw1 f-1em white regular-font o-80 mt3 mb4 lh-copy ">
                      Looking to start a new business or boost an existing one?
                      Here at VVR Digital, we’ve got all the right tools to help
                      you out. Not only can we enable a thriving online
                      presence, but we also provide end-to-end business support.
                    </span>
                  </div> */}
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
                <h2
                  className="medium-font f-40 fw4 fw4 clr-132 mt0-ns  pt3 mb3 w-70per width-100  aboutmission"
                  data-aos="fade-down"
                >
                  WE STARTED <br />
                  WITH A DREAM
                  <br />
                  TO HELP ,
                </h2>
                <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                  VVR Group is an ambitious and dynamic multidisciplinary
                  startup, based in Tokyo, Japan. Our primary focus lies in
                  building successful businesses based on our varying skill
                  sets.As of today, we work in the fields of Online Learning,
                  Digital Marketing, Web Development and Hospitality. Our
                  Businesses include, VVR Learning, VVR Digital and VVR Life
                </p>
              </div>
            </div>
            <div className=" dtc-l tc  wow fadeInRight imgspace">
              <img
                src="/assets/svg/about/10.png"
                className=" mw-100 "
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </section>
      </div>

      <div
        className=" center pt5-ns pb5-ns "
        id="business"
        name="business"
        // style={{ "--img": `url(${BackGround})` business}}
      >
        <section className="lef-ri-pa pv2">
          <h2
            className="medium-font f-40 fw4 tc  mt0 mb3  width-100 belowline imgspace"
            data-aos="fade-up"
          >
            Our Businesses
          </h2>

          {/* MAIN ROW */}
          <div className="dt-ns dt--fixed-ns w-100 pt4-ns">
            <div className="row">
              <h5 className="tc  mt0">
                VVR Digital are managing following business
              </h5>
              {/* <div className="col-md-4">
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
                          <span className="button-">Know More</span>
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
                          <span className="button-">Know More</span>
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
                          <span className="button-">Know More</span>
                          <i className="far fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div
                className="col-md-4 ph0"
                data-aos="fade-up-right"
                data-aos-duration="3000"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <a
                  href="#"
                  class="projects-wrap style-01 wow move-up animated"
                  style={{ visibility: "visible" }}
                >
                  <div className="projects-image-box">
                    <div className="projects-image">
                      <img
                        className="img-fluid"
                        src="https://template.hasthemes.com/mitech/assets/images/projects/case-study-01-480x298.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h6 className="heading">VVR Learning</h6>
                      <div className="post-categories">www.vvrlearning.com</div>
                      <div className="text12">
                        We believe that learning a language is a rich experience
                        that should be made accessible and easy to anyone who
                        wishes to take it up. we offer quality language learning
                        at affordable rates.
                      </div>
                      <div className="box-projects-arrow">
                        <span className="button-text">View details</span>
                        <i className="fa fa-long-arrow-right ml-1"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-md-4 ph0"
                data-aos="zoom-in-up"
                data-aos-duration="3000"
              >
                <a
                  href="#"
                  className="projects-wrap style-01 wow move-up animated"
                  style={{ visibility: "visible" }}
                >
                  <div className="projects-image-box">
                    <div className="projects-image">
                      <img
                        className="img-fluid"
                        src="https://template.hasthemes.com/mitech/assets/images/projects/case-study-02-480x298.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h6 className="heading">VVR Digital</h6>
                      <div className="post-categories">www.vvrdigital.com</div>
                      <div className="text12">
                        VVR Digital is a team of digitally driven individuals,
                        working in their fields of proficiency to enhance and
                        realign businesses to the ever-changing trends of
                        digital and off-line marketing.
                      </div>
                      <div className="box-projects-arrow">
                        <span className="button-text">View Details</span>
                        <i className="fa fa-long-arrow-right ml-1"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-md-4 ph0"
                data-aos="fade-up-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3000"
              >
                <a
                  href="#"
                  className="projects-wrap style-01 wow move-up animated"
                  style={{ visibility: "visible" }}
                >
                  <div className="projects-image-box">
                    <div className="projects-image">
                      <img
                        className="img-fluid"
                        src="https://template.hasthemes.com/mitech/assets/images/projects/case-study-03-480x298.webp"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h6 className="heading">VVR Life</h6>
                      <div className="post-categories">www.vvrlife.com</div>
                      <div className="text12">
                        VVR Life is our newest initiative and is still in the
                        initial stages of development. We are in the process of
                        creating an eco-friendly getaway in Dharamsala and
                        Mcleodganj, Himachal Pradesh.
                      </div>
                      <div className="box-projects-arrow">
                        <span className="button-text">View details</span>
                        <i className="fa fa-long-arrow-right ml-1"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
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
                      className=" mw-100"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className=" dtc-l   v-mid wow fadeInRight">
                  <h2 className="medium-font f-40 fw4 fw4 pl4 clr-132 mt0 mb3 w-70per width-100  aboutmission wmud">
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

      {/* <section
        className=" pv5 about-banner-bg about-section2"
        name="Mobile-development"
        id="Mobile-development"
      >
        <div className="pv2">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={100}
                  slidesPerView={1}
                  slidesToSlide={true}
                  currentSlide={true}
                  keyBoardControl={true}
                  customTransition="all .5s ease"
                  transitionDuration={5000}
                  arrows={false}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
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
      </section> */}

      <section className="business" style={{ "--img": `url(${BackGround2})` }}>
        <div className="container">
          <div className="row center pv5">
            <div className="col-lg-6">
              <div className="conact-us-wrap-one">
                <h3 className="heading white">
                  Obtaining further information by make a contact with our
                  experienced IT staffs.
                </h3>

                <div className="sub-heading white">
                  We’re available for 8 hours a day!
                  <br />
                  Contact to require a detailed analysis and assessment of your
                  plan.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info-two tc">
                <div className="icon">
                  <span className="fa fa-phone"></span>
                </div>
                <h6 className="heading font-weight--reguler">Reach out now!</h6>
                <h2 className="call-us">
                  <a href="tel:190068668">1900 68668</a>
                </h2>
                <div className="contact-us-button mt-3">
                  <a href="#" className="btn btn--secondary">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            {/* <h1 className="f2 f2-l fw2 white semibold-font tc mt0 mt50 lh-title  ">
            Looking For Simple Solutions To All Your Business Needs?
          </h1> */}
            {/* <div className="tc">
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
          </div> */}
          </div>
        </div>
      </section>

      <section className="lef-ri-pa pv5 mb5">
        <h2 className="medium-font f-40 fw4 tc black mt0 mb3  width-100 belowline">
          What do people praise about VVR Group
        </h2>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive2}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          //autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlay={true}
          autoPlaySpeed={2500}
          slidesPerView={1}
          slidesToSlide={true}
          currentSlide={true}
          keyBoardControl={true}
          customTransition="all .5s ease"
          transitionDuration={2500}
          arrows={false}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //deviceType={this.props.deviceType}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup action={nextRef} />}
          dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          {/* {data.map((story) => (
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
              ))} */}

          <div className="fl w-100-mob w-25-l w-50  pa2  customewidth wow fadeInDown">
            <div className="">
              <div
                className="testimony-wrap "
                style={{ paddingBottom: "1.5rem", paddingTop: "1.3rem" }}
              >
                <div className="">
                  {/* <span>
                    <img
                      style={{ width: "20px", float: "right" }}
                      src="/assets/img/icon.svg"
                    />
                  </span> */}
                  <div
                    className=" align-items-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className=" user-img tc">
                      {/* <div
                        className="workclr-hana tc"
                        style={{ "--img": `url(${Hana})` }}
                      ></div> */}
                      <img
                        src="/assets/testimonials/Jonal.png"
                        className="tc"
                      />
                      <p className="name">Jonel Alquinto</p>
                    </div>
                  </div>

                  <p
                    className="mb-4 pt3"
                    style={{ marginBottom: "2rem", fontSize: "1rem" }}
                  >
                    I had a pleasure learning from VVR. They are very
                    professional and will do their best to provide language
                    learning. <br />I will recommend and they are all kind
                    personnel. I had fun learning. Thank you VVR Learning Team.
                    Much appreciated.
                    <br></br>
                  </p>
                  <div className="">
                    <span className="star">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>

                    <p className="">VVR Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fl w-100-mob w-25-l w-50  pa2  customewidth wow fadeInDown">
            <div className="">
              <div
                className="testimony-wrap "
                style={{ paddingBottom: "1.5rem", paddingTop: "1.3rem" }}
              >
                <div className="">
                  <div
                    className=" align-items-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className=" user-img tc">
                      <img
                        src="/assets/testimonials/David.png"
                        className="tc"
                      />
                      <p className="name">David Penaherrera</p>
                    </div>
                  </div>

                  <p
                    className="mb-4 pt3"
                    style={{ marginBottom: "2rem", fontSize: "1rem" }}
                  >
                    I am having a great learning experience with VVR team.{" "}
                    <br />
                    The teachers and staff are always well prepared, supportive
                    and very professional.
                    <br /> VVR is a great place to learn. I would recommend to
                    anyone from any level.
                    <br></br>
                  </p>
                  <div className="">
                    <span className="star">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>

                    <p className="">VVR Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fl w-100-mob w-25-l w-50  pa2  customewidth wow fadeInDown">
            <div className="">
              <div
                className="testimony-wrap "
                style={{ paddingBottom: "1.5rem", paddingTop: "1.3rem" }}
              >
                <div className="">
                  <div
                    className=" align-items-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className=" user-img tc">
                      <img src="/assets/testimonials/Hana.png" className="tc" />
                      <p className="name">Hana</p>
                    </div>
                  </div>

                  <p
                    className="mb-4 pt3"
                    style={{ marginBottom: "2rem", fontSize: "1rem" }}
                  >
                    I have a great experience learning Japanese with VVR
                    Learning. <br />
                    The teacher is really nice and good. All the best!
                    <br></br>
                  </p>
                  <div className="">
                    <span className="star">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>

                    <p className="">VVR Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fl w-100-mob w-25-l w-50  pa2  customewidth wow fadeInDown">
            <div className="">
              <div
                className="testimony-wrap "
                style={{ paddingBottom: "1.5rem", paddingTop: "1.3rem" }}
              >
                <div className="">
                  <div
                    className=" align-items-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className=" user-img tc">
                      <img src="/assets/testimonials/Riya.png" className="tc" />
                      <p className="name">Riya</p>
                    </div>
                  </div>

                  <p
                    className="mb-4 pt3"
                    style={{ marginBottom: "2rem", fontSize: "1rem" }}
                  >
                    I found the demo class extremely helpful and informative.
                    <br />
                    Teacher's examples were very relevant and I felt that I
                    gained a lot of knowledge. <br />I am very impressed with
                    the teaching methods. Thank you.
                    <br></br>
                  </p>
                  <div className="">
                    <span className="star">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>

                    <p className="">VVR Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fl w-100-mob w-25-l w-50  pa2  customewidth wow fadeInDown">
            <div className="">
              <div
                className="testimony-wrap "
                style={{ paddingBottom: "1.5rem", paddingTop: "1.3rem" }}
              >
                <div className="">
                  <div
                    className=" align-items-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className=" user-img tc">
                      <img src="/assets/testimonials/Ben.png" className="tc" />
                      <p className="name">Ben</p>
                    </div>
                  </div>

                  <p
                    className="mb-4 pt3"
                    style={{ marginBottom: "2rem", fontSize: "1rem" }}
                  >
                    The team have made it very easy for me to study when it’s
                    suitable for me and at a pace that works for me. <br />
                    Overall I am happy and have chosen to continue with them
                    after my first course finished.
                  </p>
                  <div className="">
                    <span className="star">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>

                    <p className="">VVR Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fl w-100-mob w-25-l w-50  pa2  customewidth wow fadeInDown">
            <div className="">
              <div
                className="testimony-wrap "
                style={{ paddingBottom: "1.5rem", paddingTop: "1.3rem" }}
              >
                <div className="">
                  <div
                    className=" align-items-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className=" user-img tc">
                      <img src="/assets/testimonials/Sau.png" className="tc" />
                      <p className="name">Sau</p>
                    </div>
                  </div>

                  <p
                    className="mb-4 pt3"
                    style={{ marginBottom: "2rem", fontSize: "1rem" }}
                  >
                    I have a great experience learning Japanese with VVR
                    Learning.
                    <br /> The teacher is really nice and good. All the best!{" "}
                    <br></br>
                  </p>
                  <div className="">
                    <span className="star">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>

                    <p className="">VVR Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fl w-100-mob w-25-l w-50  pa2  customewidth wow fadeInDown">
            <div className="">
              <div
                className="testimony-wrap "
                style={{ paddingBottom: "1.5rem", paddingTop: "1.3rem" }}
              >
                <div className="">
                  <div
                    className=" align-items-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className=" user-img tc">
                      <img src="/assets/testimonials/Sau.png" className="tc" />
                      <p className="name">Sau</p>
                    </div>
                  </div>

                  <p
                    className="mb-4 pt3"
                    style={{ marginBottom: "2rem", fontSize: "1rem" }}
                  >
                    I have a great experience learning Japanese with VVR
                    Learning.
                    <br /> The teacher is really nice and good. All the best!{" "}
                    <br></br>
                  </p>
                  <div className="">
                    <span className="star">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>

                    <p className="">VVR Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fl w-100-mob w-25-l w-50  pa2  customewidth wow fadeInDown">
            <div className="">
              <div
                className="testimony-wrap "
                style={{ paddingBottom: "1.5rem", paddingTop: "1.3rem" }}
              >
                <div className="">
                  <div
                    className=" align-items-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className=" user-img tc">
                      <img src="/assets/testimonials/Sau.png" className="tc" />
                      <p className="name">Maraki Sam</p>
                    </div>
                  </div>

                  <p
                    className="mb-4 pt3"
                    style={{ marginBottom: "2rem", fontSize: "1rem" }}
                  >
                    Amazing to work with :)
                    <br />
                  </p>
                  <div className="">
                    <span className="star">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>

                    <p className="">VVR Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
      {/* <section className="lef-ri-pa pv5 mb5">
        <h2 className="medium-font f-40 fw4 tc black mt0 mb3  width-100 belowline">
          What do people praise about VVR Group
        </h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </section> */}
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
