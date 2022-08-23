import React from 'react'

import './css/Body.css';
import Header from './Header';
import SongRow from './SongRow';

import { useDataLayerValue } from './DataLayer';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify = {spotify}/>
      <div className='bodyInfo'>
        <img className='bodyInfoImage' src = {discover_weekly?.images[0].url} alt = ""/>

        <div className='bodyInfoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>

          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='bodySongs'>
        <div className='bodyIcons'>
          <PlayCircleFilledIcon className='bodyShuffle'/>
          <FavoriteIcon fontSize = 'large'/>
          <MoreHorizIcon/>
        </div>
        <div>
          {discover_weekly?.tracks.items.map(item => (
            <SongRow track = {item.track}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Body