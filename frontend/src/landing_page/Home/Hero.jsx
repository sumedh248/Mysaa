import "./Hero.css";

export default function Hero() {
  return (
    <>
      <section className="hero-container container">
        <div className="yellow-circle-bg"></div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4">
              <span className="fw-bold">Mysaa Art</span> <br />{" "}
              <span className="fw-bold">
                Handmade Frames, Heartmade Designs.
              </span>
            </h1>
            <div className="price-tag my-3"></div>
            <p className="text-muted mb-4" style={{ maxWidth: "450px" }}>
              Every piece is thoughtfully handcrafted to turn your memories into
              timeless art. Crafted with precision and passion, each frame is
              designed to add elegance and meaning to your space.
            </p>

            <div className="d-flex align-items-center mb-5">
              <div className="quantity-picker me-3">
                <button className="btn btn-sm"></button>
                <span className="mx-3 fw-bold">Our Collections 100+</span>
                <button className="btn btn-sm"></button>
              </div>
              <button className="btn btn-success">Shop Now</button>
            </div>

            <div className="d-flex">
              <div className="mini-card bg-card-green">
                <img src="/frame1.png" alt="Matcha" />
                <p>Matcha Fusion</p>
                <span>$28.00</span>
              </div>
              <div className="mini-card bg-card-yellow">
                <img src="/frame2.png" alt="Caramel" />
                <p>Caramel Mac</p>
                <span>$24.00</span>
              </div>
              <div className="mini-card bg-card-red">
                <img src="/frame2.png" alt="Strawberry" />
                <p>Strawberry</p>
                <span>$32.00</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center position-relative">
            <img
              src="/frame2.png"
              className="main-drink-img"
              alt="Main Drink"
            />
          </div>
        </div>
      </section>
    </>
  );
}
