import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/NavBar";
import RButton from "../../components/RButton";
import aboutImg from "../../images/sec2.png";
import aboutImg2 from "../../images/sec4.png";
import gallery1 from "../../images/gallery1.png.webp";
import gallery2 from "../../images/gallery2.png.webp";
import gallery3 from "../../images/gallery3.png.webp";
import gallery4 from "../../images/gallery4.png.webp";
import gallery5 from "../../images/gallery5.png.webp";
import ContactImg from "../../images/contact_form.png.webp";
import blogImg1 from "../../images/blog1.png.webp";
import blogImg2 from "../../images/blog2.png.webp";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import SelectField from "../../components/Select";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      {/* ========= Section 1 Start ============= */}
      <div className="main main-bg">
        <NavBar />
        <div className="container h-100 d-flex align-items-center">
          <div className="row">
            <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
              <div className="sec1-txt-main">
                <span className="text-danger line">-------------</span>
                <span className="text-danger">With Patrick Potter</span>
                <h1 className="text-white">
                  Build Perfect body Shape for good and Healthy life.
                </h1>
                <RButton name="BECOME A MEMEBER" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========= Section 1 End ============= */}

      {/* ========= Section 2 Start ============= */}

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

      {/* ========= Section 2 End ============= */}

      {/* ========= Section 3 Start ============= */}

      <div className="sec3-main sec3-bg sections-padding2">
        <div className="container sections-padding2">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-6 col-md-10 col-sm-10">
              <div className="section3-heading">
                <span>------</span>
                <span className="sec-head-gap">Our Services For You</span>
                <h2>PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-3">
              <RButton name="MORE SERVICES" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="sec3Cart-main text-center">
                <div className="cartIcon-main">
                  <i className="fa-solid fa-dumbbell cartIcon"></i>
                </div>
                <div className="cartTxt">
                  <h5>
                    <a href="/">QUALITY EQUIPMENT</a>
                  </h5>
                  <p>
                    The sea freight service has grown consider ably in recent
                    years. We spend timetting to kn.
                  </p>
                </div>
                <div className="cartBtn">
                  <a href="/">Discover More About Us </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="sec3Cart-main text-center">
                <div className="cartIcon-main">
                  <i className="fa-solid fa-heart-circle-bolt cartIcon"></i>
                </div>
                <div className="cartTxt">
                  <h5>
                    <a href="/">HEALTH CARING</a>
                  </h5>
                  <p>
                    The sea freight service has grown consider ably in recent
                    years. We spend timetting to kn.
                  </p>
                </div>
                <div className="cartBtn">
                  <a href="/">Discover More About Us </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="sec3Cart-main text-center">
                <div className="cartIcon-main">
                  <i className="fa-solid fa-clock-rotate-left cartIcon"></i>
                </div>
                <div className="cartTxt">
                  <h5>
                    <a href="/">GYM STRATEGIES</a>
                  </h5>
                  <p>
                    The sea freight service has grown consider ably in recent
                    years. We spend timetting to kn.
                  </p>
                </div>
                <div className="cartBtn">
                  <a href="/">Discover More About Us </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Section 3 End ============= */}

      {/* ========= Section 4 Start ============= */}

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

      {/* ========= Section 4 End ============= */}

      {/* ========= Section 5 Start ============= */}

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

      {/* ========= Section 5 End ============= */}

      {/* ========= Section 6 Start ============= */}

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

      {/* ========= Section 6 End ============= */}

      {/* ========= Section 7 Start ============= */}

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

      {/* ========= Section 7 End ============= */}

      {/* ========= Section 8 Start ============= */}

      <div className="sec8-main sections-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 col-md-8">
              <div className="text-center section3-heading sec6-heading">
                <span>------</span>
                <span className="sec-head-gap">OUR TIME SCHEDULE</span>
                <h2 className="display-4 w-75 mx-auto">
                  SELECT THE PERFECT TIME YOU NEED NOW
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-10">
            <div className="col-lg-11">
              <div className="days-btns mt-5">
                <div className="d-flex justify-content-between">
                  <Link to="/" className="days">
                    Saturday
                  </Link>
                  <Link to="/" className="days">
                    Sunday
                  </Link>
                  <Link to="/" className="days">
                    Monday
                  </Link>
                  <Link to="/" className="days">
                    Tuesday
                  </Link>
                  <Link to="/" className="days">
                    Wednesday
                  </Link>
                  <Link to="/" className="days">
                    Thursday
                  </Link>
                  <Link to="/" className="days">
                    Friday
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="row">
                <div className="col-12">
                  <div className="tab-wrapper">
                    <div className="box">
                      <div className="box-txt text-center">
                        <div className="caption">
                          <span>6am - 8am</span>
                          <h3>Kick Boxing</h3>
                          <p>
                            <span>by </span>
                            Jhos Kusam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="box-txt text-center">
                        <div className="caption">
                          <span>6am - 8am</span>
                          <h3>Kick Boxing</h3>
                          <p>
                            <span>by </span>
                            Jhos Kusam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="box-txt text-center">
                        <div className="caption">
                          <span>6am - 8am</span>
                          <h3>Kick Boxing</h3>
                          <p>
                            <span>by </span>
                            Jhos Kusam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="box-txt text-center">
                        <div className="caption">
                          <span>6am - 8am</span>
                          <h3>Kick Boxing</h3>
                          <p>
                            <span>by </span>
                            Jhos Kusam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="box-txt text-center">
                        <div className="caption">
                          <span>6am - 8am</span>
                          <h3>Kick Boxing</h3>
                          <p>
                            <span>by </span>
                            Jhos Kusam
                          </p>
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

      {/* ========= Section 8 End ============= */}

      {/* ========= Section 9 Start ============= */}

      <div className="sec9-main">
        <div className="row me-0">
          <div className="col-lg-6 p-0">
            <img src={ContactImg} alt="img" className="" />
          </div>
          <div className="col-lg-6 p-0">
            <div
              className="form-wrapper w-75"
              style={{ paddingBottom: "75px" }}
            >
              <div className="form-title">
                <div className="section3-heading sec6-heading">
                  <span>------</span>
                  <span className="sec-head-gap">CONTACT FORM</span>
                  <h2>FEEL FREE TO CONTACT WITH US</h2>
                </div>
              </div>
              <div className="contact-form">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-30">
                      <TextField
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-30">
                      <TextField
                        id="standard-basic"
                        label="Phone"
                        variant="standard"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-30">
                      <SelectField />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-30">
                      <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-65">
                      <TextField
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        label="Message"
                        variant="standard"
                        fullWidth
                      />
                    </div>
                  </div>
                  <div>
                    <RButton name="SEND MESSAGE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Section 9 End ============= */}

      {/* ========= Section 10 Start ============= */}

      <div className="sec10-main sections-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 col-md-8">
              <div className="text-center section3-heading sec6-heading">
                <span>------</span>
                <span className="sec-head-gap">RECENT NEWS FROM BLOG</span>
                <h2 className="display-4 w-75 mx-auto">
                  GYM TIPS NEWS FOR YOU THAT SELECTED BY US
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="mb-30">
                <div className="blog-main">
                  <div className="blog-img">
                    <img src={blogImg1} alt="image"  className="w-100"/>
                  </div>
                  <div className="blog-caption">
                    <span>------</span>
                    <span className="sec-head-gap blogCap-span">Creative Decrector</span>
                    <h3 className="w-75">
                      <a href="/">
                        Footprints in Time is perfect House in Kurashiki
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="mb-30">
                <div className="blog-main">
                  <div className="blog-img">
                    <img src={blogImg2} alt="image"  className="w-100"/>
                  </div>
                  <div className="blog-caption">
                    <span>------</span>
                    <span className="sec-head-gap blogCap-span">Creative Decrector</span>
                    <h3 className="w-75">
                      <a href="/">
                        Footprints in Time is perfect House in Kurashiki
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Section 10 End ============= */}

      {/* ========= Footer Start ============= */}

      <Footer/>

      {/* ========= Footer End ============= */}

    </>
  );
}
