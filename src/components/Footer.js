import React from 'react';
import { Grid, Slider } from '@material-ui/core'; 

import './css/Footer.css';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <img src = "https://storyofsong.com/wp-content/uploads/2017/05/Alan_Walker_-_Faded.png" alt = "" className='footerAlbumLogo'/>
        <div className='footerSongInfo'>
          <h4>Faded</h4>
          <p>Alan Walker</p>
        </div>
      </div>
      <div className='footerCenter'>
        <ShuffleIcon className = "footerGreen"/>
        <SkipPreviousIcon className = "footerIcon"/>
        <PlayCircleOutlineIcon fontSize = "large" className = "footerGreen"/>
        <SkipNextIcon className = "footerIcon"/>
        <RepeatIcon className = "footerGreen"/>
      </div>
      <div className='footerRight'>
        <Grid container spacing = {3}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeUpIcon/>
          </Grid>
          <Grid item xs = {4}>
            <Slider/>
          </Grid> 
        </Grid>
      </div>
    </div>
  )
}

export default Footer