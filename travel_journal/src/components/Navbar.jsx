import Logo from '../assets/Logo.svg'
export default function Navbar(){
    return(
        <div className='navbar'> 
            <img  className='logo' src={Logo} alt="logo" />
            <p className='heading'>my travel journal</p>
        </div>
    )
}