import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import gallery1 from "../../images/gallery1.png.webp";
import gallery2 from "../../images/gallery2.png.webp";
import gallery3 from "../../images/gallery3.png.webp";
import gallery4 from "../../images/gallery4.png.webp";
import gallery5 from "../../images/gallery5.png.webp";

export default function OurGallery() {
  return (
    <>
      <div className="galery-main">
        <div className="navBar bg-black">
          <NavBar />
        </div>
        <div className="bg-black p-5 mb-4">
          <h1 className="text-white p-5 display-4 fw-bold text-center">
            Our Gallery
          </h1>
        </div>

        {/* ========= Section 1 Start ============= */}

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

        {/* ========= Section 1 End ============= */}

        {/* ========= Footer Start ============= */}

        <Footer />

        {/* ========= Footer End ============= */}
      </div>
    </>
  );
}
