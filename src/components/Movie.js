import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.foo.title}
        </li>
      </div>
    )
  }
}

export default Movie
