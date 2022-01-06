import React, { useEffect, useState } from "react";

import Head from "next/head";
import CommonTopBar from "../../components/commons/commonTopBar";
import Link from "next/link";
import Bgimg from "../../components/assets/svg/about/vvrlearning.png";
import styled from "styled-components";

import video1 from "../../public/assets/video/Japvideovvr.mp4";

var sectionStyle = {
  width: "100%",
  backgroundSize: "cover",
  backgroundImage: `url(${Bgimg})`,
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
      <div className="lef-ri-pa center pv3-ns regular-font">
        <div className="cf mph20 pv5-ns work-padd ">
          <div className="fl w-100-ns w-30-l">
            <h6 className="ma0 psb-ms f2 ">About Learning</h6>
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

      <section className="lef-ri-pa pv5 no-padding-1">
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
                      src="https://template.hasthemes.com/mitech/assets/images/box-image/blog-01-330x330.webp"
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
                      src="https://template.hasthemes.com/mitech/assets/images/box-image/blog-01-330x330.webp"
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
                      src="https://template.hasthemes.com/mitech/assets/images/box-image/blog-01-330x330.webp"
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

      <section className=" pv5 cases-video-img  no-padding-1">
        <div className="row" style={{ background: "#F9F9FB" }}>
          <div className="col-md-5 pa0">
            <div className="media">
              <img
                src="	https://otakoyi.software/_cases/pete-health/woman.png"
                alt=""
              />
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
                  // src="https://otakoyi.software/_cases/pete-health/Video_02.mp4"
                  src={video1}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
