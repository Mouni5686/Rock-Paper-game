import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Button from '../Button'
import GetResultView from '../GetResultView'

import {
  MainContainer,
  ScoreContainer,
  Heading,
  ScoreCardContainer,
  ScoreText,
  ScoreSpan,
  UnorderedList,
  PopUpContainer,
  PopupButton,
  RulesImageContainer,
  CloseLIineContainer,
  RulesImage,
  ClosedLineButton,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    showResult: false,
    mychoice: {},
    opponentchoice: {},
    resultMesage: '',
  }

  playAgainButton = () => {
    this.setState({showResult: false})
  }

  getResult = () => {
    const {mychoice, opponentchoice, resultMesage} = this.state
    const {imageUrl} = opponentchoice
    return (
      <GetResultView
        mychoice={mychoice}
        opponentchoice={opponentchoice}
        resultMesage={resultMesage}
        playAgain={this.playAgainButton}
      />
    )
  }

  onGetImageId = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevstate => ({
        score: prevstate.score - 1,
        showResult: true,
        mychoice: [id, imageUrl],
        opponentchoice: choicesList[number],
        resultMesage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && 'PAPER') {
      this.setState(prevstate => ({
        score: prevstate.score + 1,
        showResult: true,
        mychoice: [id, imageUrl],
        opponentchoice: choicesList[number],
        resultMesage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && 'ROCK') {
      this.setState(prevstate => ({
        score: prevstate.score + 1,
        showResult: true,
        mychoice: [id, imageUrl],
        opponentchoice: choicesList[number],
        resultMesage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && 'PAPER') {
      this.setState(prevstate => ({
        score: prevstate.score - 1,
        showResult: true,
        mychoice: [id, imageUrl],
        opponentchoice: choicesList[number],
        resultMesage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && 'ROCK') {
      this.setState(prevstate => ({
        score: prevstate.score - 1,
        showResult: true,
        mychoice: [id, imageUrl],
        opponentchoice: choicesList[number],
        resultMesage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && 'SCISSORS') {
      this.setState(prevstate => ({
        score: prevstate.score + 1,
        showResult: true,
        mychoice: [id, imageUrl],
        opponentchoice: choicesList[number],
        resultMesage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        mychoice: [id, imageUrl],
        opponentchoice: choicesList[number],
        resultMesage: 'IT IS DRAW',
      })
    }
  }

  getImage = () => {
    const {choicesList} = this.props
    return (
      <UnorderedList>
        {choicesList.map(eachlist => (
          <Button
            key={eachlist.id}
            itemDetail={eachlist}
            onGetId={this.onGetImageId}
          />
        ))}
      </UnorderedList>
    )
  }

  render() {
    const {score, showResult} = this.state
    return (
      <MainContainer>
        <ScoreContainer>
          <Heading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
            <br />
          </Heading>
          <ScoreCardContainer>
            <ScoreText>Score</ScoreText>
            <ScoreSpan>{score}</ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.getResult() : this.getImage()}
        <PopUpContainer>
          <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLIineContainer>
                  <ClosedLineButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </ClosedLineButton>
                </CloseLIineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default Game
