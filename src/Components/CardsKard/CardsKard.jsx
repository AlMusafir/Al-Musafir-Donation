import { Link } from "react-router-dom";

const CardsKard = ({ card }) => {
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
    backgroundColor: cardBgColor
  }


  const cardCategory = {
      backgroundColor: categoryBgColor
  }


  const colorText = {
    color: primaryColor
  }


  return (
    <div >
      <Link to={`/details/${id}`}>
      <div  className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl " style={cardStyle}>
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl ">
          <img
            src={image}
            alt="card-image"
            className="object-cover w-full "
          />
        </div>
        <div className="p-6">
          <div className="">


           <button className="px-2 rounded-md " style={cardCategory}>{category}</button>
          
            <p className="block font-sans text-xl antialiased font-bold  leading-relaxed " style={colorText}>
              {title}
            </p>
            
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CardsKard;
