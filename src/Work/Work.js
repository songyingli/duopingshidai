import React from 'react';

import WorkCard from '../components/WorkCard'



class Work extends React.Component {
  render () {
    return(
      <div className='container'>
        <div className="row">
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />

        </div>
      </div>
    )

  }
}

export default Work;
