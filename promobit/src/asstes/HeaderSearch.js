import React, { useEffect, useState } from 'react'
import { GetGenre } from '../endpoints/Endpoint'
import { SearchBox, H1, P, ButtonBox, Button } from '../style/OtherStyle'

export default function HeaderSearch({setSearch, search}) {
    const [ genre, setGenre ] = useState(undefined)

    useEffect ( () => {
        const genres = async () => { const res = await GetGenre()
            setGenre(res.data.genres)
        }
        genres()
    },[])
    const searched = (id) => {
          if ( search.indexOf(id) >= 0 ) {
      const newGenre = search.filter((genre) => {
        return genre !== id
      })
      setSearch(newGenre)
    } else {
      setSearch([...search, id])
    }
    }
    const showGenre = genre?.map((item) => {
        return <Button onClick={() => searched(item.id)} key={item.id} color={search.indexOf(item.id) >= 0 ? "#D18000" : "#FFFFFF"}
        fontColor={search.indexOf(item.id) >= 0 ? "#ffffff" : "#323232"}>
                  {item.name}
                </Button>
    })
  return (
    <SearchBox>
        <H1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</H1>
        <P>FILTRE POR:</P>
       <ButtonBox>{showGenre}</ButtonBox> 
    </SearchBox>
  )
}
