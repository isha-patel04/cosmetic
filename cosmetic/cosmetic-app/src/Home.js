import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Welcome to Our Cosmetic Website</h1>
          <p className="lead">
            Explore our wide range of cosmetic products and find the perfect one for you.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://wallpaperaccess.com/thumb/695763.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Makeup</h5>
              <p className="card-text">
                Explore our wide range of makeup products, from foundation to eyeshadow.
              </p>
              {/* <Link to="/makeup" className="btn btn-primary">
                Learn More
              </Link> */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://wallpaperaccess.com/full/2317497.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Skincare</h5>
              <p className="card-text">
                Discover our range of skincare products, from moisturizers to serums.
              </p>
              {/* <Link to="/skincare" className="btn btn-primary">
                Learn More
              </Link> */}
            </div>
          </div>
        </div>
        {/* <div className="col-md-4">
          <div className="card">
            <img
              src=""
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Haircare</h5>
              <p className="card-text">
                Explore our range of haircare products, from shampoos to conditioners.
              </p>
              <Link to="/haircare" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      
    </div>
  );
}

export default Home;