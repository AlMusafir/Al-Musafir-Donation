import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards/Cards";


const Home = () => {

    const cards = useLoaderData()

    console.log(cards);


    return (
        <div className="">
            

            <Banner></Banner>

            <Cards cards={cards}></Cards>

        </div>
    );
};

export default Home;