import dropdown from './assets/keyboard_arrow_up.png'
import './App.css'

function App() {

  return (
    <div>
      <div className='header'>
        <button type="button" className='model-selector' img src={dropdown} alt="image" >
          OpenAI GPT-5
          <img src={dropdown} alt="image" className='img' />
        </button>
      </div>
    </div>


  )
}

export default App
