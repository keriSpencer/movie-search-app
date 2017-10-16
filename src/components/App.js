import React, { Component } from 'react'
import '../styles/App.css'
import Movie from './Movie'
import Results from './Results'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      movies: []
    }
  }

  _titleGrab = e => {
    e.preventDefault()

    this.setState({
      title: e.target.value
    })
  }

  _handleSubmit = e => {
    e.preventDefault()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b595c4f4143e0077d86ced9398161b54&query=${this.state
      .title}`
    fetch(url).then(r => r.json()).then(json => {
      this.setState({ movies: json.results })
      console.log(json.results)
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Movie App!</h2>
        <form onSubmit={this._handleSubmit}>
          <div>
            <label>Search for your movie!</label>
          </div>
          <input
            type="text"
            onChange={this._titleGrab}
            placeholder="Movie title here"
            ref={input => {
              this.movieInput = input
            }}
          />
          <input type="submit" value="Search!" />
        </form>
        <div>
          <Results data={this.state.movies} />

          {/* {this.state.movies.map(movie => {
            return <Movie foo={movie} />
          })} */}
        </div>
      </div>
    )
  }
}

export default App

// input field
// handle change in input -> update state
// onSubmit ->
// query -> get results -> shove resutls into state (setState)
// Build your fucking components ()
