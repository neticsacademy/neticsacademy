import logo from "../img/logo-bck.png";

function Footer() {
  return (
    <footer
      className="text-white pt-5"
      style={{ background: "linear-gradient(135deg, #003366, #cc0000)" }}
    >
      <div className="container">
        <div className="row align-items-center mb-5">
          
          {/* Left Side - Logo & Contact Info */}
          {/* Left Side - Logo & Contact Info */}
<div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
  <img
    src={logo}
    alt="Netics Academy"
    width="150"
    className="mb-3"
    style={{ borderRadius: "5px" }}
  />

  <h6 className="fw-bold mb-3">Contact Info</h6>

  <p className="mb-2">
    <i className="fas fa-map-marker-alt me-2 text-warning"></i>
    4th Floor, Bhadra Centre, Kunnupuram Road, Ayurved College Junction,
    Trivandrum - 695001
  </p>

  <p className="mb-2">
    <i className="fas fa-envelope me-2 text-info"></i>
    neticsacademy@gmail.com
  </p>

  <p className="mb-2">
    <i className="fas fa-phone me-2 text-success"></i>
    +91 8086024700
  </p>
</div>


          {/* Right Side - Contact Form */}
          <div className="col-md-7">
            <div className="bg-white text-dark p-4 rounded shadow">
              <h5 className="fw-bold mb-3">Get in Touch</h5>
              <p className="small text-muted mb-4">
                Please fill out the form below and we’ll get back to you soon.
              </p>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-danger px-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social & Footer Note */}
        <div className="text-center">
          <div className="mb-3">
            <a href="https://facebook.com" className="text-white me-3 fs-5">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://facebook.com" className="text-white me-3 fs-5">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" className="text-white me-3 fs-5">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" className="text-white fs-5">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <small>
            © 2025 Netics Academy | All Rights Reserved |{" "}
            <a href="/privacy" className="text-white text-decoration-underline">
              Privacy Policy
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;