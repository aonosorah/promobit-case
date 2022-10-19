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
        setDetail(result)
      }
      const recomendations = async () => { const res = await GetRecomendations(params.id)
        console.log(res)
        setRec(res.results)
      }
      details()
      recomendations()
    }, [])
    const showRec = rec?.map((item) => {
      return <div key= {item.id}>
        <div>
          <img src={`${img_Url }${item.poster_path}`} />
          <p>{item.title}</p>
          <p>{item.release_date}</p>
        </div>
      </div>
    })
    const showDetail = detail !== undefined && <div>
    <div>
      <div><img src={`${img_Url}${detail.poster_path}`}/></div>
      <div><p>{detail.original_title}</p></div>
      <div>
        <p>Idade</p>
        <p>{detail.release_date}</p>
        <p>{detail.genre}</p>
        <p>{detail.runtime}</p>
      </div>
      <div>{detail.vote_average}</div>
      <div>
        <p>Sinopse</p>
        <p>{detail.overview}</p>
        </div>
        <div>
          <p>Elenco original</p>
          <div>Adicionar Imagens do cast</div>
        </div>
        <div>Trailer</div>
        <div>
          <p>Recomendações </p>
          {showRec}
        </div>
    </div>
       </div>
  return (
    <div>
        <h1>This is the Detail</h1>
        <button onClick={() => goHome(navigate)}>Now lets try going back</button>

       {  showDetail }
    </div>
  )
}
