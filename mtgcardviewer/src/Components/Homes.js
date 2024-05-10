//imported useFetch component
import CardList from "./Cardlist";
import useFetch from "./UseFetch";
//imported CardList componenet

const Homes = () => {
    //Catches API in a const URL variable
const URL = `https://api.magicthegathering.io/v1/cards`;

const { data: cards } = useFetch(URL)

return (
    <div className="cardshome">
        {cards &&<CardList cards={cards} name="All Cards" ></CardList>}
    </div>
);


}

export default Homes;
