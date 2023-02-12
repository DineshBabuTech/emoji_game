/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {isGameEnd: false, clickedEmojisList: [], topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = score => {
    const {topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score, isGameEnd: true})
    } else {
      this.setState({isGameEnd: true})
    }
  }

  playAgain = () => {
    const {topScore, clickedEmojisList} = this.state
    const score = clickedEmojisList.length
    if (score > topScore) {
      this.setState({isGameEnd: false, clickedEmojisList: [], topScore: score})
    } else {
      this.setState({isGameEnd: false, clickedEmojisList: []})
    }
  }

  checkClickedEmoji = id => {
    const {clickedEmojisList} = this.state
    const isEmojiAlreadyClicked = clickedEmojisList.includes(id)
    if (isEmojiAlreadyClicked) {
      this.finishGameAndSetTopScore(clickedEmojisList.length)
    } else {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const shuffledEmojisList = this.shuffledEmojisList()
    const {isGameEnd, topScore, clickedEmojisList} = this.state

    return (
      <div className="app-container">
        <NavBar
          isGameEnd={isGameEnd}
          clickedEmojisList={clickedEmojisList}
          topScore={topScore}
        />
        <div className="res-cont">
          {isGameEnd ? (
            <WinOrLoseCard
              clickedEmojisList={clickedEmojisList}
              emojisList={emojisList}
              playAgain={this.playAgain}
            />
          ) : (
            <ul className="emoji-container">
              {shuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  checkClickedEmoji={this.checkClickedEmoji}
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
