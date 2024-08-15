
import React,{useEffect} from "react";
import AOS from 'aos';
 import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
        <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Personal Projects</h2>
        </div>
  
        <div className="container">
  
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
  
  
            <div className="row gy-6 isotope-container" data-aos="fade-up" data-aos-delay="200">
  
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-app">
                <img src="assets/img/portfolio/shop.png" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>React shop</h4>
                  <p>Shop applciation made by react frontend and .NET backend</p>
                  <a href="assets/img/portfolio/shop.png" title="React shop" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                </div>
              </div>
  
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-product">
                <img src="assets/img/portfolio/sheet.png" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Spreadsheet data to json export</h4>
                  <p>Exports spreadsheet data to JSON file format and updates data in real time</p>
                  <a href="assets/img/portfolio/sheet.png" title="Spreadsheet data to json export" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a> 
                </div>
              </div>
  
              
  
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Portfolio;
  