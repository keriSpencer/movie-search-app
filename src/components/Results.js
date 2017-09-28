import React, { Component } from 'react'

class Results extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.data)

    return (
      <div>
        {this.props.data.map(results => {
          return results.title
        })}
      </div>
    )
  }
}

export default Results
