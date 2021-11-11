import React from "react";
import Head from "next/head";
import CommonTopBar from "../../components/commons/commonTopBar";

export default function marketing(props) {
  return (
    <>
      <div>
        <Head>
          <title>VVR Digital - Out-Sourcing</title>
        </Head>

        <CommonTopBar page={"Services - Out sourcing"} />
        <section
          name="technical-support"
          id="technical-support"
          className="lef-ri-pa pv5 about-banner-bg about-section2"
        >
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                  Technical Support
                </h2>
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <div>
                      <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                        Need tech support just for a short period of time? Let
                        us handle it for you! You may need a developer, designer
                        or any other kind of technical support just for a few
                        days or months. This can be an expensive endeavour,
                        however, in situations like these, we offer contract
                        based and affordable solutions! We can provide the
                        experts you need to perfectly handle your short or long
                        term projects!
                      </p>
                    </div>
                  </div>
                  <div className=" dtc-l v-mid wow fadeInRight">
                    <img
                      src="/assets/svg/services/outsourcing/31.png"
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
          name="admin-support"
          id="admin-support"
        >
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                  Admin Support
                </h2>
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <div>
                      <img
                        src="/assets/svg/services/outsourcing/29.png"
                        className="pt5 mw-100"
                      />
                    </div>
                  </div>
                  <div className=" dtc-l tc  v-mid wow fadeInRight">
                    <div>
                      <p className="clr-6D839D regular-font tl pl4 f-18px lh-copy mv0 width-100">
                        Need someone to help you set up and organise your
                        business? We offer long and short term Admin support to
                        meet all your administrative needs! It can sometimes be
                        expensive, and a hassle to hire a full-time employee or
                        find the perfect freelancer in the beginning of your
                        journey. This is where we come in, let us take on your
                        administrative responsibilities! We have trained and
                        certified Admin executives that can join your team for
                        any duration of time you choose, at affordable rates!
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
          name="marketing-support"
          id="marketing-support"
        >
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                  Marketing Support
                </h2>
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <div>
                      <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                        Want to keep your Business up to date on the Social
                        Media platforms? We’ve got you covered! It can be quite
                        expensive and tedious to curate and employ an entire
                        social media team, especially in the beginning stages of
                        your business. Outsource your social media requirements
                        to us, and we will keep you on trend and up-to-date on
                        all major social media platforms! Our team of experts
                        will handle everything for you, right from ideating,
                        designing, scheduling, and posting to maintenance,
                        strategy and ads.
                      </p>
                    </div>
                  </div>
                  <div className=" dtc-l tc  v-mid wow fadeInRight">
                    <img
                      src="/assets/svg/services/outsourcing/28.png"
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
