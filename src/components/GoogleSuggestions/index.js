// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="container-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="search-container">
            <div className="search-content">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                onChange={this.onChangeSearch}
                value={searchInput}
              />
              <div>
                <ul className="suggestion-list">
                  {searchResults.map(eachSuggestion => (
                    <SuggestionItem
                      key={eachSuggestion.id}
                      suggestionDetails={eachSuggestion}
                      updateSearchInput={this.updateSearchInput}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
