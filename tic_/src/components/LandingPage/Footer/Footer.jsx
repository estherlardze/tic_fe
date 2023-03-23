import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   
<footer className="text-center text-lg-start bg-dark text-muted p-3 ">

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Tic
          </h6>
          <p>
          Tic is messaging app that allow users to exchange messages privately with friends, family, colleagues, or anyone who has access to it 
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Privacy settings
          </h6>
          <p>
           <Link to="/privacy" className="text-reset">{"Privacy"}</Link>
          </p>
          <p>
          <Link to="/terms" className="text-reset">{"Terms & Conditions"}</Link>
          </p>
  
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
           Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Features</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>

        </div>
  
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
        </div>

      </div>
    </div>
  </section>
</footer>

  )
}

export default Footer
