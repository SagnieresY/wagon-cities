import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setCity } from "../actions";


class City extends Component {

  handleMouseClick = () => {
      this.props.setCity(this.props);
      // console.log(this.props.slug)
  }

  render() {
    return (
          <div className="list-group-item" onClick={this.handleMouseClick}>
            {this.props.name}
          </div>
      );
  }
};

  function mapStateToProps(state) {
    return {
      activeCity: state.activeCity
    };
  }

  function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCity },
    dispatch
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(City);
