import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import './App.css'
import {NavBar} from './components/NavBar/NavBar'
import {itemCount} from './components/itemCount/itemCount'

function App() {
  return(
    <div className='NavBar'>
      <NavBar/>
      <ItemListContainer/>
      <itemCount/>
    </div>
  )
}

export default App