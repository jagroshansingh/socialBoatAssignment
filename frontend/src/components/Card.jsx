import React from 'react'
import "./css/Card.css"

export const Card = ({each}) => {
    console.log(each)
  return (
    <div id='cardContainer'>
        <video controls width={'100%'} src={each.video}></video>
        <h5>{each.heading}</h5>
        <div id='tags'>
        {each.tags.map((tag)=><p>#{tag}</p>)}
        </div>
    </div>
  )
}
