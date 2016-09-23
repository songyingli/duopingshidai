import React, { PropTypes } from 'react'


import CardBg1 from '../images/32.jpg'



class WorkCard extends React.Component {
  render () {
    return(
      <div className=" col-sm-6 col-md-4" >
        <div className="work-card">
          <img src={CardBg1} />
          <div className='work-card-con'>
            <h3>作品一</h3>
            <p>2016.9.13</p>
          </div>
        </div>
      </div>
    )

  }
}

export default WorkCard;
