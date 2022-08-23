import React from 'react';

import './css/Login.css';
import { loginUrl } from './spotify';

function Login() {
    // Runs code based on a given condition
  return (
    <div className='login'>
        <h1>This is the login page</h1>
        <img src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt = ""/>
        <a href = {loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login