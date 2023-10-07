import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Schedule() {
  return (
    <>
      <div className="schedule-main">
        <div className="navBar bg-black">
          <NavBar />
        </div>
        <div className="bg-black p-5">
          <h1 className="text-white p-5 display-4 fw-bold text-center">
            Schedule
          </h1>
        </div>

        {/* ========= Section 1 Start ============= */}

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

        {/* ========= Section 1 End ============= */}

        {/* ========= Footer Start ============= */}

        <Footer />

        {/* ========= Footer End ============= */}
      </div>
    </>
  );
}
