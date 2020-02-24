import React, { useEffect, useState } from 'react';
import './FileZone.scss';

import { SynonimsContext } from '../../context/synonims-context';

import debounce from "../../utils/debounce";
import fetchByParams from "../../utils/fetch";

const FileZone = () => {
  const [text, setText] = useState('');
  const [words, setWords] = useState('');
  
  
  useEffect(() => {
    const lastWord = text.trim().split(/\s+/).pop();
    const synonims = lastWord.length > 3 && fetchByParams(`https://api.datamuse.com/sug`, {
      s: lastWord,
      max: 10
    });
    setWords(synonims);
  }, [text]);
  
  const handleInput = (e) => {
      setText(e.target.innerText);
  };
  
  return (
    <SynonimsContext.Provider value={words}>
      <div id="file-zone">
        <div
          onInput={handleInput}
          contentEditable="true"
          placeholder="Type your text here"
          id="file">
        </div>
      </div>
    </SynonimsContext.Provider>
  );
};

export default FileZone;
