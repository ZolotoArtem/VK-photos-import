import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { Search } from '../components/Search'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'
import { handleSearch } from '../actions/SearchActions'

import './App.css'

class App extends Component {
  render() {
    const {
      user,
      page,
      search,
      getPhotosAction,
      handleLoginAction,
      handleSearchAction,
    } = this.props

    return (
      <form
        className="row"
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <Page
          search={search}
          user={user}
          photos={page.photos}
          year={page.year}
          getPhotos={getPhotosAction}
          isFetching={page.isFetching}
        />
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
        <Search search={search} handleSearch={handleSearchAction} />
      </form>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
    search: store.search,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: (year, search) => dispatch(getPhotos(year, search)),
    handleLoginAction: () => dispatch(handleLogin()),
    handleSearchAction: e => dispatch(handleSearch(e)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
