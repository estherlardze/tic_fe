import React from 'react';

const Error = () => {
  return (
        <div className="d-flex align-items-center justify-content-center vh-100 tic__error-page">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <a href="index.html" className="btn btn-primary">Back to Home</a>
            </div>
        </div>
  
  )
}

export default Error
