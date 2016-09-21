import React, { PropTypes } from 'react';
import {Link} from 'react-router';


class NavFooter extends React.Component {
  render () {
    return(
      <div className='nav-footer'>
          <Link to='/' activeStyle={{color:'#FFEB3B'}} onlyActiveOnIndex={true}>
            <span className="glyphicon glyphicon-home"></span><br />Home
          </Link>
          <Link to='/blog' activeStyle={{color:'#FFEB3B'}}>
            <span className="glyphicon glyphicon-folder-open"></span><br />Blog
          </Link>
          <Link to='/work' activeStyle={{color:'#FFEB3B'}}>
            <span className="glyphicon glyphicon-tag"></span><br />Work
          </Link>
          <Link to='/about' activeStyle={{color:'#FFEB3B'}}>
            <span className="glyphicon glyphicon-heart-empty"></span><br />About
          </Link>


      </div>
    )
  }
}

export default NavFooter;
