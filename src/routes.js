import React, { PropTypes } from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import App from './App.js';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import Work from './Work/Work';
import Item from './Item/Item';

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={Home}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/work' component={Work}/>
          <Route path='/about' component={About}/>
          <Route path='/item/:url' component={Item}/>
        </Route>
      </Router>
    )
  }
}

export default Routers;
