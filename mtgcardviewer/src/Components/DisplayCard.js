import React,  {useState} from 'react'
import FindCard from './Findcard'
const DisplayCard = ({results}) => {

    return  (     
        <div className="displayed-cards">
            {
                results.map((result, id) => {
                    return (
                    <FindCard result={result} key={id}></FindCard>
                    )
                })
            }
        </div>
    )
    
}

export default DisplayCard;