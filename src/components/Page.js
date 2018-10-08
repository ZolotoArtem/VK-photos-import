import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }
  render() {
    const { year, photos, isFetching } = this.props
    return (
      <div>
        <div>
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2016
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2015
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2014
          </button>
        </div>
        <h3>{year} год</h3>
        {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
        {photos.map(function(photo) {
          return (
            <img
              key={photo.id}
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
