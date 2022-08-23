import React from 'react';

import './css/Sidebar.css';
import SidebarOption from './SidebarOption';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" className='sidebarLogo'/>
      <hr/>
      <SidebarOption title = "Home" Icon = {HomeIcon}/>
      <SidebarOption title = "Search" Icon = {SearchIcon}/>
      <SidebarOption title = "Library" Icon = {LibraryMusicIcon}/>
      <br/>
      <strong className='sidebarTitle'>PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map(playlists => (
        <SidebarOption title = {playlists.name}/>
      ))}
      <SidebarOption title = 'Bollywood Top 100'/>
      <SidebarOption title = 'Best of Arijit Singh'/>
      <SidebarOption title = 'Best of Early 20s'/>
      <SidebarOption title = 'Party Mood'/>
      <SidebarOption title = 'Tribute to KK'/>
      <SidebarOption title = 'English Songs'/>
      <SidebarOption title = 'Best of Eminem AKA Sparsh Arya'/>
  </div>
  )
}

export default Sidebar