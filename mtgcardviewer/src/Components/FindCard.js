
//tutorial may hold clue on getting component to work:
//https://www.youtube.com/watch?v=9wiWzu_tRB0
import { useState } from "react";

const findCard = ({result}) => {
  
    return ( 
        <div className="selected-card">
          <div key={result.id}>
            <h2>{result.name}</h2>
            <img alt="" src={result.imageUrl}></img>
            </div>
      </div>
     );
}
 
export default findCard;