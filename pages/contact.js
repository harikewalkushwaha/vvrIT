import React, { Component } from "react";
import Head from "next/head";
import CommonTopBar from "../components/commons/commonTopBar";
import RightArrow from "../components/assets/svg/Home Page/Arrow.svg";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-nextjs-toast";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import dropdownData from "../data/dropdown";
import SweetAlert from "react-bootstrap-sweetalert";

import Bgimg from "../public/assets/svg/contact/contactbanner.png";

const animatedComponents = makeAnimated();

export default class contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: "",
      email_id: "",
      telephone_no: "",
      selectedOption: "",
      other: "",
      options: dropdownData,
      selectedOptions: [],
      captchaValue: null,
      //checkboxReq: false,
      Multitrue: false,
      success_msg: false,
    };
  }
  handleInput(e) {
    var id = e.target.id;
    var val = e.target.value;

    this.setState({
      [id]: val,
    });
  }

  onChange(value) {
    // console.log("Captcha value:", value)
    this.setState({
      captchaValue: value,
      Multitrue: false,
    });
  }
  // openDrawer() {
  //   var open = false;
  //   //   console.log(false)
  //   this.props.openDrawer(open);
  //   this.setState({ open: open });
  // }

  // checkbox onchange action
  // OnchangeCheckbox(e) {
  //   var id = e.target.id;
  //   var val = e.target.value;

  //   if (this.state.selectedOption === val) {
  //     // console.log("do nothing")
  //     this.setState({
  //       selectedOption: "",
  //       checkboxReq: false,
  //     });
  //   } else {
  //     this.setState({
  //       selectedOption: val,
  //       checkboxReq: false,
  //     });
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    if (
      //this.state.selectedOption !== "" &&
      this.state.selectedOptions.length !== 0
    ) {
      if (this.state.captchaValue !== null) {
        const { name, email_id, telephone_no, selectedOptions, other } =
          this.state;

        //const message = "hieeeee";

        var ser_arr = [];
        for (var i = 0; i < selectedOptions.length; i++) {
          ser_arr.push(selectedOptions[i]["name"]);
        }

        let templateParams = {
          from_name: name,
          to_name: "hello@vvrdigital.com",
          subject: "VVR Digital Request Quotes form ",
          message: "Selected Services are : " + ser_arr.toString(),
        };

        if (telephone_no !== "") {
          templateParams.phone = "Phone No  : " + telephone_no;
        }
        if (email_id !== "") {
          templateParams.email_id = "Email-Id  : " + email_id;
        }
        if (other !== "") {
          templateParams.other = "Any other query: " + other;
        }

        console.log(templateParams);
        // emailjs.send(
        // 	"service_fswmhve",
        // 	"template_4cgti1l",
        // 	templateParams,
        // 	"user_ckq0vUfeacEQ1OWkBrhui"
        // );
        this.resetForm();
      } else {
        alert("Captcha is required.");
      }
    } else {
      // if (this.state.selectedOption === "") {
      //   this.setState({
      //     checkboxReq: true,
      //   });
      // }

      if (this.state.selectedOptions.length === 0) {
        this.setState({
          Multitrue: true,
        });
      }
    }
  }

  resetForm() {
    this.setState({
      name: "",
      telephone_no: "",
      email_id: "",
      selectedOptions: [],
      other: "",
      selectedOption: "",
      captchaValue: null,
      success_msg: true,
    });

    // this.openDrawer()
  }

  handleChange = (selectedOptions) => {
    console.log(selectedOptions);
    this.setState({ selectedOptions, Multitrue: false });
  };

  modalClose() {
    this.setState({
      success_msg: false,
    });

    //this.openDrawer();
  }
  render() {
    return (
      <div>
        <Head>
          <title>VVR Digital - Contact us</title>
        </Head>

        <div className="aboutbanner" style={{ "--img": `url(${Bgimg})` }}>
          <div className="" style={{ height: "85px" }} />

          <div className="tc-l about-banner-hg align-centerdiv ">
            <div className="hero-content  center w-100 ">
              <div className="pattern-bg1 align-centerdiv "></div>
              <div className="he-max-w center ">
                <h1 className="f2 f1-l fw2 white semibold-font tc mt0 mt50 lh-title ">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
        <section className="lef-ri-pa pv5  about-section2">
          <div className="pv2">
            <section className="">
              <article className=" center ">
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className=" dtc-l v-mid wow fadeInLeft">
                    <h1 className="medium-font f1 lh-title fw7   clr-132 mt0 mb3  width-100 belowlinecontact">
                      Contact Us
                    </h1>
                    <div>
                      <h2 className="medium-font f2 lh-copy fw4   clr-132 mt0 mb3  width-100 ">
                        Looking For Simple Solutions To All Your Business Needs?
                      </h2>
                      <p>
                        We are a team of digitally driven individuals, who are
                        looking forward to working with you to enhance and
                        realign your business to the ever-changing trends of
                        digital and off-line marketing. We want to help you grow
                        and establish your businesses, and do it in a way that
                        provides the highest possible quality at competitive
                        rates.
                      </p>

                      <h4 className="medium-font clr-132 mt0 mb3  width-100 ">
                        Have questions or suggestions? We would love to hear
                        from you!
                      </h4>
                      <div className="widget widget_getintuch">
                        <ul>
                          <li>
                            <i className="fa fa-map-marker"></i> Postal Address
                            - VVR Group, VVR Digital 3-30-9, Mukojima, Sumida
                            City, Tokyo 131-0033
                          </li>
                          <li>
                            <i className="fa fa-phone"></i>+81 80 7406 0625
                          </li>
                          <li>
                            <i className="fa fa-envelope"></i>
                            info@vvrdigital.com
                          </li>
                          <li>
                            <i className="fa fa-link"></i>
                            <a
                              href="https://vvrlearning.youcanbook.me"
                              target="_blank"
                            >
                              Free Consultation
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" dtc-l tc  v-mid wow fadeInRight">
                    <img
                      src="/assets/svg/contact/contact.png"
                      className="pt5 mw-100"
                    />
                  </div>
                </div>
              </article>
            </section>
          </div>
        </section>
        <div class="contact-us-area appointment-contact-bg section-space--ptb_100">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="contact-title section-space--mb_50">
                  <h3 class="mb-20">Need a hand?</h3>
                  <p class="sub-title">
                    Reach out to the world’s most reliable IT services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-form-wrap">
                  <form
                    className="contact-form"
                    id="contact-form"
                    action="assets/php/services-mail.php"
                    method="post"
                  >
                    <div className="contact-form__two">
                      <div className="contact-input">
                        <div className="contact-inner">
                          <input
                            name="con_name"
                            type="text"
                            placeholder="Name *"
                          />
                        </div>
                        <div className="contact-inner">
                          <input
                            name="con_email"
                            type="email"
                            placeholder="Email *"
                          />
                        </div>
                      </div>
                      <div className="contact-select">
                        <div className="form-item contact-inner">
                          <span className="inquiry">
                            <select id="Visiting" name="Visiting">
                              <option disabled="" selected="">
                                Select Department to email
                              </option>
                              <option value="Your inquiry about">
                                Your inquiry about
                              </option>
                              <option value="General Information Request">
                                General Information Request
                              </option>
                              <option value="Partner Relations">
                                Partner Relations
                              </option>
                              <option value="Careers">Careers</option>
                              <option value="Software Licencing">
                                Software Licencing
                              </option>
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="contact-inner contact-message">
                        <textarea
                          name="con_message"
                          placeholder="Please describe what you need."
                        ></textarea>
                      </div>
                      <div className="comment-submit-btn">
                        <div className="measure pa2   w-100">
                          <input type="submit" className="dn" />

                          <button
                            type="submit"
                            className="f-16 fw4 tc min-211 grow medium-font no-underline white dib  pv3 pointer br3 bg-165df5 animation-request"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 ms-auto">
                <div className="contact-info-three text-left">
                  <h6 className="heading font-weight--reguler">
                    Reach out now!
                  </h6>
                  <h3 className="call-us">
                    <a href="tel:123 567990">(+00) 123 567990</a>
                  </h3>
                  <div className="text">
                    Start the collaboration with us while figuring out the best
                    solution based on your needs.
                  </div>
                  <div className="location-button mt-20">
                    <a href="#" className="location-text-button">
                      <span className="button-icon">
                        <i className="blue fas fa-map-marker-alt"></i>
                      </span>
                      <span className="button-text">View on Google map</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h2-l h6-m" />
        <div className="width-50a center  ">
          <h2 className="tc">Get in Touch, And We Can Work Together! </h2>
          <div className=" f2 fw4 regular-font pv4-l pv5-ns pv5">
            <form
              onSubmit={this.handleSubmit}
              className="pa4 br3 black-80 about-banner-bg brd-crl"
            >
              <div className="measure fl w-50-ns w-100 pa2">
                <label className="f6 b db mb2 clr-6D839D regular-font">
                  Name <span className="normal black-60"></span>
                </label>
                <input
                  id="name"
                  className="input-reset f-16 clr-132 brd-crl br4 pa-08 mb2 db w-100"
                  type="text"
                  onChange={this.handleInput}
                  value={this.state.name}
                  required
                  aria-describedby="name-desc"
                />
              </div>
              <div className="measure fl w-50-ns w-100 pa2">
                <label className="f6 b db mb2 clr-6D839D regular-font">
                  Email <span className="normal black-60"></span>
                </label>
                <input
                  id="email_id"
                  className="input-reset f-16 clr-132 brd-crl br4 pa-08 mb2 db w-100"
                  type="email"
                  onChange={this.handleInput}
                  value={this.state.email_id}
                  required
                  aria-describedby="email_id-desc"
                />
              </div>
              <div className="measure fl w-50-ns w-100 pa2">
                <label className="f6 b db mb2 clr-6D839D regular-font">
                  Mobile <span className="normal black-60"></span>
                </label>
                <input
                  id="telephone_no"
                  className="input-reset f-16 clr-132 brd-crl br4 pa-08 mb2 db w-100"
                  type="number"
                  onChange={this.handleInput}
                  value={this.state.telephone_no}
                  required
                  aria-describedby="telephone-desc"
                />
              </div>
            

              <div className="measure fl w-50-ns w-100 pa2">
                <label className="f6 b db mb2 clr-6D839D regular-font">
                  Services <span className="normal black-60"></span>
                </label>
                <div className="flex"></div>
                <Select
                  isMulti
                  name="colors"
                  options={this.state.options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  closeMenuOnSelect={false}
                  onChange={this.handleChange}
                  components={animatedComponents}
                  placeholder={<div>Please select your option(s)</div>}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                      ...theme.colors,
                      primary25: "#deebff",
                      primary: "#ccc",
                    },
                  })}
                />

                {this.state.Multitrue && (
                  <div className="fixedDropdownErrorMsg">
                    Please select an services option.
                  </div>
                )}
              </div>

              <div className="measure fl w-100 pa2  ">
                <label className="f6 b db mb2 clr-6D839D regular-font">
                  Message <span className="normal black-60"></span>
                </label>
                <textarea
                  id="other"
                  rows="4"
                  onChange={this.handleInput}
                  value={this.state.other}
                  className="f-16 clr-132 w-100 pa-08 db border-box hover-black w-100   brd-crl br4  br2 mb2"
                  aria-describedby="other-desc"
                ></textarea>
                </div>

              <div className="pa2 fl w-100">
                <ReCAPTCHA
                  sitekey="6Lcxv0EaAAAAAKCGFYA71z7MoKvjJ3kuTEjG7DqB"
                  onChange={this.onChange}
                />
              </div>

              <div className="measure pa2   w-100">
                <input type="submit" className="dn" />

                <button
                  type="submit"
                  className="f-16 fw4 tc min-211 grow medium-font no-underline white dib  pv3 pointer br3 bg-165df5 animation-request"
                >
                  Submit
                </button>
              </div>
            </form>
            {this.state.success_msg ? (
              <SweetAlert
                className="sweet-alert v-mid mv5 "
                title="Successfully Submited!"
                success
                confirmBtnBsStyle="success"
                onConfirm={this.modalClose}
                onCancel={() => this.setState({ success_msg: false })}
              >
                Thank You!
              </SweetAlert>
            ) : null}
          </div>
        </div> */}
        {/* <div className="h5-l h6-m" /> */}
        <div className=" h6-m " />
        <section className="lef-ri-pa pb5 mb5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12957.7982491441!2d139.8073929!3d35.7151607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ea0646f8dc66c0b!2sVVR%20Digital!5e0!3m2!1sen!2sin!4v1634440671810!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </section>
      </div>
    );
  }
}
