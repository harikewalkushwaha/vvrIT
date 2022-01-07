import React, { useEffect, useState } from "react";

import Head from "next/head";
import CommonTopBar from "../../components/commons/commonTopBar";
import Link from "next/link";
import Bgimg from "../../components/assets/svg/about/vvrlearning.png";
import styled from "styled-components";

import video1 from "../../public/assets/video/vvrlearning.mp4";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

var sectionStyle = {
  width: "100%",
  backgroundSize: "cover",
  backgroundImage: `url(${Bgimg})`,
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

export default function Feature() {
  return (
    <div>
      <Head>
        <title>Our Business - VVR Digital</title>
      </Head>

      {/* <CommonTopBar page={"Our Business - VVR Digital"} /> */}
      <div className="aboutbanner" style={{ "--img": `url(${Bgimg})` }}>
        <div className="" style={{ height: "85px" }} />

        <div className="tc-l about-banner-hg align-centerdiv ">
          <div className="hero-content  center w-100 ">
            <div className="pattern-bg1 align-centerdiv "></div>
            <div className="he-max-w center ">
              <h1 className="f2 f1-l fw2 white semibold-font tc mt0 mt50 lh-title ">
                VVR Learning
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lef-ri-pa center pv3-ns pv4 regular-font">
        <div className="cf mph20 pv5-ns work-padd ">
          <div className="fl w-100-ns w-30-l">
            <h6 className="ma0 psb-ms f2 clr-132">About Learning</h6>
          </div>
          <div className="fl w-100-ns w-70-l ">
            <div className="vvr-content middle-content">
              <p className="ma0">
                Mayple is the creator of a fully-managed marketing services
                marketplace designed to help businesses work with the experts
                who are best suited to their needs and goals.
              </p>
              <p className="ma0">
                The task was to create a new website design, simple and
                intuitive to use, which will tell the target audience about the
                advantages of the product and help expand sales. The work done
                includes the UX / UI stages with implementation on the Webflow
                platform.
              </p>
              <button
                type="button"
                className="ant-btn btn1 pv3 ph4 workbtnsd bg-white"
              >
                <span>Visit Website</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="lef-ri-pa pb5 no-padding-1">
        <div className="row">
          <h2 className="medium-font f-40-ns fw4 clr-132 mt0 mb3 tc width-100 belowline">
            VVR Learning Courses
          </h2>
          <div className="col-md-6 col-lg-4 ">
            <a
              href="#"
              class="box-large-image__wrap wow move-up animated"
              style={{ visibility: "visible" }}
            >
              <div class="box-large-image__box">
                <div class="box-large-image__midea">
                  <div class="images-midea">
                    <img
                      src="/assets/business/eng.png"
                      width="330"
                      height="330"
                      class="img-fluid"
                      alt=""
                    />

                    <div class="button-wrapper">
                      <div class="btn tm-button">
                        <span class="button-text">Learn more</span>
                      </div>
                    </div>
                    <div class="heading-wrap">
                      <h5 class="heading">English Courses</h5>
                    </div>
                  </div>
                </div>

                <div class="box-large-image__content mt-3 tc">
                  <p>
                    Our technical experts have a flair for developing{" "}
                    <strong>clean-coded websites</strong> based on customers’
                    needs, global guidelines and trends.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 ">
            <a
              href="#"
              class="box-large-image__wrap wow move-up animated"
              style={{ visibility: "visible" }}
            >
              <div class="box-large-image__box">
                <div class="box-large-image__midea">
                  <div class="images-midea">
                    <img
                      src="/assets/business/jap.png"
                      width="330"
                      height="330"
                      class="img-fluid"
                      alt=""
                    />

                    <div class="button-wrapper">
                      <div class="btn tm-button">
                        <span class="button-text">Learn more</span>
                      </div>
                    </div>
                    <div class="heading-wrap">
                      <h5 class="heading">Japanese Courses</h5>
                    </div>
                  </div>
                </div>

                <div class="box-large-image__content mt-3 tc">
                  <p>
                    Our technical experts have a flair for developing{" "}
                    <strong>clean-coded websites</strong> based on customers’
                    needs, global guidelines and trends.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 ">
            <a
              href="#"
              class="box-large-image__wrap wow move-up animated"
              style={{ visibility: "visible" }}
            >
              <div class="box-large-image__box">
                <div class="box-large-image__midea">
                  <div class="images-midea">
                    <img
                      src="/assets/business/Customised.png"
                      width="330"
                      height="330"
                      class="img-fluid"
                      alt=""
                    />

                    <div class="button-wrapper">
                      <div class="btn tm-button">
                        <span class="button-text">Learn more</span>
                      </div>
                    </div>
                    <div class="heading-wrap">
                      <h5 class="heading">Customised Courses</h5>
                    </div>
                  </div>
                </div>

                <div class="box-large-image__content mt-3 tc">
                  <p>
                    Our technical experts have a flair for developing{" "}
                    <strong>clean-coded websites</strong> based on customers’
                    needs, global guidelines and trends.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="  cases-video-img  no-padding-1">
        <div className="row" style={{ background: "rgba(0,0,0,0.8)" }}>
          <div className="col-md-5 pa0">
            <div className="media">
              <img src="/assets/business/4.png" alt="" />
            </div>
          </div>
          <div className="col-md-7 pa0">
            <div className="video">
              <video
                autoplay="autoplay"
                loop="loop"
                muted="muted"
                playsinline=""
              >
                <source
                  src="/assets/video/vvrlearning.mp4"
                  // src={video1}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      <div className="lef-ri-pa center pv3-ns pv4 regular-font">
        <div className="cf mph20 pv5-ns work-padd ">
          <div className="fl w-100-ns w-30-l">
            <h6 className="ma0 psb-ms f2 clr-132">Our Approach</h6>
          </div>
          <div className="fl w-100-ns w-70-l ">
            <div className="vvr-content middle-content">
              <p className="ma0">
                Mayple is the creator of a fully-managed marketing services
                marketplace designed to help businesses work with the experts
                who are best suited to their needs and goals.
              </p>
              <p className="ma0">
                The task was to create a new website design, simple and
                intuitive to use, which will tell the target audience about the
                advantages of the product and help expand sales. The work done
                includes the UX / UI stages with implementation on the Webflow
                platform.
              </p>
              <button
                type="button"
                className="ant-btn btn1 pv3 ph4 workbtnsd bg-white"
              >
                <span>Visit Website</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pv2 mb3">
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
                // renderButtonGroupOutside={true}
                // customButtonGroup={<ButtonGroup action={nextRef} />}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <img src="/assets/gallery/1.png" alt="" />

                <img src="/assets/gallery/2.png" alt="" />

                <img src="/assets/gallery/3.png" alt="" />

                <img src="/assets/gallery/4.png" alt="" />

                <img src="/assets/gallery/5.png" alt="" />
                <img src="/assets/gallery/6.png" alt="" />
                <img src="/assets/gallery/7.png" alt="" />
                <img src="/assets/gallery/8.png" alt="" />

                <img src="/assets/gallery/9.png" alt="" />

                <img src="/assets/gallery/10.png" alt="" />
                <img src="/assets/gallery/11.png" alt="" />
                <img src="/assets/gallery/12.png" alt="" />
                <img src="/assets/gallery/13.png" alt="" />
                <img src="/assets/gallery/14.png" alt="" />
              </Carousel>
            </div>
          </article>
        </section>
      </div>
      <section className="lef-ri-pa pb5 no-padding-1">
        <div className="center tc">
          <img src="/assets/business/mockup3.gif" alt="" />
        </div>
      </section>
    </div>
  );
}
