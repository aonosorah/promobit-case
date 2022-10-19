import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetDetail, GetRecomendations } from '../endpoints/Endpoint'
import { goHome } from '../routes/Coodinator'

export default function Details() {
  const img_Url = "https://image.tmdb.org/t/p/original"
    const navigate = useNavigate()
    const params = useParams()
    const [ detail, setDetail ] = useState(undefined)
    const [ rec, setRec ] = useState(undefined)

    useEffect (() => {
      const details = async () => { const result = await GetDetail(params.id)
        console.log(result)
        setDetail(result.results)
      }
      const recomendations = async () => { const res = await GetRecomendations(params.id)
        console.log(res)
        setRec(res.results)
      }
      details()
      recomendations()
    }, [])
    const showDetails = detail?.map((movie) => {
      return <div>
          <div>
            <div><img src={`${img_Url}${movie.backdrop_path}`}/></div>
            <div><p>{movie.original_title}</p></div>
            <div>
              <p>Idade</p>
              <p>{movie.release_date}</p>
              <p>{movie.genre}</p>
              <p>{movie.runtime}</p>
            </div>
            <div>{movie.vote_average}</div>
            <div>
              <p>Sinopse</p>
              <p>{movie.overview}</p>
              </div>
              <div>
                <p>Elenco original</p>
                <div>Adicionar Imagens do cast</div>
              </div>
              <div>Trailer</div>
              <div>
                <p>Recomendações </p>

              </div>
          </div>
             </div>
    })
  return (
    <div>
        <h1>This is the Detail</h1>
        <button onClick={() => goHome(navigate)}>Now lets try going back</button>
    
    </div>
  )
}
