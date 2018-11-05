import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import City from "../containers/city";

import { setCity } from "../actions";

class ActiveCity extends Component {

  // componentWillMount() {
  //   this.props.setCity();
  // }

  render() {

    if (!this.props.activeCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }

    else {
      console.log(this.props.activeCity)
      const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
      return (
        <div className="active-city">
          <h3> {this.props.activeCity.name}</h3>
          <p> {this.props.activeCity.address}</p>
          <img src={src} width="100%"/>
        </div>
      );
    }
  };
}

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

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
