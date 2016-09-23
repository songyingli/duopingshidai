import React from 'react';
import BlogCard from '../components/BlogCard';
import {getJson} from '../utils/helpers'


// let cardData=[
//   {index:1,title:'不做东西啥也学不成',desc:'要做出一个东西来的冲动，',url:'a'},
//   {index:2,title:'我的即兴写作技巧',desc:'即兴写作， ',url:'b'},
//   {index:3,title:'title1 3',desc:'morende shuju 3',url:'c'},
//   {index:4,title:'title1 4',desc:'morende shuju 4',url:'d'},
//   {index:5,title:'title1 5',desc:'morende shuju 5',url:'e'}
// ]



class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){

    getJson()
      .then( (recData) => {

        this.setState({
          data:recData.getJson,
          wait:false
        })
        //console.log(this.state.data);
      });
  }
  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        { this.state.data.map((item,i) => <BlogCard {...item} key={i} />)}
      </div>
    )

  }
}

export default Blog;
