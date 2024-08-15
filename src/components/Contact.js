const Contact = () => {
    return (
        <section id="contact" className="contact section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Feel free to contact me at the details below.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Cebu, Philippines, 6000</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+63 945 745 2987</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <a href="mailto:decenajac@gmail.com"> <i className="bi bi-envelope flex-shrink-0"></i></a>
                <div>
                  <h3>Email Me</h3>
                  <p>decenajac@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>       

      </div>

    </section>
    );
  }
  
  export default Contact;
  