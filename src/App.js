import React, {useEffect, useState} from 'react';
import './App.css';



import ControlPanel from "./components/control-panel/ControlPanel.jsx";
import FileZone from "./components/file-zone/FileZone.jsx";
import getMockText from './text.service';
import Synonims from "./components/synonims/Synonims";

const App = () => {
  const [text, setText] = useState('');
  
  const getText = () => {
    getMockText().then(function (result) {
      console.log(result);
      setText(result);
    });
  };
  
  useEffect(() => {
    getText();
  }, [])
  
    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel/>
          <FileZone mockText={text}/>
          <Synonims/>
        </main>
      </div>
    );
};

export default App;
