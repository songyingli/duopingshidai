import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';

import './main.css'


class App extends React.Component {
  constructor(){
    super();
    this.state={
      showLeftNav:false,
      title:'Home'
    }
  }
  setNavBarState(){
    this.setState({showLeftNav:window.innerWidth>=760 ? true:false});
    }
  componentDidMount(){
    this.setNavBarState();
    window.onresize=this.setNavBarState.bind(this);
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/',true)? 'Home':
            this.context.router.isActive('/blog')? 'Blog':
            this.context.router.isActive('/about')? 'About':
            this.context.router.isActive('/work')? 'Work':'网页错误'
    })
  }
  componentWillReceiveProps(){
    this.setTitle()
  }

render () {
  return(
    <div className='content-wrap'>
        {this.state.showLeftNav ? <LeftNav title={this.state.title}/>:<NavHeader title={this.state.title}/>}
        <div className='content-main'>
          {this.props.children}
        </div>
        {this.state.showLeftNav?null:<NavFooter />}
    </div>
  )
}
}
App.contextTypes={
  router:React.PropTypes.object.isRequired
}
export default App;
