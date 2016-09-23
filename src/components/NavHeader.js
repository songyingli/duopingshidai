import React, { PropTypes } from 'react'

class NavHeader extends React.Component {

  handleBack(){
    this.context.router.goBack()
  }
  render () {
    return(
      <div className='nav-header'>
        <span onClick={this.handleBack.bind(this)} style={{cursor:'pointer'}}>
          <p className="glyphicon glyphicon-arrow-left"></p>Back
        </span>
        <h2>Emily’s Web@{this.props.title}</h2>
        <span className="glyphicon glyphicon-leaf"></span>
      </div>
    )
  }
}

NavHeader.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default NavHeader;
