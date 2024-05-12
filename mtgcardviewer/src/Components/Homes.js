//imported useFetch component
import usefetch2 from "./UseFetch2"
//imported Cards componenet
import Cards from "./Cards";
const Homes = () => {
    //Catches API in a const URL variable
const URL = `https://api.magicthegathering.io/v1/cards`;

const data = usefetch2(URL);
console.log('data@', data)

return (
    <div className="cardshome">
        <Cards cards={data.cards} />
        {/* {data.cards &&<CardList cards={data.cards} name="All Cards" ></CardList>} */}
    </div>
);
}

export default Homes;
