import React from "react";
import Head from "next/head";
import CommonTopBar from "../../components/commons/commonTopBar";

export default function marketing(props) {
  return (
    <>
      <div>
        <Head>
          <title>VVR Digital - ux-ui design</title>
        </Head>

        <CommonTopBar page={"Services - UX/UI design"} />
        <section
          name="web-design"
          id="web-design"
          className="lef-ri-pa pv5 about-banner-bg about-section2"
        >
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                  Website design
                </h2>
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <div>
                      <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                        We can help you design an aesthetically pleasing,
                        uncluttered and user-friendly website to give your brand
                        authenticity and credibility. It is important for
                        businesses to have a website that not only follows their
                        aesthetic, but also one that is suited to be the face of
                        the business. Our team of experts will take the essence
                        of your business and help you create a website design
                        that truly reflects who you are as a company while
                        highlighting and respecting your core values.
                      </p>
                    </div>
                  </div>
                  <div className=" dtc-l v-mid wow fadeInRight">
                    <img
                      src="/assets/svg/services/ui-ux/webdesign.png"
                      className="pt5 mw-100"
                    />
                  </div>
                </div>
              </article>
            </section>
          </div>
        </section>

        <section
          className="lef-ri-pa pv5 about-banner-bg about-section2"
          name="mobile-design"
          id="mobile-design"
        >
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                  Mobile app design
                </h2>
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <div>
                      <img
                        src="/assets/svg/services/ui-ux/mobile.png"
                        className="pt5 mw-100"
                      />
                    </div>
                  </div>
                  <div className=" dtc-l tc  v-mid wow fadeInRight">
                    <div>
                      <p className="clr-6D839D regular-font tl pl4 f-18px lh-copy mv0 width-100">
                        We create modern Android and IOS Mobile apps to put your
                        business right in the hands of your customers. We use a
                        cross platform, so you don’t need to pay separately for
                        IOS or Android. The Digital Age demands everything to be
                        easy, accessible and speedy. And this is achieved
                        through the design of your mobile application. A well
                        designed mobile app has the ability to help you acquire
                        customers as well as increase your overall reach and
                        accessibility. We can help you build the perfect app
                        right from design to execution and maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </section>

        <section
          className="lef-ri-pa pv5 about-banner-bg about-section2"
          name="logo-design"
          id="logo-design"
        >
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                  Logo design
                </h2>
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <div>
                      <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                        We design logos to perfectly embody the idea and values
                        of your business! Your logo is the face of your business
                        and forms the most prominent visible manifestation of
                        your business. Our team will understand the core values
                        of your business, your requirements and your preferences
                        and then design a few logo options for you to choose
                        from.
                      </p>
                    </div>
                  </div>
                  <div className=" dtc-l tc  v-mid wow fadeInRight">
                    <img
                      src="/assets/svg/services/ui-ux/logo.png"
                      className="pt5 mw-100"
                    />
                  </div>
                </div>
              </article>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
