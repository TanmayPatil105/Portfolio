import React, { useEffect, useState } from "react";
import getNowPlayingItem from "../api/SpotifyAPI";

export default function Spotify(props) {

    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});

    useEffect(() => {
        Promise.all([
        getNowPlayingItem(
            props.client_id,
            props.client_secret,
            props.refresh_token
        ),
        ]).then((results) => {
        setResult(results[0]);
        setLoading(false);
        });
    });


  return (
    <>
        {(loading || !result.isPlaying ) && 'currently listening to nothing 😕'}
        {!loading && result.isPlaying && <b>currently listening to <a className="text-warning" href={result.songUrl}>{result.title}</a> 😴</b> }
    </>
  )
}
