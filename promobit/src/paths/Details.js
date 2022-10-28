import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../asstes/Header'
import { GetActors, GetDetail, GetRecomendations, GetAge, GetTrailer } from '../endpoints/Endpoint'
import { SinopseBox, Img, MainBox, ShowCrews, CrewBox, SVG, Circle, PercentVote, VoteBox, StarsText, CrewJob, P, CrewName, DivBox, Iframe, SinopBox, PSinopse, MovieName, PInfo, PRec,  Div, RecBox, RecImg, ActImg, ActBox, ShowAct, PTitle } from '../style/DetailStyle'

export default function Details() {
  const img_Url = "https://image.tmdb.org/t/p/original"
    const params = useParams()
    const [ detail, setDetail ] = useState(undefined)
    const [ rec, setRec ] = useState(undefined)
    const [ actor, setActor ] = useState(undefined)
    const [ age, setAge ] = useState(undefined)
    const [ trailer, setTrailer ] = useState(undefined)
    const [ crew, setCrew ] = useState(undefined)

    useEffect (() => {
      const details = async () => { const result = await GetDetail(params.id)
        setDetail(result)
      }
      const recomendations = async () => { const res = await GetRecomendations(params.id)
        setRec(res.results)
      }
      const actors = async () => { const rest = await GetActors(params.id)
        const team = ["director", "characters", "screenplay"]
        const teamMembers = rest.crew?.filter((crew) => {
          return team.indexOf(crew.job.toLowerCase()) >= 0
        })
        setCrew(teamMembers)
        setActor(rest.cast)
      }
      const getAge = async () => { const res = await GetAge(params.id)
        const restrict = res.results?.filter((item) => {
          return item.iso_3166_1 === "BR"
        })
        if ( restrict.length === 0 ) {
          setAge("Inválido") 
        } else {
          if ( restrict[0].release_dates[0].certification ) {
          setAge(`${restrict[0].release_dates[0].certification} anos`) 
          } else {
          setAge("Livre") 
          }
        }
      }
      const getTrailer = async () => { const res = await GetTrailer(params.id)
        setTrailer(res)
      }
      details()
      recomendations()
      actors()
      getAge()
      getTrailer()
    }, [])
    const showTrailer =  trailer?.results.length > 0 && <Iframe width="560" height="315"
    src={`https://www.youtube.com/embed/${trailer?.results[0].key}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen /> 
    const showCrew = crew?.map((crew, index) => {
      return <CrewBox key={index}>
              <CrewName>{crew.name}</CrewName>
              <CrewJob>{crew.job}</CrewJob>
             </CrewBox>
    })
    const percent = ( detail?.vote_average * 10 ).toFixed(0)
    const showActors = actor?.map((actor) => {
      return <ActBox key={actor.id}>
        <ActImg src={`${img_Url}${actor.profile_path}`}/>
        <PTitle>{actor.name}</PTitle>
        <P>{actor.character}</P>
      </ActBox>
    })
    const showRec = rec?.map((item) => {
      return <div key= {item.id}>
        <div> <RecImg src={`${img_Url }${item.poster_path}`}/>
          <PTitle>{item.title}</PTitle> 
          <p>{item.release_date}</p> </div>
      </div>
    })
    const genre = detail?.genres?.map((genre) => {
      return genre.name
    }).join(", ")
    const showDetail = detail !== undefined && <MainBox>
    <SinopseBox>
      { detail?.poster_path && <Img src={`${img_Url}${detail.poster_path}`}/> }
      <Div>   
        <div><MovieName >{detail.original_title}</MovieName ></div>
      <div>
        <PInfo> {age} • {detail.release_date} • {genre} • {detail.runtime}m. </PInfo>
      </div>
      <VoteBox>
      <PercentVote>
           <SVG> <Circle r="29" cx="30" cy="30" progress={ percent * 2 }/> </SVG> 
        { `${percent}%` } 
      </PercentVote>
        <StarsText>Avalização dos usuários</StarsText>
      </VoteBox>
      <SinopBox>
        <PSinopse>Sinopse</PSinopse>
        <p>{detail.overview}</p>
      </SinopBox>
        <ShowCrews>
            { showCrew }
        </ShowCrews>
        </Div>
    </SinopseBox>
    <DivBox>
          <PRec>Elenco original</PRec>
          <ShowAct>{showActors}</ShowAct>
    </DivBox>
        <div>
          <PRec>Trailer</PRec>
          { showTrailer }
        </div>
        <div>
          <PRec>Recomendações </PRec>
          <RecBox>{showRec}</RecBox>
        </div>
       </MainBox>
  return (
    <div>
        <Header/>
       

       {  showDetail }
    </div>
  )
}
