import React, { useEffect } from 'react'
import { useState } from 'react';
import Login from './components/Login/Login'
import { getTokenFromResponse } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/pages/Player';
import { useDataLayerValue } from './datalayer/Datalayer';

const spotify = new SpotifyWebApi();

const App = () => {
  const [{user,token} , dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = ""
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type : "SET_TOKEN",
        token : _token,
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type : "SET_USER",
          user : user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists
        })
      })

      spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then(response => {
        dispatch({
          type : "SET_DISCOVER_WEEKLY",
          discover_weekly : response
        })
      })
    }
  }, [])
  return (
    <>
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </>
  )
}

export default App
