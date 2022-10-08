import React, { Component } from "react";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseByTwoCounter());
          }}
        >
          Decrase
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
