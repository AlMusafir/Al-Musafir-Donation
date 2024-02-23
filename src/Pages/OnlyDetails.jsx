import { useState } from "react";
import { Link } from "react-router-dom";

const OnlyDetails = ({ card }) => {
  const [isShow, setisShow] = useState(false);

  const {
    id,
    image,
    title,
    category,
    categoryBgColor,
    cardBgColor,
    primaryColor,
    dsc,
    price,
  } = card || {};

  const cardStyle = {
    backgroundColor: cardBgColor,
  };

  const cardCategory = {
    backgroundColor: categoryBgColor,
  };

  const colorText = {
    color: primaryColor,
  };

  const btnBg = {
    backgroundColor: primaryColor,
  };

  return (
    <div className="">
      
        <div
          className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  max-w-[48rem] flex-row h-60"
          style={cardStyle}
        >
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={image}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <button className="px-2" style={cardCategory}>
              {category}
            </button>
            <h4
              className="block mt-2 mb-1 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
              style={colorText}
            >
              {title}
            </h4>
            <p className="block mb-8 font- text-xl  antialiased font-bold leading-relaxed text-gray-700 ">
              ${price}
            </p>
           

            <Link to={`/details/${id}`}>
              <button
                className="px-3 rounded-xl py-2 text-white font-bold"
                style={btnBg}
              >
                View Details
              </button>
              </Link>
              
          
          </div>
        </div>

        
      
    </div>
  );
};

export default OnlyDetails;
