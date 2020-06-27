import React from "react";
import Loader from "react-loader-spinner";
const Spinner = () => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return (
    <Loader
      type="Bars"
      color="#0004ff"
      height={100}
      width={100}
      timeout={3000}
      style={style}
    />
  );
};

export default Spinner;
