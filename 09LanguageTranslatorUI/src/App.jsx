import { LanguageProvider } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import TextDisplay from './components/TextDisplay';

import './App.css'

function App() {
 
  return (
    <LanguageProvider>
      
      <div className='bg-yellow-600  w-[70%] '>
        <h1 className='text-2xl  font-bold p-5'>Multi Language APP UI</h1>
        <LanguageSelector/>
        <TextDisplay/>
      </div>
      
    </LanguageProvider>
  )
}

export default App
