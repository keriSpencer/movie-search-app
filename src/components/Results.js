import React, { Component } from 'react'

class Results extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.data.map((results, i) =>
          <li key={i} id="eachMovie">
            <div id="title">
              <h2>
                {results.title}
              </h2>
            </div>
            <br />
            <div id="overview">
              <p>
                {results.overview}
              </p>
            </div>
          </li>
        )}
      </div>
    )
  }
}

export default Results
