import dropdown from './assets/keyboard_arrow_up.png'
import person from './assets/Logo.png'
import add from './assets/Plus.png'
import submit from './assets/arrow_forward.png'
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='header'>
        <button type="button" className='model-selector' img src={dropdown} alt="image" >
          OpenAI GPT-5
          <img src={dropdown} alt="image" className='img' />
        </button>
      </div>
      <div className='bottom'>
        <img src={person} alt="" className='person-icon' />
        <h3>How can I help you today?</h3>
        <div className='input' >
          <img src={add} alt='' width={40} />
          <input type="text" id="input" placeholder='Ask me anything...' />
          <img src={submit} alt="" width={40} height={40} />
        </div>
      </div>
    </div>


  )
}

export default App
