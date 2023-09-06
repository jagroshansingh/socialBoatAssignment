import React from 'react'
import { Header } from '../components/Header'
import { Results } from '../components/Results'

export const HomePage = () => {
    const [data,setData]=React.useState([])
  return (
    <div>
        <Header setData={setData}/>
        <Results data={data}/>
    </div>
  )
}
