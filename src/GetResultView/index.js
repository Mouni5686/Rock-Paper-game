import {
  ShowResultCotainer,
  ResultTextImageContainer,
  ResultText,
  ResultImage,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GetResultView = props => {
  const {mychoice, opponentchoice, resultMesage, playAgain} = props
  const {id, imageUrl} = opponentchoice

  const onClickButton = () => {
    playAgain()
  }

  return (
    <ShowResultCotainer>
      <ResultTextImageContainer>
        <ResultText>YOU</ResultText>
        <ResultImage src={mychoice[1]} alt="your choice" />
      </ResultTextImageContainer>
      <ResultTextImageContainer>
        <ResultText>OPPONENT</ResultText>
        <ResultImage src={imageUrl} alt="opponent choice" />
      </ResultTextImageContainer>
      <ResultText>{resultMesage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultCotainer>
  )
}

export default GetResultView
