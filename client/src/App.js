import React from 'react'

import {Typography,AppBar} from '@mui/material'

import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifcations from './components/Notifications'


function App() {

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifcations />
      </Options>
    </div>
  );
}

export default App