import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {

    const [card , setCard] = useState()



    const {id} = useParams();
 

    const cards = useLoaderData();
    



    useEffect( () => {

        const findCards = cards?.find( card => card.id === parseInt(id)  )

     
        setCard(findCards)
    

    } ,  [id, cards] )


    console.log(card);


    return (
        <div>
            <DetailsCard card={card}></DetailsCard>           
        </div>
    );
};

export default Details;