// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameEnd, clickedEmojisList, topScore} = props

  return (
    <nav className="nav-cont">
      <div className="nav-logo">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameEnd ? (
        ''
      ) : (
        <div className="nav-text">
          <p className="score">Score: {clickedEmojisList.length}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
