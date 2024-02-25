import React, { useState } from 'react'
import { LayoutGroup} from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
    const [expanded, setExpanded] = useState(false)


  return (
    <LayoutGroup>
        {expanded ?  (
            'Expanded'
        ):
        <CompactCard param = {props}/>}
    </LayoutGroup>
    
  )
}

//CompactCard

function CompactCard({param}){
    const Icon = param.png;
    // console.log(param.png);
    return ( 
    
    <div className="compactCard">
        <div className="radialBar">
            Chart
        </div>
        <div className="detail">
            
        <FontAwesomeIcon icon={param.icon} />
            <span>${param.value}</span>
            <span>Last 24 hours</span>
        </div>
    </div>
    )
}

export default Card