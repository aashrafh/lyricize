import React from "react";
import Loader from "react-loader-spinner";
const Spinner = () => {
  return (
    <Loader
      type="Bars"
      color="#0004ff"
      height={100}
      width={100}
      timeout={5000}
    />
  );
};

export default Spinner;
