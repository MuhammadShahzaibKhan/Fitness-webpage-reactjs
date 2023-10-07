import NavBar from "../../components/NavBar";
import RButton from "../../components/RButton";
import aboutImg from "../../images/sec2.png";
import aboutImg2 from "../../images/sec4.png";
import gallery1 from "../../images/gallery1.png.webp";
import gallery2 from "../../images/gallery2.png.webp";
import gallery3 from "../../images/gallery3.png.webp";
import gallery4 from "../../images/gallery4.png.webp";
import gallery5 from "../../images/gallery5.png.webp";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <div className="About-main">
        <div className="navBar bg-black">
          <NavBar />
        </div>
        <div className="bg-black p-5">
          <h1 className="text-white p-5 display-4 fw-bold text-center">ABOUT US</h1>
        </div>
      </div>

      {/* ========= Section 1 Start ============= */}

      <div className="sec2-main sections-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="sec2-img">
                <img src={aboutImg} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-caption">
                <div className="about-heading">
                  <span className="text-danger line">--------</span>
                  <span className="text-danger sec-head-gap">
                    About Our Gym
                  </span>
                  <h1>
                    SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE
                    TIME!
                  </h1>
                </div>
                <p className="para-top">
                  Brook presents your services with flexible, convenient and
                  cdpose layouts. You can select your favorite layouts &
                  elements for cular ts with unlimited ustomization
                  possibilities. Pixel-perfect replication of the designers is
                  intended.
                </p>
                <p className="para-btm">
                  Brook presents your services with flexible, convefnient and
                  chient anipurpose layouts. You can select your favorite
                  layouts.
                </p>
                <RButton name="BECOME A MEMEBER" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Section 1 End ============= */}

      {/* ========= Section 2 Start ============= */}

      <div className="sec5-main">
        <div className="container-fluid p-0 sec5-overflow">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec5-img mb-30">
                <img src={gallery1} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="sec5-img mb-30">
                    <img src={gallery2} alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="sec5-img mb-30">
                    <img src={gallery3} alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="sec5-img mb-30">
                    <img src={gallery4} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="sec5-img mb-30">
                    <img src={gallery5} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Section 2 End ============= */}

      {/* ========= Section 3 Start ============= */}

      <div className="sec4-main sections-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="sec2-img">
                <img src={aboutImg2} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-caption">
                <div className="about-heading">
                  <span className="text-danger line">--------</span>
                  <span className="text-danger sec-head-gap">
                    CLIENT FEEDBACK
                  </span>
                  <h1>WHAT OUR CLIENT THIK ABOUT OUR GYM</h1>
                </div>
                <p className="para-top">
                  Brook presents your services with flexible, convenient and
                  cdpose layouts. You can select your favorite layouts &amp;
                  elements for cular ts with unlimited ustomization
                  possibilities. Pixel-perfect replica;ition of thei designers
                  ijtls intended csents your se.
                </p>
                <p className="para-btm sec4-txt">
                  JOHN SMITH <span className="sec4Span">Gym Trainer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Section 3 End ============= */}

      {/* ========= Section 4 Start ============= */}

      <div className="sec60-main sections-padding">
        <div className="container sections-padding2">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-6 col-md-10 col-sm-10">
              <div className="section3-heading sec6-heading">
                <span>------</span>
                <span className="sec-head-gap">OUR TEAM MANAGERS</span>
                <h2>OUR MOST EXPERIENCED TRAINERS</h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-3">
              <RButton name="MORE SERVICES" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-30">
                <img
                  src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png.webp"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-30">
                <img
                  src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team2.png.webp"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-30">
                <img
                  src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team3.png.webp"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Section 4 End ============= */}

      {/* ========= Section 5 Start ============= */}

      <div className="sec7-main">
        <div className="container sections-padding2">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-10 col-sm-10">
              <div className="sec7-txt">
                <h1>April membership offer available Now</h1>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-3">
              <RButton name="MORE SERVICES" />
            </div>
          </div>
        </div>
      </div>

      {/* ========= Section 5 End ============= */}

      {/* ========= Footer Start ============= */}

      <Footer />

      {/* ========= Footer End ============= */}
    </>
  );
}
