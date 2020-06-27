import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Lyrics = props => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  const handleDate = date => {
    const day = date.split("T")[0].split("-");
    return `${day[2]}/${day[1]}/${day[0]}`;
  };
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        const lyrics = res.data.message.body.lyrics;
        setLyrics({ lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
        );
      })
      .then(res => {
        const track = res.data.message.body.track;
        setTrack({ track });
      })
      .catch(error => {
        console.log("error", error);
      });
  }, [props.match.params.id]);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  )
    return <Spinner />;
  console.log(track);
  console.log(lyrics);
  return (
    <>
      <Link to="/" className="btn btn-primary btn-sm mb-4">
        Go Back
      </Link>
      <div className="card">
        <h5 className="card-header">
          {track.track.track_name} by{" "}
          <span className="text-secondary">{track.track.artist_name}</span>
        </h5>
        <div className="card-body">
          <p className="card-text">{lyrics.lyrics.lyrics_body}</p>
        </div>
      </div>
      <ul className="list-group mt-3">
        <li className="list-group-item">
          <strong>Album ID</strong>: {track.track.album_id}
        </li>
        <li className="list-group-item">
          <strong>Song Genre</strong>:{" "}
          {track.track.primary_genres.music_genre_list.length === 0
            ? "No Genre Available"
            : track.track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name}
        </li>
        <li className="list-group-item">
          <strong>Explicit Words</strong>:{" "}
          {track.track.explicit === 0 ? "No" : "Yes"}
        </li>
        <li className="list-group-item">
          <strong>Release Date</strong>: {handleDate(track.track.updated_time)}
        </li>
      </ul>
    </>
  );
};
export default Lyrics;
