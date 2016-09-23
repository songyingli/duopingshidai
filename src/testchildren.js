import React, { PropTypes } from 'react'

class Testchildren extends React.Component {
  componentDidMount(){
    console.log(this.context)
  }
  render () {

    return(
      <div>
      孙子被
      </div>
    )

  }
}
Testchildren.contextTypes = {
  color: React.PropTypes.string
};
export default Testchildren;
