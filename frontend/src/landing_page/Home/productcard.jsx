import "./productcard.css";
import { useId } from "react";

export default function Productcard() {
  const carouselId = useId();

  return (
    <>
      <div className="container mt-3">
        <div className="card">
          <div
            id={carouselId}
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to="2"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="product image"
                  className="d-block card-img-top img-fluid mx-auto d-block img-rounded"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="product image"
                  className="d-block card-img-top img-fluid mx-auto d-block img-rounded"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="product image"
                  className="d-block card-img-top img-fluid mx-auto d-block img-rounded"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="card-body ">
            <p className="price">
              <h4>£60.99</h4>
            </p>
            <h4 className="card-title">Product's Description</h4>
            <p className="card-text">Some example text. Some example text.</p>
            <p>
              <a href="#" id="addToCard" className="btn btn-success">
                Add To Cart
              </a>{" "}
              &nbsp;
              <a href="#" id="addToCard" className="btn btn-success">
                Buy Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
