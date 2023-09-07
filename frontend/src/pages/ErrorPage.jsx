import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <>
    <h2>Error 404: Not Found</h2>
    <br />
      <Link to={'/'}>Go Home</Link>
    </>
  )
}
