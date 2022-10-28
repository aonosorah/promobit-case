import styled from "styled-components";

export const SinopseBox = styled.div`
background-color: #2D0C5E;
height: 600px;
display: flex;
@media screen and (max-width: 980px) {
  flex-direction: column;
  height: max-content;
  padding-bottom: 20px
}
`
export const Img = styled.img`
height: 574px;
width: 383px;
margin-left: 112px;
margin-top: 72px;
border-radius: 8px;
@media screen and (max-width: 980px) {
  height: 279px;
  width: 186px;
  margin: 0 auto;
  margin-top: 34px;
}
`
export const Div = styled.div`
display: flex;
flex-direction: column;
margin-left: 33px;
margin-top: 72px;
`
export const MainBox = styled.div`
display: flex;
flex-direction: column;
`
export const RecImg = styled.img`
width: 176px;
height: 264px;
border-radius: 4px;
`
export const ActImg = styled.img`
width: 175px;
height: 221.92px;
border-radius: 4px;
`
export const ActBox = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
`
export const ShowAct = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
display: flex;
flex-direction: row;
/* height: 350px; */
max-width: 100%;
gap: 24px;
padding-bottom: 26px;
margin-left: 112px;
margin-top: 32px;
overflow: auto;
::-webkit-scrollbar { 
    height: 10px;
 }
::-webkit-scrollbar-track { 
    background: #f1f1f1; 
    border-radius: 10px;
}
::-webkit-scrollbar-thumb { 
    background: #ADADAD;  
    border-radius: 10px;}
::-webkit-scrollbar-thumb:hover { background: #555; }
@media screen and (max-width: 980px) {
  margin: 0 auto;
  padding: 10px;
}
`
export const PTitle = styled.p`
font-weight: 600;
font-size: 18px;
`
export const P = styled.p`
font-weight: 400;
font-size: 16px;
color: #131313;
line-height: 24px;
margin: 0;
`
export const RecBox = styled(ShowAct)`
gap: 32px;
height: max-content;
margin-bottom: 10px;
margin-top: 24px;
`
export const PRec = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 700;
font-size: 28px;
margin-left: 112px;
@media screen and (max-width: 980px) {
  margin: 0 auto;
  padding: 10px;
}
`
export const MovieName = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
margin: 0;
`
export const PInfo = styled.p`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
display: flex;
align-items: center;
color: #FFFFFF;
margin: 0;
`
export const PSinopse = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
`
export const SinopBox = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
max-width: 696px;
width: 90%;
color: #DDDDDD;
font-weight: 400;
font-size: 16px;
line-height: 24px;
`
export const DivBox = styled.div`
margin-top: 28px;
`
export const Iframe = styled.iframe`
max-width: 907px;
width: 90vw;
height: 50vw;
max-height: 510px;
margin-left: 112px;
@media screen and (max-width: 980px) {
  margin: 0 auto;
  padding: 10px;
}
`
export const CrewBox = styled.div`
display: flex;
flex-direction: column;
width: 174px;
`
export const CrewName = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #FFFFFF; 
margin: 0;
`
export const CrewJob = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
margin: 0;

`
export const StarsText = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
width: 110px;
color: #FFFFFF;
`
export const VoteBox = styled.div`
display: flex;
align-items: center;
gap: 11px;
`

export const SVG= styled.svg`
  border-radius: 100px;
  height: 3.75rem;
  position: absolute;
  width: 3.75rem;
  rotate: -80deg;
`

export const Circle = styled.circle`
  fill: none;
  stroke: #14ff00;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: 200;
  stroke-dashoffset: ${({ progress }) => 200 - (progress - 21)};
`
export const PercentVote = styled.div`
width: 60px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 38px;
color: #14FF00;
background: rgba(255, 255, 255, 0.1);
border-radius: 100%;
`
export const ShowCrews = styled.div`
display: flex;
flex-wrap: wrap;
gap: 33px;
height: max-content;
@media screen and (max-width: 980px) {
 gap: 15px;
}
`