
import Gps from "../assets/Gps.svg";
export default function Cards(props) {
  return (
    <div>
    <div className="containers">
      <div>
        <img className="image" src={props.item.img} alt="fuji" />
      </div>
      <div className="text">
        <div className="location">
          <img className="gps" src={Gps} alt="locator" />
          <p className="country">{props.item.location} </p>
          <a
            href={props.item.anchor}
           className="anchor">
            View on Google Maps
          </a>
        </div>
        <p className="desti">{props.item.place}</p>
        <p className="date">{props.item.date}</p>
        <p className="description">
        {props.item.description}
        </p>
      </div>
    </div>
    <hr className="line"/>
    </div>
  );
}
