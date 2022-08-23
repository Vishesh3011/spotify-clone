import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/Login'
import Player from './components/Player';
import './App.css';

import { useDataLayerValue } from './components/DataLayer';
import { getTokenFromUrl } from './components/spotify';


const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('1k7b4sz8YrTqbcM9Z0HmOa').then(response => 
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );
    }
    console.log('I have a token:' , token);
  }, []);

  console.log("GG", user);
  console.log("OKE", token);

  return (
    <div className="App">
      {
        token ? (<Player spotify = {spotify}/>) : (<Login/>)
      }
    </div>
  );
}

export default App;
