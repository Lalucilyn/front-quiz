import React from 'react';
import PropTypes from 'prop-types';

const Thumb = props => {
  return (
    <div className={props.classes}>
      <img 
      src={props.src} 
      alt={props.alt} 
      title={props.title} 
      onMouseEnter={() => {return props.hoverFunction ? props.hoverFunction() : null}} 
      onMouseLeave={() => {return props.hoverFunction ? props.hoverFunction() : null}}
      />
    </div>
  );
};

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired,
  hoverFunction: PropTypes.func
};

export default Thumb;
