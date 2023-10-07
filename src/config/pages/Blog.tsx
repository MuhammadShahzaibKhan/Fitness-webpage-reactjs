import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import blogImg1 from "../../images/blog1.png.webp";
import blogImg2 from "../../images/blog2.png.webp";

export default function Blog() {
  return (
    <>
      <div className="blog-main">
        <div className="navBar bg-black">
          <NavBar />
        </div>
        <div className="bg-black p-5">
          <h1 className="text-white p-5 display-4 fw-bold text-center">Blog</h1>
        </div>

        {/* ========= Section 1 Start ============= */}

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
                      <img src={blogImg1} alt="image" className="w-100" />
                    </div>
                    <div className="blog-caption">
                      <span>------</span>
                      <span className="sec-head-gap blogCap-span">
                        Creative Decrector
                      </span>
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
                      <img src={blogImg2} alt="image" className="w-100" />
                    </div>
                    <div className="blog-caption">
                      <span>------</span>
                      <span className="sec-head-gap blogCap-span">
                        Creative Decrector
                      </span>
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

        {/* ========= Section 1 End ============= */}

        {/* ========= Footer Start ============= */}

        <Footer />

        {/* ========= Footer End ============= */}
      </div>
    </>
  );
}
