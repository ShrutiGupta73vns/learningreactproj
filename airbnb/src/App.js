
import './App.css';


import Navbar from './components/Navbar';
import Body from './components/Body';
import Card from './components/Card';

import data from './assets/data'

function App() {
  const cards =data.map(item => {
    return(
      <Card
      key={item.id}
      item={item}
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
