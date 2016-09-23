import React, { PropTypes } from 'react';
import {Link} from 'react-router';



class LeftNav extends React.Component {
  render () {
    return(
      <div className='left-nav'>
        <h2>Emily’s Web @{this.props.title}</h2>
        <div className='line'></div>
        <Link to='/' activeStyle={{color:'#FFEB3B'}} onlyActiveOnIndex={true}>
          <span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;Home
        </Link>
        <Link to='/blog' activeStyle={{color:'#FFEB3B'}}>
          <span className="glyphicon glyphicon-folder-open"></span>&nbsp;&nbsp;Blog
        </Link>
        <Link to='/work' activeStyle={{color:'#FFEB3B'}}>
          <span className="glyphicon glyphicon-tag"></span>&nbsp;&nbsp;Work
        </Link>
        <Link to='/about' activeStyle={{color:'#FFEB3B'}}>
          <span className="glyphicon glyphicon-heart-empty"></span>&nbsp;&nbsp;About
        </Link>
      </div>

    )

  }
}

export default LeftNav;
