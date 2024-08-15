const Resume = () => {
    return (
        <section id="resume" className="resume section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Employment History</h2>
      </div>

      <div className="container">

        <div className="row">        

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>.Net Developer</h4>
              <h5>2021 - Present</h5>
              <p><em>GHD Ltd Pty., Cebu, Philippines</em></p>
              <ul>
                <li>Build .NET web application to help the municipal government to support police public services. Using a multitenant approach to allow easy and fast onboarding of new clients</li>
                <li>Refactor and enhance source code to improve code readability and reduced complexity </li>
                <li>Work on Azure Data Factory to provide multiple client data migration</li>
                <li>Communicate effectively with team lead, project management and stakeholders within the project</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>2018-2021</h5>
              <p><em>Accenture, Cebu, Philippines</em></p>
              <ul>
                <li>Collaborated with cross-functional development team members to analyze potential system solutions based on evolving client requirements</li>
                <li>Develop and migrate ColdFusion system to .NET single page web application and reduced the number of  bugs reported in the existing application</li>
                <li>Maintain and recommend software improvements to clients to ensure robust functionality and decrease the loading and retrieving of data</li>
                <li>Mentored other junior developers on the technically of the system</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Associate Technical Specialist</h4>
              <h5>2018-2021</h5>
              <p><em>Alliance Sofware Inc., Cebu, Philippines</em></p>
              <ul>
                <li>Responsible for planning, designing, development, testing and deployment and support various web application</li>
                <li>Migrated old system to single page application on .NET framework and develop front-end using Angular </li>
                <li>Reviewed query performance and optimize code that helps resolve critical issues reported by the client</li>
                <li>Created high-level and low-level design documents</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

    </section>
    );
  }
  
  export default Resume;
  