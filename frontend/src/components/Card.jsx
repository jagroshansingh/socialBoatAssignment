import React from 'react'

export const Card = (each) => {
    console.log(each.each)
  return (
    <div>
        <p>{each.each.heading}</p>
        <video width={'100%'} src={each.each.video}></video>
    </div>
  )
}
