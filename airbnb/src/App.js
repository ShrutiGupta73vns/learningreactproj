
import './App.css';
import katieatie from './assets/Katie.png' 
import  Wedding from './assets/Wedding.jpg' 
import katie from './assets/Katie.png' 
import Navbar from './components/Navbar';
import Body from './components/Body';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <div className='card_container'>
      <Card
      img={katie}
      rating ={5}
      reviewcount={6}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136} 
      />
     <Card
      img={Wedding}
      rating ={5}
      reviewcount={30}
      country="USA"
      title="Learn wedding photography"
      price={125} 
      />
        </div>
    </div>
  );
}

export default App;
