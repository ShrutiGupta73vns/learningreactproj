import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Body(){
    return(
        <div className='inputbox'>
             <TextField className='box1' id="outlined-search" label="" type="search" />
             <TextField  className='box2' id="outlined-search" label="" type="search" />
        </div>
    )

}