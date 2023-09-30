import Image from '../assets/Image.png'
 export default function Body(){
    return(

        <div className='body'>
            <div className='image'>
                <img src={Image} alt="body" />
            </div>
            <div className='text'>
                <p className='heading'>Online Experiences</p>
                <p className='desc'>Join unique interactive activities led
                    by one-of-a-kind hosts all without leaving home 
                </p>
            </div>

        </div>

    )
 }