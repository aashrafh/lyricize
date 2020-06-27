import React, { useContext } from "react";
import { Context } from "./../context";
import Spinner from "./Spinner";

const Tracks = () => {
  const [state] = useContext(Context);
  const { tracks, heading } = state;

  return <Spinner />;
};
export default Tracks;
