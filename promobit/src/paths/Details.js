import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goHome } from '../routes/Coodinator'

export default function Details() {

    const navigate = useNavigate()

  return (
    <div>
        <h1>This is the Detail</h1>
        <button onClick={() => goHome(navigate)}>Now lets try going back</button>
    </div>
  )
}
