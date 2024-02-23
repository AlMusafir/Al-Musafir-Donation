import CardsKard from "../CardsKard/CardsKard";


const Cards = ({cards}) => {
    return (
        <div className="">
            <h1 className="text-center text-2xl">All Cards</h1>       

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-12 gap-8 ">
            {
                cards?.map( card => <CardsKard key={card.id} card={card}></CardsKard> )
            }   
            </div>

        </div>
    );
};

export default Cards;