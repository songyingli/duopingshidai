import React, { PropTypes } from 'react';
import {Link} from 'react-router';

class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        width:'80%',
        margin:'0 auto',
        borderRadius:'10px',
        marginBottom:'40px',
        boxShadow: 'rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px',
        paddingBottom:'20px'

      },
      index:{
        backgroundColor:'#00838F',
        height:'80px',
        width:'100%',
        padding:'10px'

      },

      num:{
        display:'block',
        width:'60px',
        height:'60px',
        borderRadius:'30px',
        textAlign:'center',
        lineHeight:'60px',
        margin:'0 auto',
        border:'2px solid #fff',
        color:'#fff',

      },
      cont:{
        padding:'0 20px'
      },

      title:{
        fontSize:'20px',
        padding:'15px 0',
      },

      desc:{
        fontSize:'18px',
        lineHeight:'1.5em',
        paddingBottom:'20px'

      }

    }
    let address=`item/${this.props.url}`
    return(
      <div style={styles.root}>
        <div style={styles.index}>
          <span style={styles.num}>{this.props.index}</span>
        </div>
        <div style={styles.cont}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
          <Link to={address}  className='blog-btn'>more info</Link>
        </div>
      </div>
    )


  }
}
BlogCard.defaultProps={
  index:'1',
  title:'默认标题',
  desc:'默认内容',

}
BlogCard.propTypes={
  index:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,

}
export default BlogCard;
