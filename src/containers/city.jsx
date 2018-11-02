import React, { Component } from 'react';

class City extends Component {

  // handleMouseClick = () => {
  //     this.props.selectCity(this.props.index);
  //     // console.log(this.props.index)
  // }

  render() {
    return (
          <div className="list-group-item">
            {this.props.name}
          </div>
      );
  }
}

export default City;
