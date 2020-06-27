import React, { useContext } from "react";
import { Context } from "./../context";
import Spinner from "./Spinner";
import Track from "./Track";
const Tracks = () => {
  const [state] = useContext(Context);
  const { tracks, heading } = state;

  if (tracks === undefined || tracks.length === 0) return <Spinner />;
  else {
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {tracks.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>
    );
  }
};
export default Tracks;
