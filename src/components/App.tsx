import '../styles/App.css'
import { Link } from 'react-router'
import underConstructionGif from '../assets/under-construction.gif'

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>gabs was here</h1>
          <img src={underConstructionGif}/>
        </div>
        <Link to="/thoughts">thoughts</Link>
      </section>
    </>
  )
}

export default App
