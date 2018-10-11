import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year, this.props.search)
  }
  render() {
    const { user, year, photos, isFetching } = this.props
    const buttonClass =
      user.name && this.props.search.type ? 'btn' : 'btn btn_disabled'
    console.warn(!(user.name && this.props.search.type))
    return (
      <div>
        <div>
          <button
            className={buttonClass}
            onClick={this.onBtnClick}
            disabled={!(user.name && this.props.search.type)}
          >
            2018
          </button>
          <button
            className={buttonClass}
            onClick={this.onBtnClick}
            disabled={!(user.name && this.props.search.type)}
          >
            2017
          </button>
          <button
            className={buttonClass}
            onClick={this.onBtnClick}
            disabled={!(user.name && this.props.search.type)}
          >
            2016
          </button>
          <button
            className={buttonClass}
            onClick={this.onBtnClick}
            disabled={!(user.name && this.props.search.type)}
          >
            2015
          </button>
          <button
            className={buttonClass}
            onClick={this.onBtnClick}
            disabled={!(user.name && this.props.search.type)}
          >
            2014
          </button>
        </div>
        <h3>{year} год</h3>
        {isFetching ? (
          <p>Загрузка...</p>
        ) : (
          <p>Загружено {photos.length} фото.</p>
        )}
        {photos.map(function(photo) {
          return (
            <img
              key={photo.id / photo.owner_id}
              src={photo.sizes[0].url}
              width={photo.sizes[0].width}
              height={photo.sizes[0].height}
              alt="img"
            />
          )
        })}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}
