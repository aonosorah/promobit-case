import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../asstes/Header'
import HeaderSearch from '../asstes/HeaderSearch'
import { GetPopular } from '../endpoints/Endpoint'
import { goDetail } from '../routes/Coodinator'
import { Img, MainBox, TextBox, PTitle, PDate} from '../style/HomeStyle'
import { PNav, NavBox } from '../style/OtherStyle'


export default function Home() {
  const img_Url = "https://image.tmdb.org/t/p/original"
    const navigate = useNavigate()
    const [ movie, setMovie ] = useState(undefined)
    const [ search, setSearch ] = useState([])
  const [ page, setPage ] = useState(1)
      useEffect ( () => {
        const movies = async () => { const result = await GetPopular(page)
          setMovie(result.results) }
          movies()
      }, [page])
      const showMovies = movie?.filter((movie) => {
        if ( search.length === 0 ) {
          return movie
        } else {
          const finding = movie.genre_ids.filter((id) => {
            return search.indexOf(id) >= 0
           })
           return finding.length > 0
        }
      })
      .map((movie) => {
        return <div key={movie.id}>
            <div onClick={() => goDetail(navigate, movie.id)}>
              <Img src={`${img_Url }${movie.poster_path}`}/></div>
            <TextBox>
              <PTitle>{movie.original_title}</PTitle>
              <PDate>{movie.release_date}</PDate>
            </TextBox>
               </div>
      })
  return (
    <div>
      <div> 
      <Header/>
      <HeaderSearch setSearch={setSearch} search={search}/>
        </div>
        <MainBox>
          {showMovies}
        </MainBox>
        <NavBox>        
            {page - 2 > 0 && (
              <PNav onClick={() => setPage(page - 2)}>
                {page - 2}
              </PNav>
            )}
            {page - 1 > 0 && (
              <PNav onClick={() => setPage(page - 1)}>
                {page - 1}
              </PNav>
            )}
            <PNav>{page}</PNav>

              <PNav onClick={() => setPage(page + 1)}>
                {page + 1}
              </PNav>
              <PNav onClick={() => setPage(page + 2)}>
                {page + 2}
              </PNav>
            </NavBox>
    </div>
  )
}
