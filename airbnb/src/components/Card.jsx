
import Star from '../assets/Star.svg'
import Ellipse from '../assets/Ellipse.svg'

export default function Card(props){
    let badgetext
if(props.item.openspots===0){
    badgetext="SOLD OUT"
}
else if(props.item.mode=== "online"){
    badgetext="ONLINE"
}
else badgetext=""
     
    return(
        <div className='card'>
            {!badgetext =="" && <div className='badge'>{badgetext}</div>}
            <img  className='katie' src={props.item.img} alt="katie" />
              <div className='testdiv'> <img  className='star' src={Star} alt="star" />
            <p className='rate'>{props.item.rating} </p>
            <p className='usa'>({props.item.reviewcount}) <img className='dot' src={Ellipse} alt="ellipse" />{props.item.country}</p></div>
            <p className='textdiv2'>{props.item.title}
            </p>
            <div className='textdiv3'> <p className='bold'>From ${props.item.price}</p><p className='person'>/ person</p></div>
        </div>
    )
}