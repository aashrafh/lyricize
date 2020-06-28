import React, { useContext, useState, useEffect } from "react";
import { Context } from "./../../src/context";
import axios from "axios";
const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackName, setTrackName] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackName}&page_size=25&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        const tracks = res.data.message.body.track_list;
        setState({
          tracks: tracks,
          heading: "Search Result"
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }, [trackName]);

  const handleUserInput = e => {
    e.preventDefault();
    setTrackName(userInput);
  };

  const onChange = e => {
    setUserInput(e.target.value);
    handleUserInput(e);
  };
  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fa fa-music" aria-hidden="true" /> Search For A Track
      </h1>
      <p className="lead text-center">Lyricize any track</p>
      <form onSubmit={handleUserInput}>
        <div className="form-group">
          <input
            type="text"
            id="search"
            className="form-control form-control-lg"
            placeholder="Track name..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          <i className="fa fa-pencil" aria-hidden="true" /> Lyricize
        </button>
      </form>
    </div>
  );
};
export default Search;
