import Head from "next/head";
import CommonTopBar from "../../components/commons/commonTopBar";
import RightArrow from "../../components/assets/svg/Home Page/Arrow.svg";
import Bgimg from "../../public/assets/svg/career/banner.png";
export default function about() {
  return (
    <div>
      <Head>
        <title>VVR Digital - Career</title>
      </Head>

      <div className="aboutbanner" style={{ "--img": `url(${Bgimg})` }}>
        <div className="" style={{ height: "85px" }} />

        <div className="tc-l about-banner-hg align-centerdiv ">
          <div className="hero-content  center w-100 ">
            <div className="pattern-bg1 align-centerdiv "></div>
            <div className="he-max-w center ">
              <h1 className="f2 f1-l fw2 white semibold-font tc mt0 mt50 lh-title ">
                Career
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" center pt5-ns ">
        <section className="lef-ri-pa pv2">
        
          <div className="dt-ns dt--fixed-ns w-100">
            <div className=" dtc-l v-mid wow fadeInLeft">
              <img
                src="/assets/svg/about/10.png"
                className=" mw-100 "
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className=" dtc-l  pl5 v-mid wow fadeInRight imgspace">
              <div>
                <h2 className="medium-font f-40 fw4 fw4 clr-132 mt0-ns  pt3 mb3  width-100  aboutmission">
                  WE STARTED <br />
                  WITH A DREAM
                  <br />
                  TO HELP ,
                </h2>
                <p className="clr-6D839D regular-font f-18px lh-copy mv0 width-100">
                  We are a team of digitally driven individuals, working in our
                  fields of proficiency to enhance and realign your business to
                  the ever-changing trends of digital and off-line marketing. We
                  want to help businesses establish themselves online, and do it
                  in a way that provides the highest possible quality at
                  competitive rates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      <section
        name="website-development"
        id="website-development"
        className="lef-ri-pa pt5 about-banner-bg about-section2"
      >
        <div className="pv2">
          <section className="">
            <article className=" center ">
              <h2 className="medium-font f-40 fw4  tc clr-132 mt0 mb3  width-100 belowline">
                What's It's Like To work with us
              </h2>
              <div className="dt-ns dt--fixed-ns w-100">
                <div className=" dtc-l v-mid wow fadeInLeft">
                  <h2 className="medium-font f-40 fw4   clr-132 mt0 mb3  width-100 ">
                    Have your say
                  </h2>
                  <div>
                    <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                      We are an organization where every voice matters.
                    </p>
                    <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                      We make sure each and every member of our company gets the
                      opportunity to have a say on decision making . As an
                      organization we like participative attitude where everyone
                      can contribute to new ideas and strategies actively.
                    </p>
                    <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                      We don’t limit employees to one particular role but
                      believe in giving more opportunities to explore different
                      roles and responsibilities.
                    </p>
                  </div>
                </div>
                <div className=" dtc-l v-mid wow fadeInRight">
                  <img src="/assets/svg/career/12.png" className="pt5 mw-100" />
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
      <section
        className="lef-ri-pa pt5 about-banner-bg about-section2"
        name="Mobile-development"
        id="Mobile-development"
      >
        <div className="pv2">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div className=" dtc-l  wow fadeInLeft">
                  <div>
                    <img src="/assets/svg/career/13.png" className=" mw-100" />
                  </div>
                </div>
                <div className=" dtc-l   v-mid wow fadeInRight">
                  <div>
                    <h2 className="medium-font f-40 fw4  pl4 clr-132 mt0 mb3 width-100 ">
                      Supportive
                    </h2>

                    <p className="clr-6D839D regular-font tl pl4 f-18px w-80per lh-copy mv0 width-100">
                      We are a group of young enthusiast who are trying to build
                      a place for people who are looking for growth in their
                      life. Just enjoy what you do and keep working hard.
                      Working with us leads to higher job satisfaction and
                      increased productivity which helps you to grow personally
                      and professionally.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
      <section
        name="website-development"
        id="website-development"
        className="lef-ri-pa pt5 about-banner-bg about-section2"
      >
        <div className="pv2">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div className=" dtc-l v-mid wow fadeInLeft">
                  <div>
                    <h2 className="medium-font f-40 fw4   clr-132 mt0 mb3  width-100 ">
                      Communication is a top priority
                    </h2>
                    <p className="clr-6D839D regular-font w-80per f-18px lh-copy mv0 width-100">
                      Communication is the key to everything. We make sure we
                      communicate with everyone through virtual meetings in
                      different intervals of time so that all of us can share or
                      thoughts and feel heard.
                    </p>
                  </div>
                </div>
                <div className=" dtc-l  wow fadeInRight">
                  <img src="/assets/svg/career/14.png" className="pt5 mw-100" />
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>

      <section
        className="lef-ri-pa pt5 about-banner-bg about-section2"
        name="Mobile-development"
        id="Mobile-development"
      >
        <div className="pv2">
          <section className="">
            <article className=" center ">
              <div className="dt-ns dt--fixed-ns w-100">
                <div className=" dtc-l  wow fadeInLeft">
                  <div>
                    <img src="/assets/svg/career/15.png" className=" mw-100" />
                  </div>
                </div>
                <div className=" dtc-l   v-mid wow fadeInRight">
                  <div>
                    <h2 className="medium-font f-40 fw4  pl4 clr-132 mt0 mb3 width-100 ">
                      Employees satisfaction
                    </h2>

                    <p className="clr-6D839D regular-font tl pl4 f-18px w-80per lh-copy mv0 width-100">
                      Job satisfaction of our employees is the most important
                      thing for us. We believe everyone should get an
                      opportunity to do what they love doing and feel
                      recognized. So we encourage each one of us to enjoy what
                      you do and keep working hard to become best version of our
                      selves.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>

      <section className="lef-ri-pa pb5 mt5 clr-002">
        <div className=" conatiner">
          <h2 className="medium-font f-40 fw4  tc white pv5  width-100 belowline">
            Open Positions
          </h2>
          <div className="row rwpading">
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="stm_vacancies__inner">
                <a href="/career/nbJt" className="title">
                  <h5 className="cardunderline">
                    Native bilingual Japanese Teacher
                  </h5>
                </a>
                <div className="location info">Remote Work</div>
                <div className="department info">Teacher</div>
                <div className="read-more">
                  <a href="/career/nbJt" className="base_font_color">
                    Read more <img src={RightArrow} />
                  </a>
                  <span className="date">January 20, 2022 </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="stm_vacancies__inner">
                <a href="/career/nonNbjt" className="title">
                  <h5 className="cardunderline">
                    Non Native bilingual Japanese Teacher
                  </h5>
                </a>
                <div className="location info">Remote Work</div>
                <div className="department info">Teacher</div>
                <div className="read-more">
                  <a href="/career/nonNbjt" className="base_font_color">
                    Read more <img src={RightArrow} />
                  </a>
                  <span className="date">January 20, 2022 </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="stm_vacancies__inner">
                <a href="/career/nbEt" className="title">
                  <h5 className="cardunderline">
                    Native bilingual English Teacher
                  </h5>
                </a>
                <div className="location info">Remote Work</div>
                <div className="department info">Teacher</div>
                <div className="read-more">
                  <a href="/career/nbEt" className="base_font_color">
                    Read more <img src={RightArrow} />
                  </a>
                  <span className="date">January 20, 2022 </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row rwpading">
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="stm_vacancies__inner">
                <a href="/career/nonNbet" className="title">
                  <h5 className="cardunderline">
                    Non Native bilingual English Teacher
                  </h5>
                </a>
                <div className="location info">Remote Work</div>
                <div className="department info">Teacher</div>
                <div className="read-more">
                  <a href="/career/nonNbet" className="base_font_color">
                    Read more <img src={RightArrow} />
                  </a>
                  <span className="date">January 20, 2022 </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="stm_vacancies__inner">
                <a href="/career/marketingIntern" className="title">
                  <h5 className="cardunderline">Marketing Intern</h5>
                </a>
                <div className="location info">Remote Work</div>
                <div className="department info">Intern</div>
                <div className="read-more">
                  <a href="/career/marketingIntern" className="base_font_color">
                    Read more <img src={RightArrow} />
                  </a>
                  <span className="date">January 20, 2022 </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="stm_vacancies__inner">
                <a href="/career/developer" className="title">
                  <h5 className="cardunderline">Full stack Developer</h5>
                </a>
                <div className="location info">Remote Work</div>
                <div className="department info">Developer</div>
                <div className="read-more">
                  <a href="/career/developer" className="base_font_color">
                    Read more <img src={RightArrow} />
                  </a>
                  <span className="date">January 20, 2022 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lef-ri-pa mb6">
        <div className=" conatiner">
          <h2 className="medium-font f-40 fw4  tc clr-132 pv5  width-100 belowline">
            Life at VVR
          </h2>
          <div className="row rwpading">
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="vvr_vacancies__inner">
                <img src="https://templatekit.tokomoo.com/seokit/wp-content/uploads/sites/39/elementor/thumbs/group-of-cheerful-young-businesspeople-playing-bas-2021-09-23-20-19-59-utc-pg38gob1e9n3evivv662fnktvdzj10wa0arqk5l5ug.jpg" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="vvr_vacancies__inner">
                <img src="https://templatekit.tokomoo.com/seokit/wp-content/uploads/sites/39/elementor/thumbs/group-of-young-businesspeople-in-a-meeting-at-offi-2021-08-26-18-21-32-utc-pg38gq6prxpo23g5k6zbkn3r25q9gf3qok2pipidi0.jpg" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="vvr_vacancies__inner">
                <img src="https://templatekit.tokomoo.com/seokit/wp-content/uploads/sites/39/elementor/thumbs/people-playing-table-football-2021-08-27-00-03-06-utc-pg38gty2j9utcjaoy8ltum5lfp7qb7io12onftcst4.jpg" />
              </div>
            </div>
          </div>
          <div className="row rwpading">
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="vvr_vacancies__inner">
                <img src="https://templatekit.tokomoo.com/seokit/wp-content/uploads/sites/39/elementor/thumbs/man-playing-in-virtual-game-2021-08-30-01-00-22-utc-pg38gs2e5ls8pbdf97skpmmo8xgzvtb7ctdoh9fl5k.jpg" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="vvr_vacancies__inner">
                <img src="https://templatekit.tokomoo.com/seokit/wp-content/uploads/sites/39/elementor/thumbs/several-young-managers-of-large-contemporary-open-2021-09-24-03-45-56-utc-pg38gwrl3ryobd6lhrtpk3fz7uttyatv1gn3vn8mag.jpg" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 vvr_rmar">
              <div className="vvr_vacancies__inner">
                <img src="https://templatekit.tokomoo.com/seokit/wp-content/uploads/sites/39/elementor/thumbs/several-young-managers-of-large-contemporary-open-2021-09-24-03-45-56-utc-pg38gwrl3ryobd6lhrtpk3fz7uttyatv1gn3vn8mag.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
