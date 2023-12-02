import { FaStar } from "react-icons/fa";

function Card({ product, handleOnHover }) {
  return (
    <div className="group">
      <li
        className="bg-card  rounded-xl group-hover:scale-90 ease-in-out duration-300 w-[290px] p-2"
        onMouseEnter={handleOnHover}
      >
        <img
          src={product.imgURL}
          alt={product.name}
          className="drop-shadow-2xl group-hover:-rotate-[25deg] group-hover:scale-150  ease-in-out duration-300"
        />
      </li>
      <div className="group-hover:-translate-y-4 ease-in-out duration-300">
        <div className="flex items-center ">
          <FaStar className="my-5 z-10 mx-5 " color="#ff6452" size={30} />
          <p className="font-montserrat text-slate-gray text-lg">
            ({product.rating})
          </p>
        </div>
        <h4 className="font-montserrat text-lg ml-5 font-semibold ">
          {product.name}
        </h4>
        <h4 className="font-montserrat text-coral-red text-2xl ml-5 font-semibold mt-4">
          {product.price}
        </h4>
      </div>
    </div>
  );
}

export default Card;
