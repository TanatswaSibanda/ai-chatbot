import dropdown from './assets/keyboard_arrow_up.png'
import person from './assets/Logo.png'
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
      <div className='bottom'>
        <img src={person} alt="" className='person-icon' />
        <h3>How can I help you today?</h3>

      </div>
    </div>


  )
}

export default App
