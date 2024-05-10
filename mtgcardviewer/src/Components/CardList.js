const CardList = ({ cards,  imageUrl, originalText }) => {

    return(
        <div className="card-list">
            
            <img alt="">{ imageUrl }</img>
            {data.cards.map((card) => (
                <div className="card-preview" key={ card.id }>
                <h2>{ card.name }</h2>
                <p>{ originalText }</p>
                <p>{card.artist }</p>
                </div>

            ))}


        </div>
    )
}

export default CardList