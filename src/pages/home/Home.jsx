import React, { Component } from 'react'
import { connect } from 'dva'

export class Home extends Component {
  render() {
    console.log(this.props,'props')
    return (
      <div>
        home
      </div>
    )
  }
}

// export default connect((state)=>({
//   ...state
// }))(Home)

export default connect((state)=>{
  console.log(state,8888);
  return {}
})(Home)