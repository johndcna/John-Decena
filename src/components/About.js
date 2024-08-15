

const About = () => {
    return (
        <section id="about" className="about section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">
          <div className="col-md-6">

            <div className="row justify-content-between gy-4">
              <div className="col-lg-5">
                <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-7 about-info">
                <p><strong>Name: </strong> <span>John Alton Comision Decena</span></p>
                <p><strong>Profile: </strong> <span>Full Stack Developer</span></p>
                <p><strong>Email: </strong> <span>decenajac@gmail.com</span></p>
                <p><strong>Phone: </strong> <span>(+63) 945-745-2987</span></p>
              </div>
            </div>

            
          </div>

          <div className="col-md-6">
            <div className="about-me">
              <h4>About me</h4>            
              <p>
               I am an experienced software developer with 8 years in full-stack software development. Proficient in both back-end and front-end technologies. Demonstrated ability to deliver high-quality solutions through all stages of the software development lifecycle, from requirement analysis to deployment and maintenance. Established to collaborate effectively with cross-functional teams to deliver scalable solutions. I am interested in joining a start-up company or an established company with a start-up mindset, letting me provide great value to the business.
              </p>
              <p>
               I specialize in C# .NET technology, and I’m adept at both front-end and back-end development. Whether it's developing web applications or services, I take pride in writing clean, maintainable code and leveraging best practices to deliver high-quality products.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
    );
  }
  
  export default About;
  