import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Card from './components/Card';
import data from './assets/data'

function App() {
  const cards =data.map(card => {
    return(
      <Card
      key={card.id}
      img={card.img}
      rating ={card.rating}
      reviewcount={card.reviewcount}
      country={card.country}
      title={card.title}
      price={card.price} 
      />
       
    )
  }
    )

  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <div className='card_container'>
      
     
      {cards}
        </div>
    </div>
  );
}

export default App;
