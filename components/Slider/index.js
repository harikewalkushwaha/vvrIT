import React, { Component, useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import RightArrow from "../assets/svg/Home Page/Arrow.svg";
import emailjs from "emailjs-com";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import dropdownData from "../../data/dropdown";
import { toast, ToastContainer } from "react-nextjs-toast";
const animatedComponents = makeAnimated();

const BtnClose = styled.div`
  background: url(assets/svg/btn-close.svg);
`;
export default class SlideDrawer extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    //this.OnchangeCheckbox = this.OnchangeCheckbox.bind(this);
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
  openDrawer() {
    var open = false;
    //   console.log(false)
    this.props.openDrawer(open);
    this.setState({ open: open });
  }

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
        toast.notify("Form Successfully submitted", {
          duration: 5,
          type: "success",
        });

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
      <div
        className={
          this.props.show == true
            ? "side-drawer open"
            : this.props.show == false
            ? "side-drawer close"
            : "side-drawer dn"
        }
      >
        {/* <ToastContainer position={"top"} /> */}

        <BtnClose onClick={this.openDrawer} className="CTAForms__btnClose" />
        <section className="CTAFormMasthead__mainWrapper">
          <section className="CTAFormMasthead__contentWrapper">
            <h1 className="CTAFormMasthead__header semibold-font margin-auto-l f2 clr-132 mob-tilte our-fe ma0">
              Contact us
            </h1>

            <p className="CTAFormMasthead__legend clr-red medium-font f5">
              *Mandatory fields
            </p>
          </section>
        </section>

        <section className="CTAFormPages__mainWrapper clearfix">
          <section className="AnimCTAForms--onBoardFade regular-font ">
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
              {/* <div className="measure fl w-50-ns w-100 pa2">
              <label className="f6 b db mb2 clr-6D839D regular-font">
                storage <span className="normal black-60"></span>
              </label>
              <div className="flex"></div>
              <input
                id="storage"
                value={state.storage}
                onChange={(e) => handleInputChange(e)}
                className="input-reset fl f-16 clr-132 brd-crl br4 pa-08  mb2 db "
                type="number"
                required
                style={{ width: "78%" }}
                aria-describedby="mobile-desc"
              />
              <span>
                <select
                  style={{ fontSize: "14.4px", padding: "0.94em" }}
                  id="storageUnit"
                  value={state.storageUnit}
                  onChange={(e) => handleInputChange(e)}
                  className=" clr-132 brd-crl fr br4 mb2 db  w-20 bg-white"
                  name=""
                >
                  <option value="GB">GB</option>
                  <option value="TB">TB</option>
                  <option value="PB">PB</option>
                </select>
              </span>
            </div> */}

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
                {/* <input id="storage" className="input-reset brd-crl br4 pa1 mb2 db w-100" type="text" aria-describedby="storage-desc"/> */}
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
          </section>
        </section>
      </div>
    );
  }
}
