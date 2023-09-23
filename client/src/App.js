import React, { useState } from 'react'

import {Typography,AppBar, Button} from '@mui/material'

import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifcations from './components/Notifications'


function App() {

  const [img,setImg]=useState("https://img.freepik.com/premium-photo/grunge-texture-dark-wallpaper_1258-14137.jpg");
  const img2="https://static.vecteezy.com/system/resources/thumbnails/001/984/861/small/abstract-blue-geometric-circles-overlapping-background-with-light-blue-free-vector.jpg";
  const img3="https://www.enjpg.com/img/2020/light-blue-background-1.jpg"
  const img1="https://img.freepik.com/premium-photo/grunge-texture-dark-wallpaper_1258-14137.jpg"

  const changeBackgroundImage1 = () => {
    setImg(img1);
  };
  const changeBackgroundImage2 = () => {
    setImg(img2);
  };
  const changeBackgroundImage3 = () => {
    setImg(img3);
  };

  return (
    <div style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>

      <div style={{margin:'50px', display:"flex", flexDirection:"col" , justifyContent:"center",gap: "10px"}}>
      <Button variant="contained"  color="success" onClick={changeBackgroundImage1}>Background 1</Button>
      <Button variant="contained"  color="success" onClick={changeBackgroundImage2}>Background 2</Button>
      <Button  variant="contained" color="success" onClick={changeBackgroundImage3}>Background 3</Button>
      </div>

      <AppBar position="static" color="inherit" style={{borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',}}>
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