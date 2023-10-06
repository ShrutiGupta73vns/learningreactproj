import Troll from '../assets/Troll.png'

export default function Navbar(){
    return(
        <div className='navbar'>
            <div className='img'>
            <img className='troll' src={Troll} alt="troll face" />
            <p className='meme'>Meme Generator</p>
            
            </div>
            <p className='react_proj'>React Course-Project-3 </p>
        </div>
    )
}