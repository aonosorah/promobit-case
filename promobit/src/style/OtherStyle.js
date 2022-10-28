import styled from 'styled-components';

export const Headers = styled.div`
background-color: #5C16C5;
width: 100%;
height: 56px;
display: flex;
align-items: center;
`
export const Img = styled.img`
height: 24px;
margin-left: 112px;
`
export const SearchBox = styled.div`
background-color: #2D0C5E;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
width: 100%;
height: 449px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
export const H1 = styled.h1`
font-weight: 700;
font-size: 46px;
line-height: 56px;
color: #FFFFFF;
align-items: center;
margin-left: 300px;
margin-right: 300px;
align-content: center;
text-align: center;

`
export const P = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 700;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
`
export const ButtonBox = styled.div`
margin-left: 202px;
margin-right: 202px;
background-color: #2D0C5E;
border: none;
text-align: center;
`
export const Button = styled.button`
margin-right: 8px;
margin-bottom: 8px;
border: none;
border-radius: 4px;
width: auto;
height: 28px;
font-size: 16px;
font-weight: 700;
color: ${({fontColor}) => fontColor};
background-color: ${({color}) => color};
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const PNav = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #5C16C5;
cursor: pointer;
`
export const NavBox = styled.div`
display: flex;
width: auto;
justify-content: center;
gap: 40px;
`