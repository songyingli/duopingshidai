import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';

import './main.css'


class App extends React.Component {
  constructor(){
    super();
    this.state={
      showLeftNav:false
    }
  }

  //第一种写法
  // componentDidMount(){
  //   let setNavBarState=function(){
  //     this.setState({showLeftNav:window.innerWidth>760?true:false})
  //   }.bind(this)
  //   setNavBarState();
  //   window.onresize=setNavBarState;
  // }

setNavBarState(){
  this.setState({showLeftNav:window.innerWidth>=760 ? true:false})
}
componentDidMount(){
  this.setNavBarState();
  window.onresize=this.setNavBarState.bind(this);
}


  render () {
    return(
      <div className='content-wrap'>
          {this.state.showLeftNav ? <LeftNav />:<NavHeader />}
          <div className='content-main'>
            {this.props.children}
          </div>
          {this.state.showLeftNav?null:<NavFooter />}
      </div>
    )
  }
}

export default App;
