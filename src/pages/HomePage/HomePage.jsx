import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      HomePage
        <br/>
        <Link to= {"/Posts"} >Posts</Link>
        
      </div>
  )
}
