import React from 'react'
import { Card } from './Card'
import './css/Results.css'

export const Results = ({data}) => {
  return (
    <div id='ResultContainer'>
        {data.map((each,i)=><Card key={i} each={each}/>)}
    </div>
  )
}
