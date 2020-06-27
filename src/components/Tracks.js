import React, { useContext } from "react";
import { Context } from "./../context";

const Tracks = () => {
  const [state] = useContext(Context);
  const { tracks, heading } = state;
  return <div></div>;
};
export default Tracks;
