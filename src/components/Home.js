import React, { Fragment } from "react";
import Tracks from "./Tracks";
import Search from "./Search";
const Home = () => {
  return (
    <Fragment>
      <Search />
      <Tracks />
    </Fragment>
  );
};
export default Home;
