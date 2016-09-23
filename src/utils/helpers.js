import axios from 'axios';

// 数据放到了demodata的仓库中使用的是raw地址

function getJson() {
  let address = `https://raw.githubusercontent.com/songyingli/demodata/master/duopingshidao-card.json?${Math.random()}`;
  return axios.get(address)
    .then( (res) => (
      { getJson:res.data }
      
    ))
    .catch(function (error) {
      alert(error);
    });
}

export {getJson}

function getMd(add){
  let address=`https://raw.githubusercontent.com/songyingli/demodata/master/blog/${add}.md`;
  return axios.get(address)
    .then((res)=>(
      {getMd:res.data }
      )
    )
    .catch(function(error){
      alert(error);
    });
}
export {getMd}
