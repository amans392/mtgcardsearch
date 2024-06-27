//Try selectable options from link: https://www.youtube.com/watch?v=GomD1Udf4WQ
//also see https://www.youtube.com/watch?v=3u_ulMvTYZI
//also https://www.youtube.com/watch?v=1cYnbYVAi_E

import FindCard from './FindCard'

const DisplayCard = ({results, activeCard}) => {
    if (activeCard) {
      return (
        <>
          <h2>Card Name: {activeCard.name}</h2>
          <img alt={activeCard.name} src={activeCard.imageUrl}></img>
        </>
      )
    } else {
      return <p>No card selected...</p>
    }
    // return  (     
    //     <div className="displayed-cards">
    //         {
    //             results.map((result, id, activeCard) => {
    //                 return (
    //                 <FindCard result={result} key={id} activeCard={activeCard} ></FindCard>
    
    //                 )
    //             })
    //         }
    //     </div>
    // )
    
}

export default DisplayCard;