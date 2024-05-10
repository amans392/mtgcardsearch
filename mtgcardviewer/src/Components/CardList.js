const CardList = ({ cards, name, imageUrl, originalText }) => {

    return(
        <div className="card-list">
            
            <img alt="">{ imageUrl }</img>
            {cards.map((card) => (
                <div className="card-preview" key={ card.id }>
                <h2>{ name }</h2>
                <p>{ originalText }</p>
                <p>{card.artist }</p>
                </div>

            ))}


        </div>
    )
}

export default CardList