import NavBar from "../../components/NavBar";
import { TextField } from "@mui/material";
import SelectField from "../../components/Select";
import Footer from "../../components/Footer";
import ContactImg from "../../images/contact_form.png.webp";
import RButton from "../../components/RButton";

export default function Contact() {
  return (
    <>
      <div className="contact-main">
        <div className="container"></div>
        <div className="navBar bg-black">
          <NavBar />
        </div>
        <div className="bg-black p-5">
          <h1 className="text-white p-5 display-4 fw-bold text-center">
            Contact
          </h1>
        </div>

        {/* ========= Section 1 Start ============= */}

        <div className="sec9-main my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={ContactImg} alt="img"/>
              </div>
              <div className="col-lg-6">
                <div
                  className="form-wrapper"
                  style={{ paddingBottom: "79px" }}
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
        </div>

        {/* ========= Section 1 End ============= */}

        {/* ========= Footer Start ============= */}

        <Footer />

        {/* ========= Footer End ============= */}
      </div>
    </>
  );
}
