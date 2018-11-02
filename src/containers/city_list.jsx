import React, { Component } from 'react';
import City from './city.jsx';

const CityList = (props) => {
  const renderList = () => {
    return props.cities.map((city, index) => {
      return (
        <City
          name={city.name}
          address={city.address}
          key={city.name}
          selectCity={props.selectCity}
          index={index}
        />
      );
    });
  };

  return (
     <div className="cities">
        {renderList()}
      </div>
  );
};
export default CityList;


