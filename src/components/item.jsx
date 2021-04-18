import React from 'react';
import PropTypes from 'prop-types';

import photo from "../assets/photo.png"

import './item.css';

function Item(props) {
  const { name,email, } = props;

  return (
    <div className="item">
      <img 
        src= {photo}
        width= "250px"
        height="250px"
        alt= "none"
      />
      <h1>{name}</h1>
      <h3>{email}</h3>
      {/* <Price value={price} />
      <p>{desc}</p> */}
      <div>
        <button className="btn-l">
          <img
            src= {"https://eaes.eu/wp-content/uploads/2017/05/linkedin-logo.png"} 
            width= "25px"
            height="25px"
            alt= "none"
          />
        </button>
        <button className="btn-g">
          <img
            src= {"https://cdn.iconscout.com/icon/free/png-256/github-154-675675.png"} 
            width= "25px"
            height="25px"
            alt= "none"
          />
        </button>
        <button className="btn-r">
          <img
            src= {"https://img.icons8.com/ios/452/resume.png"} 
            width= "25px"
            height="25px"
            alt= "none"
          />
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Item;
