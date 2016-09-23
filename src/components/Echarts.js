import React, { PropTypes } from 'react'
import echarts from 'echarts'



class Echarts extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
        title: {
            text: '技能展示'
        },
        tooltip: {},
        legend: {
            data:['']
        },
        xAxis: {
            data: ["html","css","js","jquery","react","node.js"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [75, 20, 36, 10, 10, 20]
        }]
    }
  )



  }

  render () {
    return(
      <div id="main" style={{width:'100vw',height:'50vh',maxHeight:'300px'}}>
      </div>
    )
  }
}

export default Echarts;
