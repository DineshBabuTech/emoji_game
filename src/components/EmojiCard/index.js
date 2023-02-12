// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, checkClickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const getEmoji = () => {
    checkClickedEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button onClick={getEmoji} className="emoji-btn" type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
