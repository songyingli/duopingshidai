import React, { PropTypes } from 'react'



class NavHeader extends React.Component {
  render () {
    return(
      <div className='nav-header'>
        <span>
          <p className="glyphicon glyphicon-arrow-left"></p>Back
        </span>
        <h2>Emily’s Web</h2>
        <span className="glyphicon glyphicon-leaf"></span>
      </div>
    )
  }
}

export default NavHeader;
