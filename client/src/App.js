import React from 'react'

import {Typography,AppBar} from '@mui/material'

import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifcations from './components/Notifications'


function App() {

  return (
    <div >
        <AppBar position='static' color='inherit'>
            <Typography variant='h2' align='center'>
                VidSphere
            </Typography>
            <VideoPlayer/>
            <Options>
                <Notifcations/>
            </Options>
        </AppBar>
    </div>
  )
}

export default App