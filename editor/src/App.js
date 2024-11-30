import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  const [mode, setMode] = useState('dark');
  return (
    <>
      <Navbar mode={mode} />
      <div className="container">
        <Textform heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
