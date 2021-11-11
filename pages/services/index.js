import React, { useEffect, useState } from "react";
import {
  webdevelopment,
  marketing,
  uidesign,
  outsourcing,
} from "../../data/services";
import Head from "next/head";
import CommonTopBar from "../../components/commons/commonTopBar";
import Link from "next/link";
export default function Feature() {
  const [activeTab, setActiveTab] = useState("webdevelopment");
  const [showCards, setshowCards] = useState(webdevelopment);
  useEffect(() => {
    // console.log(webdevelopment);
    var d = document.getElementById("webdevelopment");
    d.className += " active-tab";
  }, []);

  const onChangeTab = (val) => {
    var d = document.getElementById(val);
    //remove class
    var active = document.getElementById(activeTab);
    const element = document.querySelector("#" + activeTab);
    if (element.classList.contains("active-tab")) {
      element.classList.remove("active-tab");
    }

    d.className += " active-tab";
    setActiveTab(val);

    switch (val) {
      case "webdevelopment":
        setshowCards(webdevelopment);
        break;
      case "file_access":
        setshowCards(marketing);
        break;
      case "collaboration":
        setshowCards(uidesign);
        break;
      case "security":
        setshowCards(outsourcing);
        break;
      default:
        setshowCards(webdevelopment);
        break;
    }
  };
  return (
    <div>
      <Head>
        <title>VVR Digital - Services</title>
      </Head>

      <CommonTopBar page={"Our Services"} />

      <section className="lef-ri-pa  no-padding-1">
        <div style={{ paddingTop: "4rem", paddingBottom: "3.2rem" }}>
          <div className="tabs-main">
            <div className="tabs  center mt4">
              <div className="tabs__menu mob-as flex mb4 br3 border-tabs bg-FAF9FE brd-crl margin-auto width-500">
                <label
                  id="webdevelopment"
                  onClick={(e) => onChangeTab(e.target.id)}
                  className=" clr-132 tabs__menu-item w-25  regular-font yo-mbo f-16px tc  pt3 pb3 bg-animate  pointer "
                >
                  Web Development
                </label>
                <label
                  id="file_access"
                  onClick={(e) => onChangeTab(e.target.id)}
                  className=" clr-132 tabs__menu-item w-25 regular-font yo-mbo f-16px  tc pt3 pb3 bg-animate  pointer"
                >
                  Marketing
                </label>
                <label
                  id="collaboration"
                  onClick={(e) => onChangeTab(e.target.id)}
                  className=" clr-132 tabs__menu-item w-25 regular-font yo-mbo f-16px  tc pt3 pb3 bg-animate mob-coll pointer"
                >
                  UI/UX Design
                </label>
                <label
                  id="security"
                  onClick={(e) => onChangeTab(e.target.id)}
                  className=" clr-132 tabs__menu-item w-25 regular-font yo-mbo f-16px  tc pt3 pb3 bg-animate  pointer"
                >
                  Out Sourcing
                </label>
              </div>

              <div className="tabs__content">
                <div>
                  <div className="tabs__content__info">
                    <ul className="cardsGrid">
                      {showCards.map((item) => (
                        <li className="cards_item" key={item.id}>
                          <article className=" center bg-EFF2FF br3  pv4  wow fadeInDown">
                            <div className="tc">
                              <Link href={`/${item.link}`}>
                                <a>
                                  <img
                                    className="pb2 height-70"
                                    src={`/assets/svg/Features/${item.icon}`}
                                    alt="next"
                                  />
                                </a>
                              </Link>
                              {/* <webdevelopmentImg1 className="pb2" /> */}
                              {/* <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" /> */}
                              <h1 className="f-20px medium-font mb2">
                                <Link href={`/${item.link}`}>{item.title}</Link>
                              </h1>
                              <p className="clr-6D839D w-70per margin-auto regular-font f-14px  lh-copy mv0">
                                <Link href={`/${item.link}`}>
                                  <a>{item.descriptio}</a>
                                </Link>
                              </p>
                            </div>
                          </article>
                        </li>
                      ))}
                    </ul>
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
