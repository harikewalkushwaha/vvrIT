import Head from "next/head";
import CommonTopBar from "../components/commons/commonTopBar";
import RightArrow from "../components/assets/svg/Home Page/Arrow.svg";
export default function about() {
  return (
    <div>
      <Head>
        <title>VVR Digital - Review</title>
      </Head>

      <CommonTopBar page={"Review"} />

      <section class="">
        <div className="content">
          <div class="section-area section-sp1">
            <div class="container">
              <div class="row">
                <h2 style={{ textAlign: "center" }}>
                  Google reviews (23) Rated 5 Star
                </h2>
                <div
                  class="testimony-wrap py-4"
                  style={{
                    paddingBottom: "1.5rem",
                    paddingTop: "1.5rem",
                  }}
                >
                  <div class="">
                    <p class="star">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </p>
                    <p
                      class="mb-4"
                      style={{ marginBottom: "2rem", fontSize: "1rem" }}
                    >
                      I had a pleasure learning from VVR. They are very
                      professional and will do their best to provide language
                      learning. <br></br>I will recommend and they are all kind
                      personnel. I had fun learning. <br></br>Thank you VVR
                      Learning Team. Much appreciated.
                    </p>
                    <div
                      class="d-flex align-items-center"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="workclr-jonel user-img"></div>
                      <div class="pl-3">
                        <p class="name">Jonel Alquinto</p>
                        <span class="position">Student</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="testimony-wrap py-4"
                  style={{
                    paddingBottom: "1.5rem",
                    paddingTop: "1.5rem",
                  }}
                >
                  <div class="">
                    <p class="star">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </p>
                    <p
                      class="mb-4"
                      style={{ marginBottom: "2rem", fontSize: "1rem" }}
                    >
                      I have a great experience learning Japanese with VVR
                      Learning. <br></br>The teacher is really nice and good.{" "}
                      <br></br>
                      All the best!
                    </p>
                    <div
                      class="d-flex align-items-center"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="workclr-jonel user-img"></div>
                      <div class="pl-3">
                        <p class="name">Hana</p>
                        <span class="position">Student</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "center", paddingTop: "5rem" }}>
                  <a
                    href="https://g.page/vvr-learning/review?gm"
                    target="_blank"
                    class="bookbutton"
                  >
                    View all reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
const styles = {
  colStle: {
    padding: "0px 30px 0px 6px",
  },
  noborder: {
    border: "none",
    borderRadius: "0px",
  },
  workSection: {
    paddingTop: "3rem",
  },
  Rowstyle: {
    paddingBottom: "4rem",
  },
};
