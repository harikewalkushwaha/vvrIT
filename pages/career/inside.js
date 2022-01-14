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

      <section
        name="website-development"
        id="website-development"
        className="lef-ri-pa pv6 about-banner-bg about-section2"
      >
        <div className="row pv2">
          <div className="col-md-9">
            <div className="">
              <h2 className="consulting-custom-title">
                Deputy principal construction manager
              </h2>
            </div>
            <div className="wpb_text_column.wpb_content_element">
              <div className="wpb_wrapper">
                <p>
                  Consulting WordPress Theme is always looking for talented
                  people to become its team members. We realize that productive
                  people are always a good addition to our organization. So if
                  you have the financial acumen and the passion to work with
                  some of the biggest companies in the world, join in!
                </p>
              </div>
            </div>

            <div className="vacancy_about_wr ">
              <div className="about_vacantion">
                <div className="info">
                  <div className="icon">
                    <i className="fa fa-suitcase"></i>
                  </div>
                  <div className="text-hiring">
                    Department: <strong>Project Management</strong>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="text-hiring">
                    Project Location(s): <strong>Brooklyn, NY, US</strong>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="fa fa-graduation-cap"></i>
                  </div>
                  <div className="text-hiring">
                    Education: <strong>Master's Degree</strong>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="fa fa-credit-card"></i>
                  </div>
                  <div className="text-hiring">
                    Compensation: <strong>22K per annum</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 vvr_rmar wpb_text_column wpb_content_element">
                <div className="vvr_vacancies__innerpage wpb_wrapper ">
                  <a href="/career/inside" className="title">
                    <h5 className="cardunderline">Responsibilities</h5>
                  </a>
                  <p>
                    <span
                      style={{
                        fontSize: "13px",
                        lineHeight: "22px",
                        color: "#808080",
                      }}
                    >
                      Candidates can look forward to regular client contact, a
                      role in business development and proposal
                      writing/methodology creation, and a
                    </span>
                  </p>
                  <ul
                    style={{
                      fontSize: "13px",
                      lineHeight: "22px",
                      color: "#222222",
                    }}
                  >
                    <li>
                      <i className="fa fa-check tickicon pr2"></i>Assisting
                      senior consultants;
                    </li>
                    <li>
                      <i className="fa fa-check tickicon pr2"></i>Providing
                      legal and scholarly research;
                    </li>
                    <li>
                      <i className="fa fa-check tickicon pr2"></i>Creating
                      reports &amp; Gathering Data
                    </li>
                    <li>
                      <i className="fa fa-check tickicon pr2"></i>Analyzing Data
                      and understanding results
                    </li>
                    <li>
                      <i className="fa fa-check tickicon pr2"></i>Arranging
                      client coordination
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 wpb_column vc_column_container vvr_rmar">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element  vc_custom_1456122016220">
                      <div className="wpb_wrapper">
                        <h5 className="cardunderline title">
                          Skills/Experience
                        </h5>
                        <ul>
                          <li>
                            <i className="fa fa-check tickicon pr2"></i>Limited
                            experience at consultancy preferred;
                          </li>
                          <li>
                            <i className="fa fa-check tickicon pr2"></i>Great
                            interpersonal communication skills;
                          </li>
                          <li>
                            <i className="fa fa-check tickicon pr2"></i>Keen eye
                            for spotting data trends;
                          </li>
                          <li>
                            <i className="fa fa-check tickicon pr2"></i>Great
                            analytical skills;
                          </li>
                          <li>
                            <i className="fa fa-check tickicon pr2"></i>A keen
                            grasp of information technology;
                          </li>
                          <li>
                            <i className="fa fa-check tickicon pr2"></i>
                            Professional demeanor;
                          </li>
                          <li>
                            <i className="fa fa-check tickicon pr2"></i>
                            Personal accountability and strong work ethic;
                          </li>
                          <li>
                            <i className="fa fa-check tickicon pr2"></i>
                            Professional, able to interact with vendors/clients;
                          </li>
                          <li>
                            <i className="fa fa-check tickicon pr2"></i>
                            Positive, “can do” attitude.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" wpb_column vc_column_container col-md-3">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="stm_sidebar">
                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1451998133493">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className="vc_wp_custommenu wpb_content_element mb-30">
                            <div className="career_widget career_widget_nav_menu">
                              <div className="menu-sidebar-menu-1-container">
                                <ul
                                  id="menu-sidebar-menu-1"
                                  className="career_menu"
                                >
                                  <li
                                    id="menu-item-416"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-416"
                                  >
                                    <a href="https://consulting.stylemixthemes.com/jakarta/company-overview/">
                                      Company Overview
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-411"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-411"
                                  >
                                    <a href="https://consulting.stylemixthemes.com/jakarta/company-overview/careers/">
                                      Careers
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-380"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-380"
                                  >
                                    <a href="https://consulting.stylemixthemes.com/jakarta/company-overview/company-history/">
                                      Company History
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-347"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-347"
                                  >
                                    <a href="https://consulting.stylemixthemes.com/jakarta/company-overview/our-approach/">
                                      Our approach
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-392"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-392"
                                  >
                                    <a href="https://consulting.stylemixthemes.com/jakarta/company-overview/our-partners/">
                                      Partners
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-445"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-445"
                                  >
                                    <a href="https://consulting.stylemixthemes.com/jakarta/company-overview/our-team-list/">
                                      Our team list
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-465"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-465"
                                  >
                                    <a href="https://consulting.stylemixthemes.com/jakarta/company-overview/our-team-grid/">
                                      Our team grid
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <div className="vc_btn3-container vc_btn3-left">
                            <button className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-flat vc_btn3-block vc_btn3-icon-left vc_btn3-color-theme_style_2">
                              <i className="vc_btn3-icon fa fa-file-pdf-o"></i>{" "}
                              Company presentation
                            </button>
                          </div> */}
                          <div className="vc_row wpb_row vc_row-fluid third_bg_color vc_custom_1452056597103">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                              <div className="vc_column-inner vc_custom_1452056633692">
                                <div className="wpb_wrapper">
                                  <div className="vc_custom_heading vc_custom_1604469271077 text_align_left title_no_stripe">
                                    <div
                                      style={{
                                        fontSize: "16px",
                                        color: "#ffffff",
                                        textAlign: "left",
                                      }}
                                      className="consulting-custom-title"
                                    >
                                      How can we help you?
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  vc_custom_1604314589138">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <span
                                          style={{
                                            fontSize: "13px",
                                            lineHeight: "22px",

                                            color: "#ffffff",
                                          }}
                                        >
                                          Contact us at the Consulting WP office
                                          nearest to you or submit a business
                                          inquiry online.
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="vc_btn3-container vc_btn3-inline">
                                    <a
                                      class="vc_general vc_btn3 vc_btn3-size-sm vc_btn3-shape-rounded vc_btn3-style-flat vc_btn3-icon-left vc_btn3-color-white"
                                      href="/jakarta/contact-us/"
                                      title=""
                                    >
                                      <i class="vc_btn3-icon fa fa-phone-square"></i>{" "}
                                      contacts
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
