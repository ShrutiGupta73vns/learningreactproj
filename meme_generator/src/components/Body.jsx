import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Body(){
    return(
        <div className='componenets'>
        <div className='inputbox'>
             <TextField className='box1' id="outlined-search" label="top text" type="search" />
             <TextField  className='box2' id="outlined-search" label="bottom text" type="search" /></div>
            <div className='buttondiv' > <button  className='button'><p className='buttontext'> Get a new meme image 🖼</p></button></div>
        </div>
    )

}