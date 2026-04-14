import Productcard from "./productcard";

export default function Products() {
  return (
    <>
    <h2 className="text-center mt-5 mb-5">Our Products</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
        <div className="col">
          <Productcard />
        </div>
        <div className="col">
          <Productcard />
        </div>
        <div className="col">
          <Productcard />
        </div>
        <div className="col">
          <Productcard />
        </div>
        <div className="col">
          <Productcard />
        </div>
        <div className="col">
          <Productcard />
        </div>
      </div>
    </>
  );
}
