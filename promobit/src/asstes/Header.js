import React from 'react'
import tmdb from './imgs/tmdb.png'
import { Headers, Img } from '../style/OtherStyle'
import { goHome } from '../routes/Coodinator'
import { useNavigate } from 'react-router-dom'


export default function Header() {
    const navigate = useNavigate()
  return (
    <Headers>
    <Img src={tmdb} onClick={() => goHome(navigate)}/> 
    </Headers>
 
  )
}
