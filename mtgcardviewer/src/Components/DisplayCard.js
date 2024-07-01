import './DisplayCard.css'

const DisplayCard = ({activeCard}, isLoading) => {
    if (activeCard)  {
        return (
            
            <div className='displayed-card'>
 
                     <h2>Name: {activeCard.name}</h2>
                      <img alt={activeCard.name} 
                      src={activeCard.imageUrl}></img>
                      <p className='text-container'>

                       
                        {activeCard.originalType} 
                        <br></br>
                        {activeCard.text}</p>
  
            
            </div>
        )
    } else {
        return  <p>No Card Selected...</p>
    }

}
    export default DisplayCard;