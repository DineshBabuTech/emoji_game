// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {clickedEmojisList, emojisList, playAgain} = props
  const resetAgain = () => {
    playAgain()
  }

  const isWin = clickedEmojisList.length === emojisList.length

  return isWin ? (
    <div className="win-cont">
      <div className="text-cont">
        <h1 className="title">You Won</h1>
        <p className="descript">Best Score</p>
        <p className="num">12/12</p>
        <button onClick={resetAgain} className="play-btn" type="button">
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="won or lose"
      />
    </div>
  ) : (
    <div className="win-cont">
      <div className="text-cont">
        <h1 className="title">You Lose</h1>
        <p className="descript">Score</p>
        <p className="num">{clickedEmojisList.length}/12</p>
        <button onClick={resetAgain} className="play-btn" type="button">
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
