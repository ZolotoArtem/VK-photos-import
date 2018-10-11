import React from 'react'
import PropTypes from 'prop-types'

export class Search extends React.Component {
  render() {
    return (
      <div className="search-field">
        <fieldset>
          <legend>Поиск по:</legend>
          <div>
            <input
              className="radio"
              type="radio"
              id="searchChoice1"
              name="search"
              value="personal"
              onChange={this.props.handleSearch}
            />
            <label htmlFor="contactChoice1">вашим фотографиям</label>

            <input
              className="radio"
              type="radio"
              id="searchChoice2"
              name="search"
              value="all"
              onChange={this.props.handleSearch}
            />
            <label htmlFor="contactChoice2">всем фотографиям</label>

            {this.props.search.type === 'all' ? (
              <div className="input-wrapper">
                <input
                  className="search-input"
                  type="search"
                  placeholder="Ключевое слово"
                  autoComplete="off"
                  onChange={this.props.handleSearch}
                  required
                />
              </div>
            ) : null}
          </div>
        </fieldset>
      </div>
    )
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}
