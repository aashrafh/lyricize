import React, { useState, useEffect } from "react";
import axios from "axios";
export const Context = React.createContext();
export function Provider({ children }) {
  let initialState = {
    tracks: [],
    heading: "Top 25 Tracks"
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=25&country=eg&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        setState({
          tracks: res.data.message.body.track_list,
          heading: `Top ${res.data.message.body.track_list.length} Tracks`
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
