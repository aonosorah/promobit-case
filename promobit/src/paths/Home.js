import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetPopular } from '../endpoints/Endpoint'
import { goDetail } from '../routes/Coodinator'


export default function Home() {
  const img_Url = "https://image.tmdb.org/t/p/original"
    const navigate = useNavigate()
    const [ movie, setMovie ] = useState(undefined)
      useEffect ( () => {
        const movies = async () => { const result = await GetPopular()
          console.log(result)
          setMovie(result.results) }
          movies()
      }, [])
      const showMovies = movie?.map((movie) => {
        return <div key={movie.id}>
            <div onClick={() => goDetail(navigate, movie.id)}>
              <img src={`${img_Url }${movie.poster_path}`}/></div>
            <div>
              <p>{movie.original_title}</p>
              <p>{movie.release_date}</p>
            </div>
               </div>
      })
  return (
    <div>
      <div> 
        <h1>This the Home</h1>
        <button onClick={() => goDetail(navigate)}>Just to Check the Detail path</button>
        </div>
        <div>
          {showMovies}
        </div>
       
    </div>
  )
}
