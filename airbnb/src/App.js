
import './App.css';
import katieatie from './assets/Katie.png' 
import  Wedding from './assets/Wedding.jpg' 
import katie from './assets/Katie.png' 
import Navbar from './components/Navbar';
import Body from './components/Body';
import Card from './components/Card';
import  Bike from './assets/Bike.jpg' 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <div className='card_container'>
      <Card
      img={katie}
      rating ={5.0}
      reviewcount={6}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136} 
      />
     <Card
      img={Wedding}
      rating ={5.0}
      reviewcount={30}
      country="USA"
      title="Learn wedding photography"
      price={125} 
      />
      <Card
      img={Bike}
      rating ={4.8}
      reviewcount={2}
      country="USA"
      title="Group Mountain biking"
      price={50} 
      />
        </div>
    </div>
  );
}

export default App;
