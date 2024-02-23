import { useEffect } from "react";
import { useState } from "react";
import OnlyDetails from "./OnlyDetails";

const DonateNow = ({card}) => {

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



  const [isShow , setisShow] = useState(false)


  const [details, setDetails] = useState([]);

  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    const detailsItems = JSON.parse(localStorage.getItem("details"));

    if (detailsItems) {
      setDetails(detailsItems);
    } else {
      // swal("Sorry", "No Data Found", "error");
      setNoFound("404 No Data Found!!");
    }
  }, []);

  console.log(details);

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center text-4xl bg-red-300">
          {noFound}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7">
            {
              isShow ? 
                details.map( (detail , idx) => <OnlyDetails 
                
                card={detail}
                key={idx}
                
                ></OnlyDetails> )

                :

                
                details.slice(0,2).map( detail => <OnlyDetails 
                
                card={detail}
                key={detail.id}
                
                ></OnlyDetails> )
            
            
            }
        </div>
       
      )}

<div className="flex justify-center mt-3 mb-12">
  
{
  details.length > 2 && <button onClick={ () => setisShow(!isShow)  } className= " bg-green-400 px-4 rounded-lg text-lg py-2  hover:bg-emerald-500 hover:text-white font-medium">
  
  {
    isShow ? 'See less' : 'See more...'
  }

</button>

}
</div>


    </div>
  );
};

export default DonateNow;
