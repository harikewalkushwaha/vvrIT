import React from "react";
import Head from "next/head";
import CommonTopBar from "../../components/commons/commonTopBar";

export default function marketing(props) {
  return (
    <>
      <div>
        <Head>
          <title>VVR Digital - Marketing</title>
        </Head>

        <CommonTopBar page={"Services - Marketing"} />
        <section
          name="seo"
          id="seo"
          className="lef-ri-pa pv5 about-banner-bg about-section2"
        >
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                  SEO managemnet
                </h2>
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <div>
                      <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                        We create a custom SEO strategy for your business to
                        help you reach your goals through your website. In
                        today’s digital age, it is imperative to have a good
                        handle on SEO if you want to stand out amongst a sea of
                        competitors. Our team will help organically establish an
                        online presence for your business through technical SEO,
                        content strategy and every other SEO vertical.
                      </p>
                    </div>
                  </div>
                  <div className=" dtc-l v-mid wow fadeInRight">
                    <img
                      src="/assets/svg/services/maketing/optimize.png"
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
          name="social-media"
          id="social-media"
        >
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                  Social media marketing
                </h2>
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <div>
                      <img
                        src="/assets/svg/services/maketing/social.png"
                        className="pt5 mw-100"
                      />
                    </div>
                  </div>
                  <div className=" dtc-l tc  v-mid wow fadeInRight">
                    <div>
                      <p className="clr-6D839D regular-font tl pl4 f-18px lh-copy mv0 width-100">
                        We are all aware of the importance of a robust and
                        up-to-date social media presence (Instagram, Facebook,
                        linkedin, youtube etc.). Our team will help cater to
                        your online audience through targeted and custom social
                        media strategies. Right from ideation, planning, design,
                        and content to execution, ads and campaigns, our team
                        has the skill sets to help your business stand out in an
                        oversaturated social media world.
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
          name="email-marketing"
          id="email-marketing"
        >
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                  Email Marketing
                </h2>
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <div>
                      <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                        We help connect your business to your customers through
                        creative, exciting and effective email marketing. Email
                        marketing is an incredibly powerful tool when it comes
                        to generating and converting leads. Our team of experts
                        will create email campaigns for your business to drive
                        brand recognition and sales while simultaneously
                        strengthening client relationships.
                      </p>
                    </div>
                  </div>
                  <div className=" dtc-l tc  v-mid wow fadeInRight">
                    <img
                      src="/assets/svg/services/maketing/email.png"
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
