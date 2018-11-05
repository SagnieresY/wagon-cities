import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import City from "../containers/city";

import { setCities } from "../actions";

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
       <div className="cities">
          {this.props.cities.map(({ name, slug, address }) => <City name={name} slug={slug} address={address} key={name} />)}
        </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setCities: setCities },
 dispatch
 );
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
