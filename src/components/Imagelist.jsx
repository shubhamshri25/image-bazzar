import React from "react";

const Imagelist = ({ images }) => {
  return (
    <>
      {images &&
        images.map((value, index) => (
          // console.log(value.urls.small)
          <img key={index} src={value.urls.small} alt={value.alt_description} />
        ))}
    </>
  );
};

export default Imagelist;
