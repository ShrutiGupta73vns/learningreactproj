import Star from '../assets/Star.svg'
import Ellipse from '../assets/Ellipse.svg'

export default function Card(props){
     
    return(
        <div className='card'>
            <img  className='katie' src={props.img} alt="katie" />
              <div className='testdiv'> <img  className='star' src={Star} alt="star" />
            <p className='rate'>{props.rating} </p>
            <p className='usa'>({props.reviewcount}) <img src={Ellipse} alt="ellipse" />{props.country}</p></div>
            <p className='textdiv2'>{props.title}
            </p>
            <div className='textdiv3'> <p className='bold'>From ${props.price}</p><p className='person'>/ person</p></div>
        </div>
    )
}