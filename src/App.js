import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {NavBar} from './components/NavBar/NavBar'
import './App.css'

function App() {
  return(
    <div className='NavBar'>
      <NavBar/>
      <ItemListContainer/>
    </div>
  )
}

export default App