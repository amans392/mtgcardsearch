//Try selectable options from link: https://www.youtube.com/watch?v=GomD1Udf4WQ
//also see https://www.youtube.com/watch?v=3u_ulMvTYZI
//also https://www.youtube.com/watch?v=1cYnbYVAi_E

import FindCard from './Findcard'
const DisplayCard = ({results, activeCard}) => {

    return  (     
        <div className="displayed-cards">
            {
                results.map((result, id, activeCard) => {
                    return (
                    <FindCard result={result} key={id} activeCard={activeCard} ></FindCard>
    
                    )
                })
            }
        </div>
    )
    
}

export default DisplayCard;