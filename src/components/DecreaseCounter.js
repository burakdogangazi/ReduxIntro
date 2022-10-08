import React, { Component } from 'react'
import { decreaseCounter } from '../redux/actions/counterActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DecreaseCounter extends Component {
  render() {
    return (
      <button onClick={e=>{
        this.props.dispatch(decreaseCounter());
      }}>Decrase</button>
      
    )
  }
}



function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(decreaseCounter)}
}

export default connect(mapDispatchToProps)(DecreaseCounter);
