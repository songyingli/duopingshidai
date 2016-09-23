import React, { PropTypes } from 'react'
import Testchildren from './testchildren'
class TestChild extends React.Component {
  render () {
    return(
      <div>
        父辈
        <Testchildren />
      </div>
    )
  }
}

export default TestChild;
