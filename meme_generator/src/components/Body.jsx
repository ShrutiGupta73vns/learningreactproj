
import React from "react"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import memesdata from '../memesdata';

export default function Body(){
    const [memeimage, setMemeImage]= React.useState("")
    function getrandommeme(){
        
        const memesarray= memesdata.data.memes
        const randomno= Math.floor(Math.random()*memesarray.length)
        // const url=memesarray[randomno].url
        
        
            setMemeImage(memesarray[randomno].url)
        
        
    }
    return(
        <div className='componenets'>
        <div className='inputbox'>
             <TextField className='box1' id="outlined-search" label="top text" type="search" />
             <TextField  className='box2' id="outlined-search" label="bottom text" type="search" /></div>
            <div className='buttondiv' > <button  className='button' onClick={getrandommeme}><p className='buttontext'> Get a new meme image 🖼</p></button></div>
            <img src={memeimage} alt="meme"  className="memeimg"/>
        </div>
    )

}