import Card from "../components/Card";
import { products } from "../constants";

function PopularProduct() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">
        Our <span className="text-coral-red">Popular</span> Products
      </h1>

      <p className="w-[550px] font-montserrat text-gray-500 text-lg  py-8">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <ul className="flex gap-12">
        {products?.map((product) => (
          <Card key={product.imgURL} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default PopularProduct;
