import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goDetail } from '../routes/Coodinator'

export default function Home() {
    
    const navigate = useNavigate()
  return (
    <div>
        <h1>This the Home</h1>
        <button onClick={() => goDetail(navigate)}>Just to Check the Detail path</button>
    </div>
  )
}
