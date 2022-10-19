import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetDetail } from '../endpoints/Endpoint'
import { goHome } from '../routes/Coodinator'

export default function Details() {
    const navigate = useNavigate()
    const params = useParams()
    const [ detail, setDetail ] = useState(undefined)
    useEffect (() => {
      const details = async () => { const result = await GetDetail(params.id)
        console.log(result)
        setDetail(result.results)
      }
      details()
    }, [])
  return (
    <div>
        <h1>This is the Detail</h1>
        <button onClick={() => goHome(navigate)}>Now lets try going back</button>
    
    </div>
  )
}
