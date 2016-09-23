import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className='home-container'>
        <div className='home-cover'>
          <div className='home-item'>
            <h2 style={{color:'#fff',fontSize:'45px'}}>HI,My baby!</h2>
            <p style={{color:'#fff',fontSize:'26px',marginBottom:'30px'}}>Web Developer</p>
            <button className='home-btn'>search </button>
          </div>
        </div>
      </div>
    )

  }
}

export default Home;
