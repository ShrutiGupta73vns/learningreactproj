
import './App.css';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import data from './assets/data'
function App() {
  const cards =data.map( item=> {
    return(
      <Cards 
      key={item.id}
      item={item}
      />
    )
  }

  )
  return (
    <div className="App">
      <Navbar/>
      <div className='card_container'>
    {cards}
      </div>
      
    </div>
  );
}

export default App;
