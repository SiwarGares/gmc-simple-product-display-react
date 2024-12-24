import React from 'react';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ width: "200px" }} />;
};

export default Image;
