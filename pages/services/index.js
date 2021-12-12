import React, { useEffect, useState } from "react";

import Head from "next/head";
import CommonTopBar from "../../components/commons/commonTopBar";
import Link from "next/link";
export default function Feature() {
  return (
    <div>
      <Head>
        <title>VVR Digital - Services</title>
      </Head>

      <CommonTopBar page={"Our Services"} />

      <section className="lef-ri-pa pv5 no-padding-1">
        <div className="row">
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
                      <h5 class="heading">VVR Learning</h5>
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
                      <h5 class="heading">VVR Digital</h5>
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
                      <h5 class="heading">VVR Life</h5>
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
    </div>
  );
}
