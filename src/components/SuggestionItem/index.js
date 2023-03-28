// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={onSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
