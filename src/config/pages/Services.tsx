import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import RButton from "../../components/RButton";

export default function Services() {
  return (
    <>
      <div className="services-main">
        <div className="navBar bg-black">
          <NavBar />
        </div>
        <div className="bg-black p-5">
          <h1 className="text-white p-5 display-4 fw-bold text-center">
            Out Services
          </h1>
        </div>
      </div>

      {/* ========= Section 1 Start ============= */}

      <div className="sec3-main sections-padding2">
        <div className="container sections-padding2">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-6 col-md-10 col-sm-10">
              <div className="section3-heading">
                <span>------</span>
                <span className="sec-head-gap">Our Services For You</span>
                <h2 style={{ color: "#2c234d" }}>
                  PUSH YOUR LIMITS FORWARD WE OFFER TO YOU
                </h2>
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
              <div
                className="sec3Cart-main text-center my-5 mx-3"
                style={{ backgroundColor: "#f7fbff" }}
              >
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
              <div
                className="sec3Cart-main text-center my-5 mx-3"
                style={{ backgroundColor: "#f7fbff" }}
              >
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
              <div
                className="sec3Cart-main text-center my-5 mx-3"
                style={{ backgroundColor: "#f7fbff" }}
              >
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
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div
                className="sec3Cart-main text-center my-5 mx-3"
                style={{ backgroundColor: "#f7fbff" }}
              >
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
              <div
                className="sec3Cart-main text-center my-5 mx-3"
                style={{ backgroundColor: "#f7fbff" }}
              >
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
              <div
                className="sec3Cart-main text-center my-5 mx-3"
                style={{ backgroundColor: "#f7fbff" }}
              >
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

      {/* ========= Section 1 End ============= */}

      {/* ========= Footer Start ============= */}

      <Footer />

      {/* ========= Footer End ============= */}
    </>
  );
}
