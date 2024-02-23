import swal from "sweetalert";

const DetailsCard = ({ card }) => {
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

  const btnBg = {
    backgroundColor: primaryColor,
  };


  const handleAddDetails = () => {
    
      const addedDetailsArray = [];
    
      const detailsItems = JSON.parse(localStorage.getItem('details')  ) 
    
    
      if(!detailsItems){
          addedDetailsArray.push(card)
          localStorage.setItem('details',JSON.stringify(addedDetailsArray))
          swal("Good job!", "You successfully donated", "success");
      }

      else{


        const isExist = detailsItems.find( card => card.id === id )

        if(!isExist){
            addedDetailsArray.push( ...detailsItems  , card)
            localStorage.setItem('details',JSON.stringify(addedDetailsArray))
            swal("Good job!", "You successfully donated", "success");
        }

        else{
          swal("Error", "You have already donated", "error");
        }



        // addedDetailsArray.push( ...detailsItems  , card)
        // localStorage.setItem('details',JSON.stringify(addedDetailsArray))
        // alert('added')
      }

  }




  return (
    <div className="">
      <div className="relative inline-block">
        <img className="block" src={image} />
        <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-50 p-8">
          <button onClick={handleAddDetails} className={`text-white py-4 px-4 rounded-lg text-xl font-semibold`} style={btnBg}>
            Donate ${price}
          </button>
        </div>
      </div>

      <div className="mt-12 mb-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-2xl mt-2">{dsc}</p>
      </div>


    </div>
  );
};

export default DetailsCard;
