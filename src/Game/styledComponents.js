import styled from 'styled-components'

export const MainContainer = styled.div`.
 background-color: #223a5f;
 height:100vh;
 border-radius:10px;
 dispaly:flex;
 flex-direction:column;
 justify-content:space-between;
 `
export const ScoreContainer = styled.div`.
  padding:20px;
  border:2px solid #ffffff;
  border-radius:5px;
  display:flex;
  justify-content:space-between;
   `

export const Heading = styled.h1`.
  color:#ffffff;
  font-family:'Roboto';
  font-size:10px;
   `

export const ScoreCardContainer = styled.div`.
  background-color:#ffffff;
  border-radius:5px;
  width:100px;
  padding:10px;
   `

export const ScoreText = styled.p`.
  color:#000000;
  font-family:'Roboto';
  font-size:10px;
  text-align:center;
`
export const ScoreSpan = styled.p`.
  color:#000000;
  font-family:'Roboto';
  font-size:10px;
  text-align:center;
  `

export const UnorderedList = styled.ul`.
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  width:100%;
  height:50%;
`
export const PlayAgainButton = styled.button`.
  background-color:#ffffff;
  border-radius:5px;
  width:100px;
  padding:10px;
  font-family:'Roboto';
  color:#000000;
  font-size:10px;
 `
export const PopUpContainer = styled.div`.
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  background-color:#ffffff;
  
  `

export const PopupButton = styled(PlayAgainButton)`.
  width:100px;
`

export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`.
  width:100%;
  height:100%;
 `

export const CloseLIineContainer = styled.div`.
  display:flex;
 `

export const ClosedLineButton = styled.button`.
  background-color:transparent;
  cursor:pointer;
  border:0;
  font-size:25px;

`

export const RulesContainer = styled.div`.
  display:flex;
  flex-direction:row;
  justify-content:flex-end;

    `
